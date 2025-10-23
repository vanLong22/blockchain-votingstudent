// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Voting is ERC20 {
    struct Candidate { 
        string name;
        uint256 voteCount;
    }

    Candidate[] public candidates;
    address public owner;
    mapping(address => bool) public voters;

    uint256 public votingStart;
    uint256 public votingEnd;

    constructor(
        string[] memory _candidateNames,
        uint256 _durationInMinutes,
        uint256 initialSupply
    ) ERC20("VoteToken", "VOTE") {
        _mint(msg.sender, initialSupply);
        for (uint256 i = 0; i < _candidateNames.length; i++) {
            candidates.push(Candidate({
                name: _candidateNames[i],
                voteCount: 0
            }));
        }
        owner = msg.sender;
        votingStart = block.timestamp;
        votingEnd = block.timestamp + (_durationInMinutes * 1 minutes);
    }

        /*
    constructor(
        string[] memory _candidateNames,
        uint256 _durationInMinutes,
        uint256 initialSupply,
        address[] memory _voters   // ✅ thêm danh sách voters
    ) ERC20("VoteToken", "VOTE") {
        owner = msg.sender;

        // ✅ Mint toàn bộ token cho admin trước
        _mint(owner, initialSupply);

        // ✅ Phân phối 1 token cho từng voter hợp lệ
        for (uint256 i = 0; i < _voters.length; i++) {
            _transfer(owner, _voters[i], 1);
        }

        // ✅ Khởi tạo danh sách ứng viên
        for (uint256 i = 0; i < _candidateNames.length; i++) {
            candidates.push(Candidate({
                name: _candidateNames[i],
                voteCount: 0
            }));
        }

        votingStart = block.timestamp;
        votingEnd = block.timestamp + (_durationInMinutes * 1 minutes);
    }
    */
    
    // ✅ Chỉ chủ sở hữu mới có quyền gọi
    modifier onlyOwner {
        require(msg.sender == owner, "Only owner can perform this action");
        _;
    }

    // ✅ Thêm ứng viên (Admin)
    function addCandidate(string memory _name) public onlyOwner {
        candidates.push(Candidate({
                name: _name,
                voteCount: 0
        }));
    }

    // ✅ Xóa ứng viên theo index (Admin)
    function deleteCandidate(uint256 _index) public onlyOwner {
        require(_index < candidates.length, "Invalid candidate index");

        // Dịch các phần tử sau lên để xóa phần tử giữa
        for (uint256 i = _index; i < candidates.length - 1; i++) {
            candidates[i] = candidates[i + 1];
        }
        candidates.pop();
    }

    // ✅ Cập nhật thời gian bắt đầu và kết thúc (Admin)
    function setVotingTime(uint256 _startTime, uint256 _endTime) public onlyOwner {
        require(_endTime > _startTime, "End time must be greater than start time");
        votingStart = _startTime;
        votingEnd = _endTime;
    }

    // ✅ Hàm vote — giữ nguyên
    function vote(uint256 _candidateIndex) public {
        require(balanceOf(msg.sender) >= 1, "Insufficient tokens to vote");
        require(!voters[msg.sender], "You have already voted.");
        require(_candidateIndex < candidates.length, "Invalid candidate index.");
        require(block.timestamp >= votingStart, "Voting has not started yet.");
        require(block.timestamp < votingEnd, "Voting has ended.");

        _burn(msg.sender, 1); // Burn 1 token để vote
        candidates[_candidateIndex].voteCount++;
        voters[msg.sender] = true;
    }

    // ✅ Lấy toàn bộ danh sách ứng viên và số phiếu
    function getAllVotesOfCandidates() public view returns (string[] memory, uint256[] memory){
        uint256 length = candidates.length;
        string[] memory names = new string[](length);
        uint256[] memory votes = new uint256[](length);

        for (uint256 i = 0; i < length; i++) {
            names[i] = candidates[i].name;
            votes[i] = candidates[i].voteCount;
        }

        return (names, votes);
    }

    // ✅ Kiểm tra trạng thái bầu chọn
    function getVotingStatus() public view returns (bool) {
        return (block.timestamp >= votingStart && block.timestamp < votingEnd);
    }

    // ✅ Thời gian còn lại
    function getRemainingTime() public view returns (uint256) {
        require(block.timestamp >= votingStart, "Voting has not started yet.");
        if (block.timestamp >= votingEnd) {
            return 0;
        }
        return votingEnd - block.timestamp;
    }

    // ✅ Ứng viên chiến thắng
    function getWinner() public view returns (string memory winnerName, uint winnerVotes) {
        require(block.timestamp > votingEnd, "Voting not ended yet");

        uint highestVotes = 0;
        uint winnerIndex = 0;

        for (uint i = 0; i < candidates.length; i++) {
            if (candidates[i].voteCount > highestVotes) {
                highestVotes = candidates[i].voteCount;
                winnerIndex = i;
            }
        }

        return (candidates[winnerIndex].name, highestVotes);
    }
}
