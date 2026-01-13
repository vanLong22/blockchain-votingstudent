let WALLET_CONNECTED = "0x1085B53922A837c3d4482bcF462a36D58189FB6f";
let contractAddress = "0xA351a8F146fE67dc8Cf8453C58AF3EA1588AD92F";  
let contractAbi =  [
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "allowance",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "needed",
          "type": "uint256"
        }
      ],
      "name": "ERC20InsufficientAllowance",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "sender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "balance",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "needed",
          "type": "uint256"
        }
      ],
      "name": "ERC20InsufficientBalance",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "approver",
          "type": "address"
        }
      ],
      "name": "ERC20InvalidApprover",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "receiver",
          "type": "address"
        }
      ],
      "name": "ERC20InvalidReceiver",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "sender",
          "type": "address"
        }
      ],
      "name": "ERC20InvalidSender",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        }
      ],
      "name": "ERC20InvalidSpender",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "EnforcedPause",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "ExpectedPause",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "OwnableInvalidOwner",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "OwnableUnauthorizedAccount",
      "type": "error"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "name",
          "type": "string"
        }
      ],
      "name": "CandidateAdded",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        }
      ],
      "name": "CandidateDisabled",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [],
      "name": "ElectionReset",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "maxVotes",
          "type": "uint256"
        }
      ],
      "name": "MaxVotesSet",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "Paused",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "TokensDistributed",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "Unpaused",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "voter",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "candidateName",
          "type": "string"
        }
      ],
      "name": "Voted",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "start",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "end",
          "type": "uint256"
        }
      ],
      "name": "VotingTimeSet",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "TOKEN_PRICE",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "VOTES_PER_TOKEN",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_name",
          "type": "string"
        }
      ],
      "name": "addCandidate",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        }
      ],
      "name": "allowance",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "buyTokens",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "candidates",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "voteCount",
          "type": "uint256"
        },
        {
          "internalType": "bool",
          "name": "active",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "candidatesCount",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "decimals",
      "outputs": [
        {
          "internalType": "uint8",
          "name": "",
          "type": "uint8"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_id",
          "type": "uint256"
        }
      ],
      "name": "disableCandidate",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address[]",
          "name": "_recipients",
          "type": "address[]"
        },
        {
          "internalType": "uint256[]",
          "name": "_amounts",
          "type": "uint256[]"
        }
      ],
      "name": "distributeTokens",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "endTime",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getCandidates",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "name",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "voteCount",
              "type": "uint256"
            },
            {
              "internalType": "bool",
              "name": "active",
              "type": "bool"
            }
          ],
          "internalType": "struct VotingToken.Candidate[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getVoters",
      "outputs": [
        {
          "internalType": "address[]",
          "name": "",
          "type": "address[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getVotingInfo",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getWinner",
      "outputs": [
        {
          "internalType": "string",
          "name": "winner",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "votes",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "hasVoted",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "maxVotes",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "name": "nameToId",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "paused",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "renounceOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "resetElection",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_maxVotes",
          "type": "uint256"
        }
      ],
      "name": "setMaxVotes",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bool",
          "name": "_paused",
          "type": "bool"
        }
      ],
      "name": "setPaused",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_startTime",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_endTime",
          "type": "uint256"
        }
      ],
      "name": "setVotingTime",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "startTime",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "symbol",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "transfer",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_candidateName",
          "type": "string"
        }
      ],
      "name": "vote",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "votedCandidate",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "votersList",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "votesCount",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "withdrawETH",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "withdrawTokens",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ];

// Biến quản lý trạng thái
let userTokenBalance = 0;
let hasVoted = false;
let votingInfo = {
    startTime: 0,
    endTime: 0,
    maxVotes: 0,
    votesCount: 0,
    remainingVotes: 0,
    isActive: false
};
let candidatesList = [];
let voteChartInstance = null;

// Khởi tạo khi trang load
document.addEventListener('DOMContentLoaded', function() {
    console.log("QNU StarVote - Voter Interface initialized");
    
    // Khởi tạo giá trị mặc định cho datetime inputs
    setupDateTimeDefaults();
    
    // Kiểm tra kết nối ví có sẵn
    checkExistingConnection();
    
    // Load dữ liệu ban đầu
    loadInitialData();
    
    // Thiết lập event listeners
    setupEventListeners();
});

// ==============================
// HÀM QUẢN LÝ KẾT NỐI VÍ
// ==============================

// Kiểm tra kết nối ví có sẵn
async function checkExistingConnection() {
    if (typeof window.ethereum === 'undefined') {
        showNotification('Vui lòng cài đặt MetaMask để sử dụng', 'warning');
        return;
    }
    
    try {
        const accounts = await window.ethereum.request({ method: 'eth_accounts' });
        if (accounts.length > 0) {
            WALLET_CONNECTED = accounts[0];
            updateWalletDisplay();
            loadTokenInfo();
            updateVotingInfo();
            getAllCandidates();
        }
    } catch (error) {
        console.error("Error checking existing connection:", error);
    }
}

// Kết nối ví MetaMask
async function connectWallet() {
    if (typeof window.ethereum === 'undefined') {
        showNotification('Vui lòng cài đặt MetaMask trước!', 'error');
        return;
    }
    
    try {
        showNotification('Đang kết nối với MetaMask...', 'info');
        
        const accounts = await window.ethereum.request({ 
            method: "eth_requestAccounts" 
        });
        
        WALLET_CONNECTED = accounts[0];
        updateWalletDisplay();
        
        // Load dữ liệu sau khi kết nối
        await Promise.all([
            loadTokenInfo(),
            updateVotingInfo(),
            getAllCandidates()
        ]);
        
        showNotification('Kết nối ví thành công!', 'success');
        return WALLET_CONNECTED;
        
    } catch (error) {
        console.error("Wallet connection error:", error);
        
        if (error.code === 4001) {
            showNotification('Người dùng từ chối kết nối ví', 'error');
        } else {
            showNotification('Lỗi kết nối ví: ' + error.message, 'error');
        }
        throw error;
    }
}

