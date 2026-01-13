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


// File riêng cho chức năng admin
let ADMIN_CONNECTED = "";
let adminContract;

// Khởi tạo admin
document.addEventListener('DOMContentLoaded', function() {
    console.log("Admin interface initialized");
    checkAdminConnection();
});

// Kết nối ví admin
async function connectAdminWallet() {
    if (typeof window.ethereum === 'undefined') {
        showNotification('Vui lòng cài đặt MetaMask!', 'error');
        return;
    }
    
    try {
        const accounts = await window.ethereum.request({ 
            method: "eth_requestAccounts" 
        });
        
        ADMIN_CONNECTED = accounts[0];
        updateAdminDisplay();
        loadAdminData();
        
        // Kiểm tra quyền owner
        await checkAdminPermission();
        
        showNotification('Kết nối ví admin thành công!', 'success');
        return ADMIN_CONNECTED;
    } catch (error) {
        console.error("Admin wallet connection error:", error);
        showNotification('Lỗi kết nối ví admin: ' + error.message, 'error');
        throw error;
    }
}

// Kiểm tra kết nối đã tồn tại
async function checkAdminConnection() {
    if (typeof window.ethereum === 'undefined') return;
    
    try {
        const accounts = await window.ethereum.request({ method: 'eth_accounts' });
        if (accounts.length > 0) {
            ADMIN_CONNECTED = accounts[0];
            updateAdminDisplay();
            loadAdminData();
            await checkAdminPermission();
        }
    } catch (error) {
        console.error("Error checking admin connection:", error);
    }
}

// Cập nhật hiển thị admin
function updateAdminDisplay() {
    const statusDot = document.getElementById('adminStatusDot');
    const statusText = document.getElementById('adminStatusText');
    const walletAddress = document.getElementById('adminWalletAddress');
    
    if (ADMIN_CONNECTED) {
        statusDot.classList.add('connected');
        statusText.textContent = 'Đã kết nối';
        walletAddress.textContent = `${ADMIN_CONNECTED.substring(0, 6)}...${ADMIN_CONNECTED.substring(ADMIN_CONNECTED.length - 4)}`;
        walletAddress.style.display = 'inline';
    } else {
        statusDot.classList.remove('connected');
        statusText.textContent = 'Chưa kết nối';
        walletAddress.style.display = 'none';
    }
}

// Kiểm tra quyền admin
async function checkAdminPermission() {
    try {
        const contract = getContract();
        const owner = await contract.owner();
        
        if (owner.toLowerCase() !== ADMIN_CONNECTED.toLowerCase()) {
            showNotification('CẢNH BÁO: Địa chỉ này không phải là owner của contract!', 'warning');
            
            // Ẩn các chức năng admin nguy hiểm
            document.querySelectorAll('.badge.owner').forEach(badge => {
                badge.style.backgroundColor = 'rgba(220, 53, 69, 0.2)';
                badge.style.color = 'var(--danger-color)';
                badge.textContent = 'KHÔNG CÓ QUYỀN';
            });
            
            // Disable các nút admin
            document.querySelectorAll('button[onclick*="Admin"]').forEach(button => {
                button.disabled = true;
                button.style.opacity = '0.5';
            });
            
            return false;
        } else {
            showNotification('Xác nhận: Đây là địa chỉ owner hợp lệ', 'success');
            return true;
        }
    } catch (error) {
        console.error('Error checking admin permission:', error);
        return false;
    }
}

