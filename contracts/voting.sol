// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/* ================= IMPORT OPENZEPPELIN ================= */
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

/*
 * Voting + ERC20 Contract
 */
contract VotingExtended is ERC20, Ownable {

    /* ================= CONTROL ================= */
    bool public paused;   

    modifier whenNotPaused() {
        require(!paused, "Contract dang tam dung");
        _;
    }

    /* ================= VOTING ================= */
    uint256 public constant ONE_TOKEN = 1;
    uint256 public votersCount;
    uint256 public maxVoters = 11;

    uint256 public startTime;
    uint256 public endTime;

    struct Candidate {
        uint256 id;
        string name;
        uint256 voteCount;
        bool active;
    }

    uint256 public candidatesCount;
    mapping(uint256 => Candidate) public candidates;
    mapping(string => uint256) public nameToId;

    mapping(address => bool) public hasVoted;
    mapping(address => uint256) public votedCandidate;
    address[] public votersList;

    /* ================= EVENTS ================= */
    event CandidateAdded(uint256 indexed id, string name);
    event CandidateDisabled(uint256 indexed id);
    event Voted(address indexed voter, string candidateName);
    event VotingTimeSet(uint256 start, uint256 end);
    event Paused(bool status);
    event ElectionReset();

    /* ================= CONSTRUCTOR ================= */
    constructor()
        ERC20("Vote Token", "VOTE")
        Ownable(msg.sender)
    {
        // Mint 1000 token cho owner
        _mint(msg.sender, 1000);

        // Thêm ứng viên mặc định
        _addCandidate("Van C");
        _addCandidate("Van D");
        _addCandidate("Van E");
    }

    /* ================= PAUSE ================= */
    function pause(bool status) external onlyOwner {
        paused = status;
        emit Paused(status);
    }

    /* ================= TIME CONTROL ================= */
    function setVotingTime(uint256 _start, uint256 _end) external onlyOwner {
        require(_start < _end, "Thoi gian khong hop le");
        startTime = _start;
        endTime = _end;
        emit VotingTimeSet(_start, _end);
    }

    /* ================= CANDIDATE ================= */
    function _addCandidate(string memory name_) internal {
        candidatesCount++;
        candidates[candidatesCount] = Candidate(
            candidatesCount,
            name_,
            0,
            true
        );
        nameToId[name_] = candidatesCount;
        emit CandidateAdded(candidatesCount, name_);
    }

    function addCandidate(string memory name_) external onlyOwner {
        require(nameToId[name_] == 0, "Ten da ton tai");
        _addCandidate(name_);
    }

    function disableCandidate(uint256 id) external onlyOwner {
        require(candidates[id].active, "Ung vien da bi vo hieu");
        candidates[id].active = false;
        emit CandidateDisabled(id);
    }

    /* ================= VOTE ================= */
    //mỗi lần có người vote, contract sẽ lấy 1 token từ ví Owner và giữ lại trong chính contract
    function vote(string memory candidateName) external whenNotPaused {
        require(block.timestamp >= startTime, "Chua toi thoi gian vote");
        require(block.timestamp <= endTime, "Da het thoi gian vote");
        require(votersCount < maxVoters, "Da du so nguoi vote");
        require(!hasVoted[msg.sender], "Ban da vote");

        uint256 id = nameToId[candidateName];
        require(id != 0, "Ung vien khong ton tai");
        require(candidates[id].active, "Ung vien bi vo hieu");

        // Owner phải approve token trước
        require(
            allowance(owner(), address(this)) >= ONE_TOKEN,
            "Owner chua approve"
        );

        // Sửa: Thay transferFrom bằng _spendAllowance và _transfer
        _spendAllowance(owner(), address(this), ONE_TOKEN);
        _transfer(owner(), address(this), ONE_TOKEN);

        votersCount++;
        hasVoted[msg.sender] = true;
        votedCandidate[msg.sender] = id;
        votersList.push(msg.sender);
        candidates[id].voteCount++;

        emit Voted(msg.sender, candidateName);
    }

    /* ================= VIEW ================= */
    function getCandidates() external view returns (Candidate[] memory) {
        Candidate[] memory list = new Candidate[](candidatesCount);
        for (uint256 i = 1; i <= candidatesCount; i++) {
            list[i - 1] = candidates[i];
        }
        return list;
    }

    function getWinner()
        external
        view
        returns (string memory winner, uint256 votes)
    {
        for (uint256 i = 1; i <= candidatesCount; i++) {
            if (
                candidates[i].active &&
                candidates[i].voteCount > votes
            ) {
                votes = candidates[i].voteCount;
                winner = candidates[i].name;
            }
        }
    }

    function getVoters() external view returns (address[] memory) {
        return votersList;
    }

    /* ================= RESET ================= */
    function resetElection() external onlyOwner {
        for (uint256 i = 0; i < votersList.length; i++) {
            hasVoted[votersList[i]] = false;
            votedCandidate[votersList[i]] = 0;
        }
        delete votersList;
        votersCount = 0;

        for (uint256 i = 1; i <= candidatesCount; i++) {
            candidates[i].voteCount = 0;
        }

        emit ElectionReset();
    }

    /* ================= OWNER WITHDRAW ================= */
    function withdrawToken(uint256 amount) external onlyOwner {
        require(
            balanceOf(address(this)) >= amount,
            "Khong du token"
        );
        _transfer(address(this), owner(), amount);
    }
}