// Cập nhật hiển thị trạng thái ví
function updateWalletDisplay() {
    const statusDot = document.getElementById('statusDot');
    const statusText = document.getElementById('statusText');
    const walletAddress = document.getElementById('walletAddress');
    
    if (WALLET_CONNECTED) {
        statusDot.classList.add('connected');
        statusText.textContent = 'Đã kết nối';
        walletAddress.textContent = `${WALLET_CONNECTED.substring(0, 6)}...${WALLET_CONNECTED.substring(WALLET_CONNECTED.length - 4)}`;
        walletAddress.style.display = 'inline';
        
        // Kích hoạt các nút chức năng
        document.querySelectorAll('button:disabled').forEach(button => {
            if (button.id !== 'voteButton' && !button.classList.contains('admin-only')) {
                button.disabled = false;
            }
        });
    } else {
        statusDot.classList.remove('connected');
        statusText.textContent = 'Chưa kết nối';
        walletAddress.style.display = 'none';
    }
}

// ==============================
// HÀM QUẢN LÝ THÔNG TIN VOTING
// ==============================
/*
// Cập nhật thông tin voting từ contract
async function updateVotingInfo() {
    if (!WALLET_CONNECTED) return;
    
    try {
        const contract = getContract();
        const info = await contract.getVotingInfo();
        
        votingInfo = {
            startTime: info._startTime.toNumber(),
            endTime: info._endTime.toNumber(),
            maxVotes: info._maxVotes.toNumber(),
            votesCount: info._votesCount.toNumber(),
            remainingVotes: info._remainingVotes.toNumber(),
            isActive: info._isActive
        };
        
        updateVotingInfoDisplay();
        updateCountdownDisplay();
        
    } catch (error) {
        console.error('Error updating voting info:', error);
    }
}
*/
// Cập nhật hiển thị thông tin voting
function updateVotingInfoDisplay() {
    // Dashboard statistics
    const maxVotesElement = document.getElementById('maxVotes');
    const remainingVotesElement = document.getElementById('remainingVotes');
    const votesCountElement = document.getElementById('votesCount');
    const votingStatusElement = document.getElementById('votingStatus');
    
    if (maxVotesElement) {
        maxVotesElement.textContent = votingInfo.maxVotes === 0 ? 'Không giới hạn' : votingInfo.maxVotes;
    }
    
    if (remainingVotesElement) {
        remainingVotesElement.textContent = votingInfo.maxVotes === 0 ? 'Không giới hạn' : votingInfo.remainingVotes;
    }
    
    if (votesCountElement) {
        votesCountElement.textContent = votingInfo.votesCount;
    }
    
    if (votingStatusElement) {
        if (!votingInfo.isActive) {
            votingStatusElement.textContent = 'Không hoạt động';
            votingStatusElement.style.color = 'var(--danger-color)';
        } else {
            votingStatusElement.textContent = 'Đang hoạt động';
            votingStatusElement.style.color = 'var(--success-color)';
        }
    }
    
    // Update vote button state
    updateVoteButtonState();
}

// Cập nhật countdown timer
function updateCountdownDisplay() {
    const updateTimer = () => {
        const currentTime = Math.floor(Date.now() / 1000);
        
        if (votingInfo.startTime === 0 || votingInfo.endTime === 0) {
            updateCountdownUI(0, 0, 0, 0, 'Chưa thiết lập thời gian');
            return;
        }
        
        if (currentTime < votingInfo.startTime) {
            const remaining = votingInfo.startTime - currentTime;
            updateCountdownFromSeconds(remaining, 'Bắt đầu sau:');
        } else if (currentTime <= votingInfo.endTime) {
            const remaining = votingInfo.endTime - currentTime;
            updateCountdownFromSeconds(remaining, 'Kết thúc sau:');
            
            // Tự động pause nếu hết thời gian
            if (remaining <= 0 && votingInfo.isActive) {
                updateVotingInfo();
            }
        } else {
            updateCountdownUI(0, 0, 0, 0, 'Đã kết thúc');
        }
    };
    
    updateTimer();
    // Cập nhật mỗi giây
    window.votingTimer = setInterval(updateTimer, 1000);
}