// Sửa hàm loadAdminData
async function loadAdminData() {
    try {
        const contract = getContract();
        const decimals = await contract.decimals();
        
        // Load thông tin hệ thống
        const info = await contract.getVotingInfo();
        
        // Format token supply với decimals
        const formatToken = (value) => {
            return parseFloat(ethers.utils.formatUnits(value, decimals))
                .toLocaleString('vi-VN', { minimumFractionDigits: 0, maximumFractionDigits: 0 });
        };
        
        document.getElementById('adminCandidatesCount').textContent = await contract.candidatesCount();
        document.getElementById('adminVotesCount').textContent = info._votesCount.toNumber();
        document.getElementById('adminVotersCount').textContent = (await contract.getVoters()).length;
        document.getElementById('adminTokenSupply').textContent = formatToken(await contract.totalSupply());
        
        // Cập nhật thông tin hệ thống
        document.getElementById('systemStartTime').textContent = formatTimestamp(info[0].toNumber());
        document.getElementById('systemEndTime').textContent = formatTimestamp(info[1].toNumber());
        document.getElementById('systemMaxVotes').textContent = info[2].toNumber() === 0 ? 'Không giới hạn' : info[2].toNumber();
        document.getElementById('systemRemainingVotes').textContent = info[2].toNumber() === 0 ? 
            'Không giới hạn' : info[4].toNumber();
        
        // Trạng thái hệ thống
        const isPaused = await contract.paused();
        const currentTime = Math.floor(Date.now() / 1000);
        const isInPeriod = currentTime >= info[0].toNumber() && currentTime <= info[1].toNumber();
        
        let status = '';
        if (isPaused) {
            status = 'Đã tạm dừng';
        } else if (!isInPeriod) {
            status = 'Không trong thời gian vote';
        } else {
            status = 'Đang hoạt động';
        }
        
        document.getElementById('systemStatus').textContent = status;
        
        // Kiểm tra tự động pause
        let autoPauseStatus = '';
        if (info[2].toNumber() > 0 && info[3].toNumber() >= info[2].toNumber()) {
            autoPauseStatus = 'Đã đạt số phiếu tối đa';
        } else if (currentTime > info[1].toNumber()) {
            autoPauseStatus = 'Đã hết thời gian';
        } else {
            autoPauseStatus = 'Đang chờ điều kiện';
        }
        
        document.getElementById('autoPauseStatus').textContent = autoPauseStatus;
        
        // Load danh sách ứng viên
        await getAllCandidatesAdmin();
        
        // Load thống kê token
        await refreshTokenStats();

    } catch (error) {
        console.error('Error loading admin data:', error);
    }
}

// Format timestamp thành ngày giờ
function formatTimestamp(timestamp) {
    if (timestamp === 0) return 'Chưa đặt';
    
    const date = new Date(timestamp * 1000);
    return date.toLocaleString('vi-VN');
}

// Thêm ứng viên (admin)
async function addCandidate(event) {
    event.preventDefault();
    
    if (!await checkAdminPermission()) {
        showNotification('Bạn không có quyền thực hiện hành động này', 'error');
        return;
    }
    
    const name = document.getElementById("candidateName").value.trim();
    const statusElement = document.getElementById("addCandidateStatus");

    if (!name) {
        showNotification("Vui lòng nhập tên ứng viên", "error");
        return;
    }

    try {
        const contract = getContract(true);
        if (statusElement) {
            statusElement.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Đang thêm ứng viên...';
            statusElement.className = 'notification';
            statusElement.style.display = 'block';
        }
        
        const tx = await contract.addCandidate(name);
        await tx.wait();
        
        if (statusElement) {
            statusElement.innerHTML = '<i class="fas fa-check-circle"></i> Thêm ứng viên thành công!';
            statusElement.className = 'notification success';
            statusElement.style.display = 'block';
        }
        
        document.getElementById("candidateName").value = "";
        loadAdminData();
        
        showNotification('Thêm ứng viên thành công!', 'success');
    } catch (error) {
        console.error("Add candidate error:", error);
        if (statusElement) {
            statusElement.innerHTML = `<i class="fas fa-times-circle"></i> Lỗi: ${error.reason || error.message}`;
            statusElement.className = 'notification error';
            statusElement.style.display = 'block';
        }
        showNotification('Lỗi thêm ứng viên: ' + error.message, 'error');
    }
}

// Vô hiệu hóa ứng viên (admin)
async function disableCandidate(event) {
    event.preventDefault();
    
    if (!await checkAdminPermission()) {
        showNotification('Bạn không có quyền thực hiện hành động này', 'error');
        return;
    }
    
    const id = document.getElementById("disableCandidateId").value.trim();
    const statusElement = document.getElementById("disableCandidateStatus");

    if (!id) {
        showNotification("Vui lòng nhập ID ứng viên", "error");
        return;
    }

    try {
        const contract = getContract(true);
        if (statusElement) {
            statusElement.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Đang vô hiệu hóa ứng viên...';
            statusElement.className = 'notification';
            statusElement.style.display = 'block';
        }
        
        const tx = await contract.disableCandidate(id);
        await tx.wait();
        
        if (statusElement) {
            statusElement.innerHTML = '<i class="fas fa-check-circle"></i> Vô hiệu hóa ứng viên thành công!';
            statusElement.className = 'notification success';
            statusElement.style.display = 'block';
        }
        
        document.getElementById("disableCandidateId").value = "";
        loadAdminData();
        
        showNotification('Vô hiệu hóa ứng viên thành công!', 'success');
    } catch (error) {
        console.error("Disable candidate error:", error);
        if (statusElement) {
            statusElement.innerHTML = `<i class="fas fa-times-circle"></i> Lỗi: ${error.reason || error.message}`;
            statusElement.className = 'notification error';
            statusElement.style.display = 'block';
        }
        showNotification('Lỗi vô hiệu hóa ứng viên: ' + error.message, 'error');
    }
}

