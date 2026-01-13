// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Pausable.sol";

contract VotingToken is ERC20, Ownable, Pausable {    
    // =========================
    // STRUCTS
    // =========================
    struct Candidate {
        uint256 id;
        string name;
        uint256 voteCount;
        bool active;
    }

    // =========================
    // VOTING CONFIG
    // =========================
    uint256 public startTime;
    uint256 public endTime;
    uint256 public maxVotes; // 0 = không giới hạn
    uint256 public votesCount;

    // =========================
    // CANDIDATES
    // =========================
    uint256 public candidatesCount;
    mapping(uint256 => Candidate) public candidates;
    mapping(string => uint256) public nameToId;

    // =========================
    // VOTERS
    // =========================
    mapping(address => bool) public hasVoted;
    mapping(address => uint256) public votedCandidate;
    address[] public votersList;

    // =========================
    // TOKEN PURCHASE TRACKING
    // =========================
    mapping(address => bool) public hasPurchased; // Theo dõi ai đã mua token

    // =========================
    // EVENTS
    // =========================
    event CandidateAdded(uint256 indexed id, string name);
    event CandidateDisabled(uint256 indexed id);
    event Voted(address indexed voter, string candidateName);
    event VotingTimeSet(uint256 start, uint256 end);
    event MaxVotesSet(uint256 maxVotes);
    event ElectionReset();
    event TokensDistributed(address indexed to, uint256 amount);
    event TokenPurchased(address indexed buyer, uint256 amount);
    event AllCandidatesCleared();

    // =========================
    // CONSTANTS
    // =========================
    uint256 public constant TOKEN_PRICE = 0.01 ether; // 0.01 ETH = 1 token
    uint256 public constant VOTES_PER_TOKEN = 1;

    // =========================
    // CONSTRUCTOR (FIX OWNABLE)
    // =========================
    constructor()
        ERC20("VotingToken", "VOTE")
        Ownable(msg.sender)  // Đúng với OpenZeppelin 5.x
    {}
    

    // =========================
    // MODIFIERS
    // =========================
    modifier onlyVotingPeriod() {
        require(block.timestamp >= startTime && block.timestamp <= endTime, "Not voting period");
        require(!paused(), "Voting is paused");
        _;
    }

    modifier validCandidate(string memory _name) {
        uint256 id = nameToId[_name];
        require(id != 0, "Candidate does not exist");
        require(candidates[id].active, "Candidate is not active");
        _;
    }

    // =========================
    // ADMIN FUNCTIONS
    // =========================

    // Phân phối token cho voters - MỖI NGƯỜI CHỈ 1 TOKEN
    function distributeTokens(address[] memory _recipients, uint256[] memory _amounts)
        external
        onlyOwner
    {
        require(_recipients.length == _amounts.length, "Length mismatch");

        for (uint256 i = 0; i < _recipients.length; i++) {
            require(!hasPurchased[_recipients[i]], "Recipient has already purchased a token");
            require(_amounts[i] == 1, "Can only distribute 1 token per recipient");

            _mint(_recipients[i], _amounts[i] * 10 ** decimals());
            hasPurchased[_recipients[i]] = true; // Đánh dấu đã có token
            emit TokensDistributed(_recipients[i], _amounts[i]);
        }
    }

    // Thêm ứng viên
    function addCandidate(string memory _name) external onlyOwner {
        require(bytes(_name).length > 0, "Empty name");
        require(nameToId[_name] == 0, "Candidate exists");

        candidatesCount++;
        candidates[candidatesCount] = Candidate({
            id: candidatesCount,
            name: _name,
            voteCount: 0,
            active: true
        });

        nameToId[_name] = candidatesCount;
        emit CandidateAdded(candidatesCount, _name);
    }

    // Vô hiệu hóa ứng viên
    function disableCandidate(uint256 _id) external onlyOwner {
        require(_id > 0 && _id <= candidatesCount, "Invalid ID");
        require(candidates[_id].active, "Already disabled");

        candidates[_id].active = false;
        emit CandidateDisabled(_id);
    }

    // Set thời gian voting
    function setVotingTime(uint256 _startTime, uint256 _endTime) external onlyOwner {
        require(_startTime >= block.timestamp, "Start must be future");
        require(_endTime > _startTime, "End after start");
        require(_endTime - _startTime >= 1 hours, "Too short");
        require(_endTime - _startTime <= 30 days, "Too long");

        startTime = _startTime;
        endTime = _endTime;

        emit VotingTimeSet(_startTime, _endTime);
    }

    // Set số phiếu tối đa
    function setMaxVotes(uint256 _maxVotes) external onlyOwner {
        require(_maxVotes == 0 || _maxVotes > votesCount, "Invalid maxVotes");
        maxVotes = _maxVotes;

        emit MaxVotesSet(_maxVotes);
    }

    // Pause / Resume
    function setPaused(bool _paused) external onlyOwner {
        if (_paused) {
            _pause();
        } else {
            _unpause();
        }
    }

    // Xóa tất cả ứng viên (internal)
    function _clearAllCandidates() internal {
        for (uint256 i = 1; i <= candidatesCount; i++) {
            if (bytes(candidates[i].name).length > 0) {
                delete nameToId[candidates[i].name];
            }
            delete candidates[i];
        }
        candidatesCount = 0;
        emit AllCandidatesCleared();
    }

    // Reset election - XÓA TẤT CẢ ỨNG VIÊN
    function resetElection() external onlyOwner {
        // 1. Xóa tất cả ứng viên
        _clearAllCandidates();
        
        // 2. Reset tất cả người vote
        for (uint256 i = 0; i < votersList.length; i++) {
            hasVoted[votersList[i]] = false;
            votedCandidate[votersList[i]] = 0;
            // KHÔNG xóa hasPurchased để giữ quy tắc 1 token/người
        }

        // 3. Reset mảng voters
        delete votersList;
        votesCount = 0;
        
        // 4. Reset thời gian và giới hạn
        startTime = 0;
        endTime = 0;
        maxVotes = 0;

        // 5. Unpause nếu đang paused
        if (paused()) {
            _unpause();
        }

        emit ElectionReset();
    }

    // =========================
    // USER FUNCTIONS
    // =========================

    // Mua token bằng ETH - CHỈ ĐƯỢC MUA 1 LẦN
    function buyTokens() external payable {
        require(msg.value > 0, "Send ETH");
        require(!hasPurchased[msg.sender], "You have already purchased a token");
        
        // Tính số token dựa trên ETH gửi
        uint256 tokenAmount = (msg.value * 10 ** decimals()) / TOKEN_PRICE;
        require(tokenAmount > 0, "Not enough ETH");
        
        _mint(msg.sender, tokenAmount);
        hasPurchased[msg.sender] = true; // Đánh dấu đã mua token
        
        emit TokenPurchased(msg.sender, tokenAmount);
    }

    // Bỏ phiếu
    function vote(string memory _candidateName)
        external
        onlyVotingPeriod
        validCandidate(_candidateName)
    {
        require(!hasVoted[msg.sender], "Already voted");
        require(balanceOf(msg.sender) >= 1 * 10 ** decimals(), "Not enough tokens");

        if (maxVotes > 0) {
            require(votesCount < maxVotes, "Max votes reached");
        }

        _transfer(msg.sender, address(this), 1 * 10 ** decimals());

        uint256 candidateId = nameToId[_candidateName];
        candidates[candidateId].voteCount++;

        hasVoted[msg.sender] = true;
        votedCandidate[msg.sender] = candidateId;
        votersList.push(msg.sender);
        votesCount++;

        emit Voted(msg.sender, _candidateName);

        if (maxVotes > 0 && votesCount >= maxVotes) {
            _pause();
        }

        if (block.timestamp >= endTime) {
            _pause();
        }
    }

    // =========================
    // VIEW FUNCTIONS
    // =========================

    function getCandidates() external view returns (Candidate[] memory) {
        Candidate[] memory list = new Candidate[](candidatesCount);
        for (uint256 i = 1; i <= candidatesCount; i++) {
            list[i - 1] = candidates[i];
        }
        return list;
    }

    function getVoters() external view returns (address[] memory) {
        return votersList;
    }

    function getWinner() external view returns (string memory winner, uint256 votes) {
        uint256 highest = 0;
        uint256 winnerId = 0;

        for (uint256 i = 1; i <= candidatesCount; i++) {
            if (candidates[i].active && candidates[i].voteCount > highest) {
                highest = candidates[i].voteCount;
                winnerId = i;
            }
        }

        if (winnerId == 0) {
            return ("", 0);
        }

        return (candidates[winnerId].name, highest);
    }

    function getVotingInfo() external view returns (
        uint256,
        uint256,
        uint256,
        uint256,
        uint256,
        bool
    ) {
        uint256 remaining = maxVotes > 0 ? maxVotes - votesCount : 0;

        bool active = block.timestamp >= startTime &&
                      block.timestamp <= endTime &&
                      !paused();

        return (startTime, endTime, maxVotes, votesCount, remaining, active);
    }
}