// Cập nhật UI countdown từ seconds
function updateCountdownFromSeconds(seconds, prefix = '') {
    const days = Math.floor(seconds / 86400);
    const hours = Math.floor((seconds % 86400) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    
    updateCountdownUI(days, hours, minutes, secs, prefix);
}

// Cập nhật UI countdown
function updateCountdownUI(days, hours, minutes, seconds, statusText) {
    const daysElement = document.getElementById('days');
    const hoursElement = document.getElementById('hours');
    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');
    const countdownStatus = document.getElementById('countdownStatus');
    
    if (daysElement) daysElement.textContent = days.toString().padStart(2, '0');
    if (hoursElement) hoursElement.textContent = hours.toString().padStart(2, '0');
    if (minutesElement) minutesElement.textContent = minutes.toString().padStart(2, '0');
    if (secondsElement) secondsElement.textContent = seconds.toString().padStart(2, '0');
    
    if (countdownStatus) {
        if (statusText) {
            countdownStatus.textContent = statusText;
        } else {
            countdownStatus.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s còn lại`;
        }
    }
    
    // Đồng bộ cho trang vote
    const voteDays = document.getElementById('voteDays');
    const voteHours = document.getElementById('voteHours');
    const voteMinutes = document.getElementById('voteMinutes');
    const voteSeconds = document.getElementById('voteSeconds');
    
    if (voteDays) voteDays.textContent = days.toString().padStart(2, '0');
    if (voteHours) voteHours.textContent = hours.toString().padStart(2, '0');
    if (voteMinutes) voteMinutes.textContent = minutes.toString().padStart(2, '0');
    if (voteSeconds) voteSeconds.textContent = seconds.toString().padStart(2, '0');
}

// ==============================
// HÀM QUẢN LÝ TOKEN
// ==============================

// Load thông tin token của người dùng
async function loadTokenInfo() {
    if (!WALLET_CONNECTED) return;
    
    try {
        const contract = getContract();
        const balance = await contract.balanceOf(WALLET_CONNECTED);
        const decimals = await contract.decimals();
        userTokenBalance = parseFloat(ethers.utils.formatUnits(balance, decimals));
        
        // Kiểm tra đã vote chưa
        const voted = await contract.hasVoted(WALLET_CONNECTED);
        hasVoted = voted;
        
        // Kiểm tra đã mua token chưa
        hasPurchasedToken = userTokenBalance >= 1;
        
        // Cập nhật UI
        updateTokenDisplay();
        
        // Disable nút mua token nếu đã có token
        updateBuyTokenButton();
        
    } catch (error) {
        console.error('Error loading token info:', error);
        showNotification('Lỗi tải thông tin token', 'error');
    }
}


// Cập nhật hiển thị token
function updateTokenDisplay() {
    // Format số với 2 chữ số thập phân
    const formattedBalance = userTokenBalance.toLocaleString('vi-VN', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 2
    });
    
    // Dashboard
    const yourTokenBalance = document.getElementById('yourTokenBalance');
    if (yourTokenBalance) yourTokenBalance.textContent = formattedBalance;
    
    // Tokens section
    const tokenBalanceDetail = document.getElementById('tokenBalanceDetail');
    if (tokenBalanceDetail) tokenBalanceDetail.textContent = formattedBalance;
    
    // Vote section
    const voteTokenBalance = document.getElementById('voteTokenBalance');
    if (voteTokenBalance) voteTokenBalance.textContent = formattedBalance;
    
    // Hiển thị trạng thái token trong vote section
    const voteTokenStatus = document.getElementById('voteTokenStatus');
    if (voteTokenStatus) voteTokenStatus.style.display = 'block';
    
    // Cập nhật thông báo token
    const tokenMessage = document.getElementById('voteStatus');
    if (tokenMessage) {
        if (userTokenBalance >= 1) {
            tokenMessage.innerHTML = `<span style="color: var(--success-color);">
                <i class="fas fa-check-circle"></i> Bạn có ${userTokenBalance} token để bỏ phiếu
            </span>`;
        } else {
            tokenMessage.innerHTML = `<span style="color: var(--danger-color);">
                <i class="fas fa-exclamation-circle"></i> Bạn cần ít nhất 1 token để bỏ phiếu
            </span>`;
        }
    }
}

// biến để kiểm tra đã mua token chưa
let hasPurchasedToken = false;
// Mua token bằng ETH
async function buyTokens(amount) {
    if (!WALLET_CONNECTED) {
        showNotification('Vui lòng kết nối ví trước', 'error');
        return;
    }
    
    // Kiểm tra đã mua token chưa
    if (userTokenBalance >= 1) {
        showNotification('Mỗi người chỉ được mua 1 token', 'error');
        return;
    }
    
    // Kiểm tra số lượng token
    if (amount !== 1) {
        showNotification('Mỗi người chỉ được mua 1 token duy nhất', 'error');
        document.getElementById('buyTokenAmount').value = 1;
        return;
    }
    
    try {
        const contract = getContract(true);
        
        // Tính giá ETH (0.01 ETH per token)
        const ethAmount = ethers.utils.parseEther((amount * 0.01).toString());
        
        // Gọi hàm mua token
        const tx = await contract.buyTokens({
            value: ethAmount
        });
        
        showNotification(`Đang mua ${amount} token...`, 'info');
        
        await tx.wait();
        
        showNotification(`Đã mua ${amount} token thành công!`, 'success');
        hasPurchasedToken = true;
        loadTokenInfo(); // Refresh token balance
        
    } catch (error) {
        console.error('Error buying tokens:', error);
        showNotification('Lỗi mua token: ' + error.message, 'error');
    }
}

// Thêm hàm cập nhật nút mua token
function updateBuyTokenButton() {
    const buyButton = document.getElementById('buyTokenButton');
    if (!buyButton) return;
    
    if (userTokenBalance >= 1) {
        buyButton.disabled = true;
        buyButton.innerHTML = '<i class="fas fa-check-circle"></i> Đã mua token';
        buyButton.className = 'btn btn-secondary btn-block';
    } else {
        buyButton.disabled = false;
        buyButton.innerHTML = '<i class="fas fa-shopping-cart"></i> Mua token';
        buyButton.className = 'btn btn-success btn-block';
    }
}

async function buyTokensPrompt() {
    if (userTokenBalance >= 1) {
        showNotification('Bạn đã có token, không thể mua thêm', 'error');
        return;
    }
    
    const confirmed = confirm('Mỗi người chỉ được mua 1 token duy nhất. Xác nhận mua?');
    
    if (confirmed) {
        await buyTokens(1);
    }
}

// Tính toán ETH cần thiết
function calculateETHRequired(amount) {
    const ethValue = amount * 0.01; // Giả sử giá 0.01 ETH/token
    return ethValue.toFixed(4);
}

// ==============================
// HÀM BỎ PHIẾU
// ==============================

// Kiểm tra điều kiện bỏ phiếu
async function checkVotingEligibility() {
    if (!WALLET_CONNECTED) {
        showNotification('Vui lòng kết nối ví trước', 'error');
        return { allMet: false, message: 'Chưa kết nối ví' };
    }
    
    const requirements = document.getElementById('voteRequirements');
    let html = '<h3 style="margin-bottom: 15px;">Điều kiện bỏ phiếu:</h3>';
    let allMet = true;
    let message = '';
    
    try {
        const contract = getContract();
        
        // 1. Kiểm tra token balance
        if (userTokenBalance >= 1) {
            html += `<p style="color: var(--success-color);">
                <i class="fas fa-check-circle"></i> Số dư token: ${userTokenBalance} (Tối thiểu: 1)
            </p>`;
        } else {
            html += `<p style="color: var(--danger-color);">
                <i class="fas fa-times-circle"></i> Số dư token: ${userTokenBalance} (Tối thiểu: 1)
            </p>`;
            allMet = false;
            message = 'Không đủ token';
        }
        
        // 2. Kiểm tra đã vote chưa
        if (!hasVoted) {
            html += `<p style="color: var(--success-color);">
                <i class="fas fa-check-circle"></i> Chưa bỏ phiếu trong đợt này
            </p>`;
        } else {
            html += `<p style="color: var(--danger-color);">
                <i class="fas fa-times-circle"></i> Đã bỏ phiếu (mỗi địa chỉ chỉ được vote 1 lần)
            </p>`;
            allMet = false;
            message = 'Đã bỏ phiếu';
        }
        
        // 3. Kiểm tra thời gian voting
        if (votingInfo.isActive) {
            html += `<p style="color: var(--success-color);">
                <i class="fas fa-check-circle"></i> Thời gian bỏ phiếu đang hoạt động
            </p>`;
        } else {
            html += `<p style="color: var(--danger-color);">
                <i class="fas fa-times-circle"></i> Thời gian bỏ phiếu không hoạt động
            </p>`;
            allMet = false;
            message = 'Không trong thời gian vote';
        }
        
        // 4. Kiểm tra giới hạn phiếu
        if (votingInfo.maxVotes === 0) {
            html += `<p style="color: var(--success-color);">
                <i class="fas fa-check-circle"></i> Không giới hạn số phiếu
            </p>`;
        } else if (votingInfo.votesCount < votingInfo.maxVotes) {
            html += `<p style="color: var(--success-color);">
                <i class="fas fa-check-circle"></i> Số phiếu còn lại: ${votingInfo.remainingVotes}
            </p>`;
        } else {
            html += `<p style="color: var(--danger-color);">
                <i class="fas fa-times-circle"></i> Đã đạt số phiếu tối đa (${votingInfo.maxVotes})
            </p>`;
            allMet = false;
            message = 'Đã đạt số phiếu tối đa';
        }
        
        if (requirements) {
            requirements.innerHTML = html;
            requirements.style.display = 'block';
        }
        
        // Cập nhật nút vote
        updateVoteButtonState();
        
        return { allMet, message };
        
    } catch (error) {
        console.error('Error checking eligibility:', error);
        showNotification('Lỗi kiểm tra điều kiện', 'error');
        return { allMet: false, message: 'Lỗi kiểm tra' };
    }
}

// Cập nhật trạng thái nút vote
function updateVoteButtonState() {
    const voteButton = document.getElementById('voteButton');
    if (!voteButton) return;
    
    const canVote = userTokenBalance >= 1 && 
                   !hasVoted && 
                   votingInfo.isActive && 
                   (votingInfo.maxVotes === 0 || votingInfo.votesCount < votingInfo.maxVotes);
    
    if (canVote) {
        voteButton.disabled = false;
        voteButton.innerHTML = '<i class="fas fa-vote-yea"></i> Bỏ phiếu';
        voteButton.className = 'btn btn-primary';
    } else {
        voteButton.disabled = true;
        voteButton.innerHTML = '<i class="fas fa-ban"></i> Không thể bỏ phiếu';
        voteButton.className = 'btn btn-secondary';
    }
}

// Thực hiện bỏ phiếu
async function vote() {
    const candidateName = document.getElementById('voteName').value.trim();
    const statusElement = document.getElementById('voteStatusNotification');
    
    // Validate input
    if (!candidateName) {
        showNotification('Vui lòng nhập tên ứng viên', 'error');
        return;
    }
    
    if (!WALLET_CONNECTED) {
        showNotification('Vui lòng kết nối ví trước', 'error');
        return;
    }
    
    // Kiểm tra điều kiện bỏ phiếu
    const eligibility = await checkVotingEligibility();
    if (!eligibility.allMet) {
        showNotification(`Không thể bỏ phiếu: ${eligibility.message}`, 'error');
        return;
    }
    
    // Kiểm tra candidate có tồn tại không
    const candidateExists = candidatesList.some(c => 
        c.name.toLowerCase() === candidateName.toLowerCase() && c.active
    );
    
    if (!candidateExists) {
        showNotification('Ứng viên không tồn tại hoặc đã bị vô hiệu hóa', 'error');
        return;
    }
    
    // Xác nhận bỏ phiếu
    const confirmed = confirm(`Bạn sẽ bỏ phiếu cho "${candidateName}".\n\nLưu ý: 1 token sẽ bị trừ từ ví của bạn.\n\nXác nhận?`);
    if (!confirmed) return;
    
    try {
        const contract = getContract(true);
        
        if (statusElement) {
            statusElement.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Đang xử lý phiếu bầu...';
            statusElement.className = 'notification';
            statusElement.style.display = 'block';
        }
        
        // Thực hiện vote
        const tx = await contract.vote(candidateName);
        showNotification('Đang chờ xác nhận transaction...', 'info');
        
        await tx.wait();
        
        if (statusElement) {
            statusElement.innerHTML = '<i class="fas fa-check-circle"></i> Bỏ phiếu thành công!';
            statusElement.className = 'notification success';
        }
        
        // Cập nhật thông tin
        document.getElementById('voteName').value = '';
        hasVoted = true;
        userTokenBalance -= 1;
        
        // Refresh dữ liệu
        await Promise.all([
            getAllCandidates(),
            drawVoteChart(),
            updateVotingInfo(),
            loadTokenInfo()
        ]);
        
        showNotification('Bỏ phiếu thành công! 1 token đã được sử dụng.', 'success');
        
        // Auto-hide notification after 5 seconds
        if (statusElement) {
            setTimeout(() => {
                statusElement.style.display = 'none';
            }, 5000);
        }
        
    } catch (error) {
        console.error("Vote error:", error);
        
        if (statusElement) {
            statusElement.innerHTML = `<i class="fas fa-times-circle"></i> Lỗi: ${error.reason || error.message}`;
            statusElement.className = 'notification error';
            statusElement.style.display = 'block';
        }
        
        if (error.code === 4001) {
            showNotification('Người dùng từ chối transaction', 'error');
        } else if (error.message.includes('insufficient balance')) {
            showNotification('Không đủ token để bỏ phiếu', 'error');
        } else if (error.message.includes('already voted')) {
            showNotification('Bạn đã bỏ phiếu rồi', 'error');
            hasVoted = true;
            updateVoteButtonState();
        } else if (error.message.includes('Not voting period')) {
            showNotification('Không trong thời gian bỏ phiếu', 'error');
            updateVotingInfo();
        } else if (error.message.includes('Max votes reached')) {
            showNotification('Đã đạt số phiếu tối đa', 'error');
            updateVotingInfo();
        } else {
            showNotification('Lỗi bỏ phiếu: ' + error.message, 'error');
        }
    }
}

// ==============================
// HÀM QUẢN LÝ ỨNG VIÊN
// ==============================

// Lấy danh sách tất cả ứng viên
async function getAllCandidates() {
    const tableBody = document.querySelector("#candidatesTable tbody");
    const statusElement = document.getElementById('candidatesStatus');
    
    if (!tableBody) return;
    
    try {
        if (statusElement) {
            statusElement.textContent = 'Đang tải danh sách ứng viên...';
        }
        
        const contract = getContract();
        const candidates = await contract.getCandidates();
        
        candidatesList = candidates.map(candidate => ({
            id: candidate.id.toNumber(),
            name: candidate.name,
            voteCount: candidate.voteCount.toNumber(),
            active: candidate.active
        }));
        
        if (candidates.length === 0) {
            tableBody.innerHTML = '<tr><td colspan="4" style="text-align: center; padding: 20px;">Chưa có ứng viên nào</td></tr>';
            if (statusElement) statusElement.textContent = 'Chưa có ứng viên';
            return;
        }
        
        // Xóa nội dung cũ
        tableBody.innerHTML = '';
        
        // Thêm từng ứng viên vào table
        candidates.forEach(candidate => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${candidate.id.toString()}</td>
                <td>${candidate.name}</td>
                <td>${candidate.voteCount.toString()}</td>
                <td>
                    <span class="status-badge ${candidate.active ? 'status-active' : 'status-inactive'}">
                        ${candidate.active ? 'Đang hoạt động' : 'Đã vô hiệu'}
                    </span>
                </td>
            `;
            tableBody.appendChild(row);
        });
        
        if (statusElement) {
            statusElement.textContent = `Đã tải ${candidates.length} ứng viên`;
        }
        
    } catch (error) {
        console.error("Error getting candidates:", error);
        tableBody.innerHTML = '<tr><td colspan="4" style="text-align: center; color: var(--danger-color); padding: 20px;">Lỗi tải danh sách ứng viên</td></tr>';
        if (statusElement) statusElement.textContent = 'Lỗi tải danh sách';
    }
}