// Lấy danh sách ứng viên cho admin
async function getAllCandidatesAdmin() {
    const tableBody = document.querySelector("#adminCandidatesTable tbody");

    if (!tableBody) return;

    try {
        tableBody.innerHTML = "<tr><td colspan='4'>Đang tải...</td></tr>";
        const contract = getContract();
        
        const candidates = await contract.getCandidates();
        
        if (candidates.length === 0) {
            tableBody.innerHTML = "<tr><td colspan='4'>Chưa có ứng viên nào</td></tr>";
            return;
        }

        tableBody.innerHTML = "";
        candidates.forEach(candidate => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${candidate.id.toString()}</td>
                <td>${candidate.name}</td>
                <td>${candidate.voteCount.toString()}</td>
                <td><span class="status-badge ${candidate.active ? 'status-active' : 'status-inactive'}">${candidate.active ? "Đang hoạt động" : "Đã vô hiệu"}</span></td>
            `;
            tableBody.appendChild(row);
        });
        
    } catch (error) {
        console.error("Get candidates error:", error);
        tableBody.innerHTML = "<tr><td colspan='4'>Lỗi tải danh sách ứng viên</td></tr>";
    }
}

// Đặt thời gian voting (admin)
async function setVotingTimeAdmin(event) {
    event.preventDefault();
    
    if (!await checkAdminPermission()) {
        showNotification('Bạn không có quyền thực hiện hành động này', 'error');
        return;
    }
    
    const startInput = document.getElementById("startTime").value;
    const endInput = document.getElementById("endTime").value;
    const statusElement = document.getElementById("setTimeStatus");

    if (!startInput || !endInput) {
        showNotification("Vui lòng nhập cả thời gian bắt đầu và kết thúc", "error");
        return;
    }

    const start = Math.floor(new Date(startInput).getTime() / 1000);
    const end = Math.floor(new Date(endInput).getTime() / 1000);
    const currentTime = Math.floor(Date.now() / 1000);

    // Kiểm tra validation
    if (start < currentTime) {
        showNotification("Thời gian bắt đầu phải ở tương lai", "error");
        return;
    }
    
    if (end <= start) {
        showNotification("Thời gian kết thúc phải sau thời gian bắt đầu", "error");
        return;
    }
    
    if (end - start < 3600) {
        showNotification("Thời gian voting phải ít nhất 1 giờ", "error");
        return;
    }
    
    if (end - start > 30 * 24 * 3600) {
        showNotification("Thời gian voting không được quá 30 ngày", "error");
        return;
    }
    
    try {
        const contract = getContract();
        
        // Kiểm tra xem voting đã bắt đầu chưa
        const existingStartTime = await contract.startTime();
        const existingEndTime = await contract.endTime();
        
        if (existingStartTime.toNumber() > 0 && currentTime >= existingStartTime.toNumber()) {
            showNotification("Không thể thay đổi thời gian khi voting đã bắt đầu!", "error");
            return;
        }
        
        const contractWithSigner = getContract(true);
        if (statusElement) {
            statusElement.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Đang đặt thời gian...';
            statusElement.className = 'notification';
            statusElement.style.display = 'block';
        }
        
        const tx = await contractWithSigner.setVotingTime(start, end);
        await tx.wait();
        
        if (statusElement) {
            statusElement.innerHTML = '<i class="fas fa-check-circle"></i> Đặt thời gian thành công!';
            statusElement.className = 'notification success';
            statusElement.style.display = 'block';
        }
        
        loadAdminData();
        
        showNotification('Đặt thời gian voting thành công!', 'success');
        
        // Auto-hide status after 5 seconds
        setTimeout(() => {
            if (statusElement) {
                statusElement.style.display = 'none';
            }
        }, 5000);
        
    } catch (error) {
        console.error("Set voting time error:", error);
        if (statusElement) {
            statusElement.innerHTML = `<i class="fas fa-times-circle"></i> Lỗi: ${error.reason || error.message}`;
            statusElement.className = 'notification error';
            statusElement.style.display = 'block';
        }
        showNotification('Lỗi đặt thời gian: ' + error.message, 'error');
    }
}

// Đặt số phiếu tối đa (admin)
async function setMaxVotesAdmin() {
    if (!await checkAdminPermission()) {
        showNotification('Bạn không có quyền thực hiện hành động này', 'error');
        return;
    }
    
    const maxVotesInput = document.getElementById('maxVotesInput');
    const maxVotes = parseInt(maxVotesInput.value);
    
    if (isNaN(maxVotes) || maxVotes < 0) {
        showNotification('Vui lòng nhập số phiếu hợp lệ', 'error');
        return;
    }
    
    try {
        const contract = getContract(true);
        showNotification(`Đang đặt số phiếu tối đa: ${maxVotes}...`, 'info');
        
        const tx = await contract.setMaxVotes(maxVotes);
        await tx.wait();
        
        showNotification(`Đã đặt số phiếu tối đa: ${maxVotes}`, 'success');
        loadAdminData();
        
    } catch (error) {
        console.error('Error setting max votes:', error);
        showNotification('Lỗi đặt số phiếu tối đa: ' + error.message, 'error');
    }
}

// Pause voting thủ công (admin)
async function pauseVoting(pause) {
    if (!await checkAdminPermission()) {
        showNotification('Bạn không có quyền thực hiện hành động này', 'error');
        return;
    }
    
    const reason = document.getElementById('pauseReason').value;
    const statusElement = document.getElementById('pauseStatus');
    
    try {
        const contract = getContract(true);
        
        if (statusElement) {
            statusElement.innerHTML = `<i class="fas fa-spinner fa-spin"></i> Đang ${pause ? 'tạm dừng' : 'tiếp tục'} voting...`;
            statusElement.className = 'notification';
            statusElement.style.display = 'block';
        }
        
        const tx = await contract.setPaused(pause);
        await tx.wait();
        
        if (statusElement) {
            statusElement.innerHTML = `<i class="fas fa-check-circle"></i> Đã ${pause ? 'tạm dừng' : 'tiếp tục'} voting thành công!`;
            statusElement.className = 'notification success';
            statusElement.style.display = 'block';
        }
        
        // Log hành động
        logEmergencyAction(pause ? 'Tạm dừng thủ công' : 'Tiếp tục thủ công', reason);
        
        showNotification(`Đã ${pause ? 'tạm dừng' : 'tiếp tục'} voting${reason ? ' - Lý do: ' + reason : ''}`, 'success');
        loadAdminData();
        
    } catch (error) {
        console.error('Error pausing voting:', error);
        if (statusElement) {
            statusElement.innerHTML = `<i class="fas fa-times-circle"></i> Lỗi: ${error.message}`;
            statusElement.className = 'notification error';
            statusElement.style.display = 'block';
        }
        showNotification('Lỗi kiểm soát voting: ' + error.message, 'error');
    }
}

// Phân phối token (admin)
async function distributeTokensAdmin() {
    if (!await checkAdminPermission()) {
        showNotification('Bạn không có quyền thực hiện hành động này', 'error');
        return;
    }
    
    const addressesInput = document.getElementById('tokenAddresses');
    const amountsInput = document.getElementById('tokenAmounts');
    const statusElement = document.getElementById('distributionStatus');
    
    const addresses = addressesInput.value.split(',').map(addr => addr.trim()).filter(addr => addr);
    const amounts = amountsInput.value.split(',').map(amt => amt.trim()).filter(amt => amt);
    
    if (addresses.length === 0 || amounts.length === 0) {
        showNotification('Vui lòng nhập địa chỉ và số lượng token', 'error');
        return;
    }
    
    if (addresses.length !== amounts.length) {
        showNotification('Số lượng địa chỉ và số token không khớp', 'error');
        return;
    }
    
    // Validate địa chỉ
    for (const addr of addresses) {
        if (!ethers.utils.isAddress(addr)) {
            showNotification(`Địa chỉ không hợp lệ: ${addr}`, 'error');
            return;
        }
    }
    
    // Validate số lượng - CHỈ ĐƯỢC PHÂN PHỐI 1 TOKEN
    const amountsNum = amounts.map(amt => {
        const num = parseInt(amt);
        if (isNaN(num) || num !== 1) {
            throw new Error(`Mỗi người chỉ được phân phối 1 token: ${amt}`);
        }
        return num;
    });
    
    try {
        const contract = getContract(true);
        
        // Kiểm tra từng địa chỉ xem đã có token chưa
        for (let i = 0; i < addresses.length; i++) {
            const hasPurchased = await contract.hasPurchased(addresses[i]);
            if (hasPurchased) {
                showNotification(`Địa chỉ ${addresses[i]} đã có token, không thể phân phối thêm`, 'error');
                return;
            }
        }
        
        if (statusElement) {
            statusElement.innerHTML = `<i class="fas fa-spinner fa-spin"></i> Đang phân phối token cho ${addresses.length} địa chỉ...`;
            statusElement.className = 'notification';
            statusElement.style.display = 'block';
        }
        
        const tx = await contract.distributeTokens(addresses, amountsNum);
        await tx.wait();
        
        if (statusElement) {
            statusElement.innerHTML = `<i class="fas fa-check-circle"></i> Đã phân phối token thành công!`;
            statusElement.className = 'notification success';
            statusElement.style.display = 'block';
        }
        
        showNotification(`Đã phân phối token cho ${addresses.length} địa chỉ`, 'success');
        
    } catch (error) {
        console.error('Error distributing tokens:', error);
        if (statusElement) {
            statusElement.innerHTML = `<i class="fas fa-times-circle"></i> Lỗi: ${error.message}`;
            statusElement.className = 'notification error';
            statusElement.style.display = 'block';
        }
        showNotification('Lỗi phân phối token: ' + error.message, 'error');
    }
}

// Refresh thống kê token
async function refreshTokenStats() {
    try {
        const contract = getContract();
        const decimals = await contract.decimals();
        
        const totalSupply = await contract.totalSupply();
        const contractBalance = await contract.balanceOf(contractAddress);
        const adminBalance = await contract.balanceOf(ADMIN_CONNECTED);
        
        const votesCount = (await contract.getVotingInfo())._votesCount;
        
        // Format với decimals
        const formatWithDecimals = (value) => {
            return parseFloat(ethers.utils.formatUnits(value, decimals));
        };
        
        document.getElementById('contractTokenBalance').textContent = formatWithDecimals(contractBalance);
        document.getElementById('totalTokenSupply').textContent = formatWithDecimals(totalSupply);
        document.getElementById('adminTokenBalance').textContent = formatWithDecimals(adminBalance);
        document.getElementById('usedTokens').textContent = votesCount.toNumber();
        
    } catch (error) {
        console.error('Error refreshing token stats:', error);
    }
}
/*
// Rút token (admin)
async function withdrawTokensAdmin() {
    if (!await checkAdminPermission()) {
        showNotification('Bạn không có quyền thực hiện hành động này', 'error');
        return;
    }
    
    const amountInput = document.getElementById('withdrawTokenAmount');
    const amount = parseInt(amountInput.value);
    
    if (isNaN(amount) || amount <= 0) {
        showNotification('Vui lòng nhập số lượng hợp lệ', 'error');
        return;
    }
    
    try {
        const contract = getContract(true);
        const contractBalance = await contract.balanceOf(contractAddress);
        
        if (contractBalance.lt(ethers.BigNumber.from(amount))) {
            showNotification(`Không đủ token trong contract. Chỉ có ${parseFloat(ethers.utils.formatUnits(contractBalance, 0))} token`, 'error');
            return;
        }
        
        const confirmed = confirm(`Bạn có chắc muốn rút ${amount} token từ contract về ví admin?`);
        if (!confirmed) return;
        
        showNotification(`Đang rút ${amount} token...`, 'info');
        
        const tx = await contract.withdrawTokens(amount);
        await tx.wait();
        
        showNotification(`Đã rút ${amount} token thành công!`, 'success');
        refreshTokenStats();
        
    } catch (error) {
        console.error('Error withdrawing tokens:', error);
        showNotification('Lỗi rút token: ' + error.message, 'error');
    }
}

// Rút ETH (admin)
async function withdrawETHAdmin() {
    if (!await checkAdminPermission()) {
        showNotification('Bạn không có quyền thực hiện hành động này', 'error');
        return;
    }
    
    try {
        const contract = getContract(true);
        const contractETH = await contract.provider.getBalance(contractAddress);
        
        if (contractETH.isZero()) {
            showNotification('Không có ETH trong contract', 'warning');
            return;
        }
        
        const ethAmount = parseFloat(ethers.utils.formatEther(contractETH));
        const confirmed = confirm(`Bạn có chắc muốn rút ${ethAmount} ETH từ contract về ví admin?`);
        if (!confirmed) return;
        
        showNotification(`Đang rút ${ethAmount} ETH...`, 'info');
        
        const tx = await contract.withdrawETH();
        await tx.wait();
        
        showNotification(`Đã rút ${ethAmount} ETH thành công!`, 'success');
        
    } catch (error) {
        console.error('Error withdrawing ETH:', error);
        showNotification('Lỗi rút ETH: ' + error.message, 'error');
    }
}
*/
/*
// Tạm dừng khẩn cấp
async function emergencyPause() {
    if (!await checkAdminPermission()) {
        showNotification('Bạn không có quyền thực hiện hành động này', 'error');
        return;
    }
    
    const reason = document.getElementById('emergencyReason').value;
    if (!reason) {
        showNotification('Vui lòng nhập lý do khẩn cấp', 'error');
        return;
    }
    
    const confirmed = confirm('Bạn có chắc muốn tạm dừng khẩn cấp hệ thống? Hành động này có thể ảnh hưởng đến tính minh bạch.');
    if (!confirmed) return;
    
    try {
        const contract = getContract(true);
        showNotification('Đang tạm dừng khẩn cấp...', 'info');
        
        const tx = await contract.setPaused(true);
        await tx.wait();
        
        showNotification('Đã tạm dừng khẩn cấp hệ thống!', 'success');
        
        // Log hành động khẩn cấp
        logEmergencyAction('Tạm dừng khẩn cấp', reason);
        loadAdminData();
        
    } catch (error) {
        console.error('Error emergency pause:', error);
        showNotification('Lỗi tạm dừng khẩn cấp: ' + error.message, 'error');
    }
}
*/
// Reset election (admin)
async function resetElectionAdmin() {
    if (!await checkAdminPermission()) {
        showNotification('Bạn không có quyền thực hiện hành động này', 'error');
        return;
    }
    
    const reason = document.getElementById('emergencyReason').value;
    if (!reason) {
        showNotification('Vui lòng nhập lý do reset', 'error');
        return;
    }
    
    const confirmed = confirm('CẢNH BÁO: Bạn có CHẮC CHẮN muốn reset toàn bộ hệ thống? Hành động này KHÔNG THỂ hoàn tác!');
    if (!confirmed) return;
    
    try {
        const contract = getContract(true);
        showNotification('Đang reset hệ thống...', 'info');
        
        const tx = await contract.resetElection();
        await tx.wait();
        
        showNotification('Đã reset hệ thống thành công!', 'success');
        
        // Log hành động khẩn cấp
        logEmergencyAction('Reset toàn bộ hệ thống', reason);
        loadAdminData();
        
    } catch (error) {
        console.error('Error resetting election:', error);
        showNotification('Lỗi reset hệ thống: ' + error.message, 'error');
    }
}

// Log hành động khẩn cấp
function logEmergencyAction(action, reason) {
    const logElement = document.getElementById('emergencyLogs');
    const timestamp = new Date().toLocaleString('vi-VN');
    const logEntry = document.createElement('div');
    
    logEntry.style.padding = '10px';
    logEntry.style.marginBottom = '10px';
    logEntry.style.background = 'rgba(220, 53, 69, 0.1)';
    logEntry.style.borderRadius = '8px';
    logEntry.style.borderLeft = '4px solid var(--danger-color)';
    
    logEntry.innerHTML = `
        <p><strong>${action}</strong></p>
        <p><small>Thời gian: ${timestamp}</small></p>
        <p><small>Lý do: ${reason || 'Không có'}</small></p>
        <p><small>Thực hiện bởi: ${ADMIN_CONNECTED.substring(0, 10)}...</small></p>
    `;
    
    // Thêm log mới lên đầu
    if (logElement.firstChild && logElement.firstChild.textContent.includes('Chưa có hành động')) {
        logElement.innerHTML = '';
    }
    
    logElement.prepend(logEntry);
}

// Chuyển section trong admin
function showAdminSection(sectionId) {
    // Ẩn tất cả sections
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Remove active class từ nav items
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });
    
    // Hiển thị section được chọn
    const section = document.getElementById('admin' + sectionId.charAt(0).toUpperCase() + sectionId.slice(1));
    if (section) {
        section.classList.add('active');
    }
    
    // Active nav item tương ứng
    document.querySelectorAll('.nav-item').forEach(item => {
        if (item.textContent.includes(sectionId.charAt(0).toUpperCase() + sectionId.slice(1))) {
            item.classList.add('active');
        }
    });
}

// Helper functions
function getContract(signer = false) {
    if (typeof window.ethereum === 'undefined') {
        throw new Error("MetaMask not installed");
    }
    
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const contractSigner = signer ? provider.getSigner() : provider;
    
    return new ethers.Contract(contractAddress, contractAbi, contractSigner);
}

function showNotification(message, type = 'info') {
    // ... (giống hàm showNotification trong main.js)
}

// Lắng nghe thay đổi tài khoản
if (window.ethereum) {
    window.ethereum.on('accountsChanged', (accounts) => {
        if (accounts.length > 0) {
            ADMIN_CONNECTED = accounts[0];
            updateAdminDisplay();
            checkAdminPermission();
            loadAdminData();
        } else {
            ADMIN_CONNECTED = "";
            updateAdminDisplay();
        }
    });
}

// Hàm cập nhật trạng thái cho các phần tử
function updateDataStatus(elementId, status, value = '') {
    const element = document.getElementById(elementId);
    if (!element) return;
    
    // Reset classes
    element.className = '';
    
    // Thêm class tương ứng với trạng thái
    switch(status) {
        case 'loading':
            element.classList.add('data-loading');
            element.textContent = 'Đang tải...';
            break;
        case 'loaded':
            element.classList.add('data-loaded');
            element.textContent = value || '--';
            break;
        case 'success':
            element.classList.add('data-success');
            element.textContent = value || '--';
            break;
        case 'error':
            element.classList.add('data-error');
            element.textContent = value || 'Lỗi';
            break;
        case 'info':
            element.classList.add('data-info');
            element.textContent = value || '--';
            break;
        default:
            element.textContent = value || '--';
    }
}

// Hàm định dạng timestamp thành ngày giờ
function formatTimestamp(timestamp) {
    if (timestamp === 0) return 'Chưa đặt';
    
    try {
        const date = new Date(timestamp * 1000);
        return date.toLocaleString('vi-VN', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });
    } catch (error) {
        return 'Lỗi định dạng';
    }
}

// Hàm làm mới thông tin hệ thống
async function refreshSystemInfo() {
    if (!ADMIN_CONNECTED) {
        showNotification('Vui lòng kết nối ví admin trước', 'error');
        return;
    }
    
    // Set tất cả về trạng thái loading
    updateDataStatus('systemStatus', 'loading');
    updateDataStatus('systemStartTime', 'loading');
    updateDataStatus('systemEndTime', 'loading');
    updateDataStatus('systemMaxVotes', 'loading');
    updateDataStatus('systemRemainingVotes', 'loading');
    updateDataStatus('systemVotersCount', 'loading');
    
    try {
        const contract = getContract();
        
        // Lấy thông tin voting từ contract
        const info = await contract.getVotingInfo();
        // info = [startTime, endTime, maxVotes, votesCount, remainingVotes, isActive]
        
        // Lấy thông tin paused
        const isPaused = await contract.paused();
        
        // Lấy số người đã vote
        const voters = await contract.getVoters();
        
        // Lấy thời gian hiện tại
        const currentTime = Math.floor(Date.now() / 1000);
        
        // Xác định trạng thái voting
        let status = '';
        let statusClass = '';
        
        if (isPaused) {
            status = 'Đã tạm dừng';
            statusClass = 'error';
        } else if (info[0].toNumber() === 0 && info[1].toNumber() === 0) {
            status = 'Chưa thiết lập thời gian';
            statusClass = 'info';
        } else if (currentTime < info[0].toNumber()) {
            const timeLeft = info[0].toNumber() - currentTime;
            const hours = Math.floor(timeLeft / 3600);
            status = `Chưa bắt đầu (còn ${hours} giờ)`;
            statusClass = 'info';
        } else if (currentTime > info[1].toNumber()) {
            status = 'Đã kết thúc';
            statusClass = 'error';
        } else if (info[2].toNumber() > 0 && info[3].toNumber() >= info[2].toNumber()) {
            status = 'Đã đạt số phiếu tối đa';
            statusClass = 'success';
        } else {
            const timeLeft = info[1].toNumber() - currentTime;
            const days = Math.floor(timeLeft / 86400);
            const hours = Math.floor((timeLeft % 86400) / 3600);
            status = `Đang diễn ra (còn ${days}d ${hours}h)`;
            statusClass = 'success';
        }
        
        // Cập nhật các phần tử
        updateDataStatus('systemStatus', statusClass, status);
        updateDataStatus('systemStartTime', 'loaded', formatTimestamp(info[0].toNumber()));
        updateDataStatus('systemEndTime', 'loaded', formatTimestamp(info[1].toNumber()));
        
        // Xử lý maxVotes
        const maxVotes = info[2].toNumber();
        if (maxVotes === 0) {
            updateDataStatus('systemMaxVotes', 'loaded', 'Không giới hạn');
        } else {
            updateDataStatus('systemMaxVotes', 'loaded', maxVotes.toLocaleString('vi-VN'));
        }
        
        // Xử lý remainingVotes
        const votesCount = info[3].toNumber();
        const remainingVotes = info[4].toNumber();
        if (maxVotes === 0) {
            updateDataStatus('systemRemainingVotes', 'loaded', 'Không giới hạn');
        } else {
            updateDataStatus('systemRemainingVotes', 'loaded', 
                `${remainingVotes.toLocaleString('vi-VN')} (${votesCount}/${maxVotes})`);
        }
        
        // Cập nhật số người đã vote
        updateDataStatus('systemVotersCount', 'loaded', voters.length.toLocaleString('vi-VN'));
        
        // Cập nhật thời gian còn lại tự động
        updateCountdown(info[0].toNumber(), info[1].toNumber());
        
    } catch (error) {
        console.error('Error refreshing system info:', error);
        
        // Cập nhật trạng thái lỗi
        updateDataStatus('systemStatus', 'error', 'Lỗi tải dữ liệu');
        updateDataStatus('systemStartTime', 'error', 'Lỗi');
        updateDataStatus('systemEndTime', 'error', 'Lỗi');
        updateDataStatus('systemMaxVotes', 'error', 'Lỗi');
        updateDataStatus('systemRemainingVotes', 'error', 'Lỗi');
        updateDataStatus('systemVotersCount', 'error', 'Lỗi');
        
        showNotification('Lỗi làm mới thông tin hệ thống: ' + error.message, 'error');
    }
}

// Hàm cập nhật countdown tự động
function updateCountdown(startTime, endTime) {
    const update = () => {
        const currentTime = Math.floor(Date.now() / 1000);
        const statusElement = document.getElementById('systemStatus');
        
        if (startTime === 0 || endTime === 0) return;
        
        let statusText = '';
        
        if (currentTime < startTime) {
            const timeLeft = startTime - currentTime;
            const days = Math.floor(timeLeft / 86400);
            const hours = Math.floor((timeLeft % 86400) / 3600);
            const minutes = Math.floor((timeLeft % 3600) / 60);
            statusText = `Bắt đầu sau: ${days}d ${hours}h ${minutes}m`;
        } else if (currentTime <= endTime) {
            const timeLeft = endTime - currentTime;
            const days = Math.floor(timeLeft / 86400);
            const hours = Math.floor((timeLeft % 86400) / 3600);
            const minutes = Math.floor((timeLeft % 3600) / 60);
            statusText = `Kết thúc sau: ${days}d ${hours}h ${minutes}m`;
        }
        
        if (statusText && statusElement) {
            // Giữ nguyên class, chỉ cập nhật text
            statusElement.textContent = statusText;
        }
    };
    
    // Cập nhật ngay lập tức
    update();
    
    // Cập nhật mỗi phút
    return setInterval(update, 60000);
}

// Hàm load dữ liệu admin (sửa lại)
async function loadAdminData() {
    try {
        // Refresh thông tin hệ thống
        await refreshSystemInfo();
        
        // Load các dữ liệu khác
        const contract = getContract();
        
        // Lấy số ứng viên
        const candidatesCount = await contract.candidatesCount();
        document.getElementById('adminCandidatesCount').textContent = candidatesCount.toNumber();
        
        // Lấy số phiếu
        const votesCount = (await contract.getVotingInfo())[3];
        document.getElementById('adminVotesCount').textContent = votesCount.toNumber();
        
        // Lấy số người vote
        const voters = await contract.getVoters();
        document.getElementById('adminVotersCount').textContent = voters.length;
        
        // Lấy tổng cung token
        const totalSupply = await contract.totalSupply();
        const decimals = await contract.decimals();
        const formattedSupply = parseFloat(ethers.utils.formatUnits(totalSupply, decimals));
        document.getElementById('adminTokenSupply').textContent = 
            formattedSupply.toLocaleString('vi-VN', { minimumFractionDigits: 0, maximumFractionDigits: 0 });
        
        // Load danh sách ứng viên
        await getAllCandidatesAdmin();
        
        // Load thống kê token
        await refreshTokenStats();
        
        // Cập nhật auto pause status
        updateAutoPauseStatus();
        
    } catch (error) {
        console.error('Error loading admin data:', error);
        showNotification('Lỗi tải dữ liệu admin: ' + error.message, 'error');
    }
}

// Hàm cập nhật trạng thái tự động pause
async function updateAutoPauseStatus() {
    try {
        const contract = getContract();
        const info = await contract.getVotingInfo();
        const isPaused = await contract.paused();
        const currentTime = Math.floor(Date.now() / 1000);
        
        let autoPauseStatus = '';
        let statusClass = 'info';
        
        if (isPaused) {
            autoPauseStatus = 'Đã tạm dừng';
            statusClass = 'error';
        } else if (info[2].toNumber() > 0 && info[3].toNumber() >= info[2].toNumber()) {
            autoPauseStatus = 'Đã đạt số phiếu tối đa';
            statusClass = 'success';
        } else if (currentTime > info[1].toNumber() && info[1].toNumber() > 0) {
            autoPauseStatus = 'Đã hết thời gian';
            statusClass = 'error';
        } else {
            autoPauseStatus = 'Đang chờ điều kiện';
            statusClass = 'info';
        }
        
        const element = document.getElementById('autoPauseStatus');
        if (element) {
            element.className = '';
            element.classList.add(`data-${statusClass}`);
            element.textContent = autoPauseStatus;
        }
        
    } catch (error) {
        console.error('Error updating auto pause status:', error);
    }
}