// ==============================
// HÀM KẾT QUẢ VÀ BIỂU ĐỒ
// ==============================

// Vẽ biểu đồ kết quả bầu cử
async function drawVoteChart() {
    const canvas = document.getElementById("voteChart");
    const chartStatus = document.getElementById("chartStatus");
    
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    try {
        if (chartStatus) {
            chartStatus.textContent = 'Đang tải biểu đồ...';
        }
        
        // Lấy dữ liệu candidates
        const candidates = candidatesList.length > 0 ? 
            candidatesList : 
            await (async () => {
                const contract = getContract();
                const cands = await contract.getCandidates();
                return cands.map(c => ({
                    id: c.id.toNumber(),
                    name: c.name,
                    voteCount: c.voteCount.toNumber(),
                    active: c.active
                }));
            })();
        
        if (candidates.length === 0) {
            if (chartStatus) chartStatus.textContent = 'Không có dữ liệu để vẽ biểu đồ';
            return;
        }
        
        // Chỉ lấy các ứng viên active
        const activeCandidates = candidates.filter(c => c.active);
        
        if (activeCandidates.length === 0) {
            if (chartStatus) chartStatus.textContent = 'Không có ứng viên đang hoạt động';
            return;
        }
        
        // Chuẩn bị dữ liệu cho biểu đồ
        const names = activeCandidates.map(c => c.name);
        const votes = activeCandidates.map(c => c.voteCount);
        
        // Tạo màu sắc gradient
        const colors = votes.map((_, i) => {
            const hue = (i * 360 / activeCandidates.length) % 360;
            return `hsl(${hue}, 70%, 60%)`;
        });
        
        // Hủy biểu đồ cũ nếu tồn tại
        if (voteChartInstance) {
            voteChartInstance.destroy();
        }
        
        // Tạo biểu đồ mới
        voteChartInstance = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: names,
                datasets: [{
                    label: 'Số phiếu',
                    data: votes,
                    backgroundColor: colors,
                    borderColor: colors.map(c => c.replace('60%)', '40%)')),
                    borderWidth: 2,
                    borderRadius: 5,
                    hoverBackgroundColor: colors.map(c => c.replace('60%)', '70%)'))
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    legend: {
                        display: false
                    },
                    title: {
                        display: true,
                        text: 'Kết Quả Bỏ Phiếu',
                        font: {
                            size: 16,
                            weight: 'bold'
                        },
                        color: 'var(--text-color)',
                        padding: {
                            top: 10,
                            bottom: 30
                        }
                    },
                    tooltip: {
                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                        titleColor: 'white',
                        bodyColor: 'white',
                        borderColor: 'var(--primary-color)',
                        borderWidth: 1,
                        cornerRadius: 6,
                        displayColors: true,
                        callbacks: {
                            label: function(context) {
                                return `Số phiếu: ${context.parsed.y}`;
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: {
                            color: 'rgba(255, 255, 255, 0.1)'
                        },
                        ticks: {
                            color: 'var(--text-muted)',
                            stepSize: 1,
                            precision: 0
                        },
                        title: {
                            display: true,
                            text: 'Số phiếu',
                            color: 'var(--text-color)'
                        }
                    },
                    x: {
                        grid: {
                            color: 'rgba(255, 255, 255, 0.1)'
                        },
                        ticks: {
                            color: 'var(--text-muted)',
                            maxRotation: 45,
                            minRotation: 45
                        }
                    }
                },
                animation: {
                    duration: 1000,
                    easing: 'easeOutQuart'
                },
                interaction: {
                    intersect: false,
                    mode: 'index'
                }
            }
        });
        
        if (chartStatus) {
            chartStatus.textContent = `Biểu đồ hiển thị ${activeCandidates.length} ứng viên đang hoạt động`;
        }
        
    } catch (error) {
        console.error("Error drawing chart:", error);
        if (chartStatus) {
            chartStatus.textContent = 'Lỗi tải biểu đồ';
            chartStatus.style.color = 'var(--danger-color)';
        }
    }
}

// Lấy thông tin người chiến thắng
async function getWinner() {
    const winnerContent = document.getElementById("winnerContent");
    const winnerInfo = document.getElementById("winnerInfo");
    
    if (!winnerContent) return;
    
    try {
        const contract = getContract();
        const [winner, votes] = await contract.getWinner();
        
        if (!winner || winner === "") {
            winnerContent.innerHTML = `
                <div style="padding: 20px;">
                    <i class="fas fa-info-circle" style="font-size: 48px; color: var(--info-color); margin-bottom: 15px;"></i>
                    <h3 style="margin-bottom: 10px;">Chưa có kết quả</h3>
                    <p style="color: var(--text-muted);">Chưa có ứng viên nào nhận được phiếu bầu</p>
                </div>
            `;
        } else {
            winnerContent.innerHTML = `
                <div style="padding: 20px;">
                    <i class="fas fa-trophy" style="font-size: 48px; color: var(--warning-color); margin-bottom: 15px;"></i>
                    <h3 style="color: var(--primary-color); margin-bottom: 10px;">${winner}</h3>
                    <p style="font-size: 24px; font-weight: bold; margin-bottom: 5px;">${votes.toString()} phiếu</p>
                    <p style="color: var(--text-muted);">Đang dẫn đầu cuộc bầu cử</p>
                </div>
            `;
        }
        
        if (winnerInfo) {
            winnerInfo.style.display = 'block';
            // Auto-scroll để người dùng thấy
            winnerInfo.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
        
    } catch (error) {
        console.error("Error getting winner:", error);
        winnerContent.innerHTML = `
            <div style="padding: 20px; color: var(--danger-color);">
                <i class="fas fa-exclamation-triangle"></i> Lỗi tải thông tin người chiến thắng
            </div>
        `;
        if (winnerInfo) winnerInfo.style.display = 'block';
    }
}

// ==============================
// HÀM TIỆN ÍCH VÀ HELPER
// ==============================

// Lấy contract instance
function getContract(signer = false) {
    if (typeof window.ethereum === 'undefined') {
        throw new Error("MetaMask chưa được cài đặt");
    }
    
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const contractSigner = signer ? provider.getSigner() : provider;
    
    return new ethers.Contract(contractAddress, contractAbi, contractSigner);
}

// Hiển thị notification
function showNotification(message, type = 'info') {
    // Tạo notification element
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        border-radius: 10px;
        background: ${type === 'success' ? '#2a623d' : 
                   type === 'error' ? '#dc3545' : 
                   type === 'warning' ? '#ffc107' : '#17a2b8'};
        color: white;
        font-weight: 500;
        z-index: 10000;
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
        transform: translateX(150%);
        transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        max-width: 400px;
        word-wrap: break-word;
    `;
    
    // Thêm icon
    const icon = type === 'success' ? 'check-circle' :
                 type === 'error' ? 'times-circle' :
                 type === 'warning' ? 'exclamation-triangle' : 'info-circle';
    
    notification.innerHTML = `
        <i class="fas fa-${icon}" style="margin-right: 10px;"></i>
        ${message}
    `;
    
    document.body.appendChild(notification);
    
    // Animation in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 10);
    
    // Auto remove sau 5 giây
    setTimeout(() => {
        notification.style.transform = 'translateX(150%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 5000);
    
    // Click để đóng sớm
    notification.addEventListener('click', () => {
        notification.style.transform = 'translateX(150%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    });
}

// Chuyển đổi giữa các section
function showSection(sectionId) {
    // Ẩn tất cả sections
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Remove active class từ nav items
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });
    
    // Hiển thị section được chọn
    const section = document.getElementById(sectionId);
    if (section) {
        section.classList.add('active');
        // Scroll lên đầu section
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    
    // Active nav item tương ứng
    document.querySelectorAll('.nav-item').forEach(item => {
        if (item.textContent.includes(
            sectionId === 'dashboard' ? 'Dashboard' :
            sectionId === 'vote' ? 'Vote' :
            sectionId === 'candidates' ? 'Candidates' :
            sectionId === 'results' ? 'Results' :
            sectionId === 'tokens' ? 'Tokens' : ''
        )) {
            item.classList.add('active');
        }
    });
    
    // Load dữ liệu section-specific
    switch(sectionId) {
        case 'candidates':
            getAllCandidates();
            break;
        case 'results':
            drawVoteChart();
            break;
        case 'vote':
            updateVoteCountdown();
            loadTokenInfo();
            checkVotingEligibility();
            break;
        case 'tokens':
            loadTokenInfo();
            break;
        case 'dashboard':
            updateVotingInfo();
            loadTokenInfo();
            break;
    }
}

// Cập nhật countdown cho trang vote
function updateVoteCountdown() {
    const updateDisplay = () => {
        updateCountdownDisplay(); // Gọi hàm cập nhật chung
    };
    
    updateDisplay();
    // Cập nhật mỗi giây
    setInterval(updateDisplay, 1000);
}

// Refresh toàn bộ dữ liệu
async function refreshAllData() {
    if (!WALLET_CONNECTED) {
        showNotification('Vui lòng kết nối ví trước', 'error');
        return;
    }
    
    showNotification('Đang làm mới dữ liệu...', 'info');
    
    try {
        await Promise.all([
            loadTokenInfo(),
            updateVotingInfo(),
            getAllCandidates(),
            drawVoteChart()
        ]);
        
        showNotification('Đã làm mới dữ liệu thành công!', 'success');
    } catch (error) {
        console.error('Error refreshing data:', error);
        showNotification('Lỗi làm mới dữ liệu', 'error');
    }
}

// ==============================
// HÀM KHỞI TẠO
// ==============================

// Thiết lập giá trị mặc định
function setupDateTimeDefaults() {
    const now = new Date();
    const tomorrow = new Date(now.getTime() + 24 * 60 * 60 * 1000);
    const nextWeek = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000);
    
    // Format: YYYY-MM-DDThh:mm
    const formatDateTime = (date) => {
        return date.toISOString().slice(0, 16);
    };
    
    // Cập nhật inputs datetime-local nếu có
    const startTimeInput = document.getElementById('startTime');
    const endTimeInput = document.getElementById('endTime');
    
    if (startTimeInput) startTimeInput.value = formatDateTime(tomorrow);
    if (endTimeInput) endTimeInput.value = formatDateTime(nextWeek);
}

// Load dữ liệu ban đầu
function loadInitialData() {
    // Chỉ load dữ liệu public nếu chưa kết nối ví
    if (!WALLET_CONNECTED) {
        getAllCandidates();
        updateVotingInfo(); // Vẫn có thể gọi để lấy thông tin public
        return;
    }
    
    // Nếu đã kết nối ví, load toàn bộ dữ liệu
    Promise.all([
        loadTokenInfo(),
        updateVotingInfo(),
        getAllCandidates()
    ]).catch(error => {
        console.error('Error loading initial data:', error);
    });
}

// Thiết lập event listeners
function setupEventListeners() {
    // Tính toán ETH khi thay đổi số lượng token muốn mua
    const buyTokenAmount = document.getElementById('buyTokenAmount');
    if (buyTokenAmount) {
        buyTokenAmount.addEventListener('input', function() {
            const amount = parseInt(this.value) || 0;
            const ethTotal = calculateETHRequired(amount);
            const ethCalculation = document.getElementById('ethCalculation');
            if (ethCalculation) {
                ethCalculation.innerHTML = `<p>Tổng cộng: <span id="ethTotal">${ethTotal}</span> ETH</p>`;
            }
        });
    }
    
    // Auto-complete candidate names khi typing
    const voteNameInput = document.getElementById('voteName');
    if (voteNameInput) {
        voteNameInput.addEventListener('input', function() {
            updateCandidateSuggestions(this.value);
        });
    }
    
    // Listen for account changes
    if (window.ethereum) {
        window.ethereum.on('accountsChanged', handleAccountsChanged);
        window.ethereum.on('chainChanged', () => {
            window.location.reload();
        });
        window.ethereum.on('disconnect', () => {
            WALLET_CONNECTED = "";
            updateWalletDisplay();
            showNotification('Ví đã ngắt kết nối', 'warning');
        });
    }
    
    // Thêm event listener cho nút refresh
    const refreshButtons = document.querySelectorAll('[onclick*="refresh"]');
    refreshButtons.forEach(button => {
        if (button.onclick) {
            const originalOnClick = button.onclick;
            button.onclick = function(e) {
                button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Đang làm mới...';
                button.disabled = true;
                
                Promise.resolve(originalOnClick.call(this, e))
                    .finally(() => {
                        setTimeout(() => {
                            button.innerHTML = button.innerHTML.replace('fa-spinner fa-spin', 'fa-sync-alt');
                            button.disabled = false;
                        }, 1000);
                    });
            };
        }
    });
}

// Xử lý khi thay đổi tài khoản
function handleAccountsChanged(accounts) {
    if (accounts.length === 0) {
        // Người dùng đã ngắt kết nối tất cả tài khoản
        WALLET_CONNECTED = "";
        updateWalletDisplay();
        showNotification('Ví đã ngắt kết nối', 'warning');
    } else if (accounts[0] !== WALLET_CONNECTED) {
        // Đã chuyển sang tài khoản khác
        WALLET_CONNECTED = accounts[0];
        updateWalletDisplay();
        showNotification('Đã chuyển sang tài khoản: ' + WALLET_CONNECTED.substring(0, 10) + '...', 'info');
        
        // Load lại dữ liệu cho tài khoản mới
        Promise.all([
            loadTokenInfo(),
            updateVotingInfo(),
            getAllCandidates()
        ]);
    }
}

// Gợi ý tên ứng viên khi typing
function updateCandidateSuggestions(input) {
    const suggestionsContainer = document.getElementById('candidateSuggestions');
    if (!suggestionsContainer || !input || input.length < 2) {
        if (suggestionsContainer) suggestionsContainer.style.display = 'none';
        return;
    }
    
    const activeCandidates = candidatesList.filter(c => c.active);
    const suggestions = activeCandidates.filter(candidate =>
        candidate.name.toLowerCase().includes(input.toLowerCase())
    );
    
    if (suggestions.length === 0) {
        suggestionsContainer.style.display = 'none';
        return;
    }
    
    suggestionsContainer.innerHTML = suggestions.map(candidate =>
        `<div class="suggestion-item" onclick="selectCandidate('${candidate.name}')">
            ${candidate.name}
        </div>`
    ).join('');
    
    suggestionsContainer.style.display = 'block';
}

// Chọn ứng viên từ gợi ý
function selectCandidate(name) {
    const voteNameInput = document.getElementById('voteName');
    if (voteNameInput) {
        voteNameInput.value = name;
    }
    
    const suggestionsContainer = document.getElementById('candidateSuggestions');
    if (suggestionsContainer) {
        suggestionsContainer.style.display = 'none';
    }
}

async function updateVotingInfo() {
    try {
        const contract = getContract();
        
        // Lấy thông tin voting - SỬA LỖI TRUY CẬP
        const info = await contract.getVotingInfo();
        
        // info[0] = startTime, info[1] = endTime, info[2] = maxVotes, info[3] = votesCount, info[4] = remainingVotes, info[5] = isActive
        
        votingInfo = {
            startTime: info[0].toNumber(),
            endTime: info[1].toNumber(),
            maxVotes: info[2].toNumber(),
            votesCount: info[3].toNumber(),
            remainingVotes: info[4].toNumber(),
            isActive: info[5]
        };
        
        updateVotingInfoDisplay();
        updateCountdownDisplay();
        
    } catch (error) {
        console.error('Error updating voting info:', error);
    }
}
/*
async function updateVotingInfo() {
    try {
        const contract = getContract();
        
        // Lấy thông tin voting
        const startTime = await contract.startTime();
        const endTime = await contract.endTime();
        const maxVoters = await contract.maxVoters();
        const votersCount = await contract.votersCount();
        
        // Cập nhật UI
        document.getElementById('maxVotes').textContent = maxVoters.toString();
        document.getElementById('votesCount').textContent = votersCount.toString();
        document.getElementById('remainingVotes').textContent = (maxVoters - votersCount).toString();
        
        // Cập nhật trạng thái
        const currentTime = Math.floor(Date.now() / 1000);
        const isPaused = await contract.paused();
        
        let status = '';
        if (isPaused) {
            status = 'Đã tạm dừng';
        } else if (currentTime < startTime) {
            status = 'Chưa bắt đầu';
        } else if (currentTime > endTime) {
            status = 'Đã kết thúc';
        } else {
            status = 'Đang hoạt động';
        }
        
        document.getElementById('votingStatus').textContent = status;
        
    } catch (error) {
        console.error('Error updating voting info:', error);
    }
}
    */

// nhận token
async function buyTokens(amount) {
    if (!WALLET_CONNECTED) {
        showNotification('Vui lòng kết nối ví trước', 'error');
        return;
    }
    
    try {
        const contract = getContract(true);
        
        // Tính giá ETH (0.01 ETH per token)
        const ethAmount = ethers.utils.parseEther((amount * 0.01).toString());
        
        // Gọi hàm mua token (cần có hàm buyTokens trong contract)
        const tx = await contract.buyTokens({
            value: ethAmount
        });
        
        showNotification(`Đang mua ${amount} token...`, 'info');
        
        await tx.wait();
        
        showNotification(`Đã mua ${amount} token thành công!`, 'success');
        loadTokenInfo(); // Refresh token balance
        
    } catch (error) {
        console.error('Error buying tokens:', error);
        showNotification('Lỗi mua token: ' + error.message, 'error');
    }
}

// Thêm hàm cập nhật thống kê mới
async function updateVoteStats() {
    try {
        const contract = getContract();
        
        // 1. Tổng phiếu bầu (từ getVotingInfo)
        const votingInfo = await contract.getVotingInfo();
        const totalVotes = votingInfo[3].toNumber(); // votesCount
        document.getElementById('totalVotes').textContent = totalVotes.toLocaleString('vi-VN');
        
        // 2. Số ứng viên
        const candidatesCount = await contract.candidatesCount();
        document.getElementById('totalCandidates').textContent = candidatesCount.toNumber();
        
        // 3. Trạng thái bầu cử
        const electionStatus = await getElectionStatus();
        document.getElementById('electionStatus').textContent = electionStatus;
        document.getElementById('electionStatus').style.color = getStatusColor(electionStatus);
        
    } catch (error) {
        console.error('Error updating vote stats:', error);
    }
}

// Thêm hàm lấy trạng thái bầu cử
async function getElectionStatus() {
    try {
        const contract = getContract();
        
        // Lấy thông tin từ contract
        const votingInfo = await contract.getVotingInfo();
        const isPaused = await contract.paused();
        
        const currentTime = Math.floor(Date.now() / 1000);
        const startTime = votingInfo[0].toNumber();
        const endTime = votingInfo[1].toNumber();
        
        // Xác định trạng thái
        if (isPaused) {
            return "Đã tạm dừng";
        } else if (startTime === 0 && endTime === 0) {
            return "Chưa thiết lập";
        } else if (currentTime < startTime) {
            const timeLeft = startTime - currentTime;
            const days = Math.floor(timeLeft / 86400);
            const hours = Math.floor((timeLeft % 86400) / 3600);
            return `Bắt đầu sau: ${days}d ${hours}h`;
        } else if (currentTime > endTime) {
            return "Đã kết thúc";
        } else {
            const timeLeft = endTime - currentTime;
            const days = Math.floor(timeLeft / 86400);
            const hours = Math.floor((timeLeft % 86400) / 3600);
            return `Còn: ${days}d ${hours}h`;
        }
        
    } catch (error) {
        console.error('Error getting election status:', error);
        return "Lỗi tải";
    }
}

// Thêm hàm lấy màu cho trạng thái
function getStatusColor(status) {
    if (status.includes("Đã tạm dừng") || status.includes("Lỗi")) {
        return "var(--danger-color)";
    } else if (status.includes("Chưa thiết lập") || status.includes("Bắt đầu sau")) {
        return "var(--warning-color)";
    } else if (status.includes("Đã kết thúc")) {
        return "var(--text-muted)";
    } else {
        return "var(--success-color)";
    }
}

// Cập nhật hàm loadInitialData để gọi updateVoteStats
function loadInitialData() {
    if (!WALLET_CONNECTED) {
        getAllCandidates();
        updateVoteStats(); // Thêm dòng này
        return;
    }
    
    Promise.all([
        loadTokenInfo(),
        updateVoteStats(), // Thay thế updateVotingInfo()
        getAllCandidates()
    ]).catch(error => {
        console.error('Error loading initial data:', error);
    });
}

// Thêm hàm refresh cho dashboard
async function refreshDashboard() {
    await updateVoteStats();
    await loadTokenInfo();
    showNotification('Đã làm mới dashboard', 'success');
}


// ==============================
// EXPORT FUNCTIONS TO WINDOW
// ==============================

// Make functions available globally
window.connectWallet = connectWallet;
window.showSection = showSection;
window.vote = vote;
window.checkVotingEligibility = checkVotingEligibility;
window.getWinner = getWinner;
window.drawVoteChart = drawVoteChart;
window.getAllCandidates = getAllCandidates;
window.buyTokens = buyTokens;
window.refreshAllData = refreshAllData;
window.selectCandidate = selectCandidate;
window.showNotification = showNotification;
window.updateVoteStats = updateVoteStats;
window.getElectionStatus = getElectionStatus;
window.refreshDashboard = refreshDashboard;
window.buyTokensPrompt = buyTokensPrompt;


// ==============================
// INITIALIZATION COMPLETE
// ==============================

console.log("Main.js loaded successfully");