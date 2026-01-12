let WALLET_CONNECTED = "0x1085B53922A837c3d4482bcF462a36D58189FB6f";
let contractAddress = "0x4b2F7b1C44d09064E899270f69B4e138146a62b3";  
let contractAbi = [
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
          "internalType": "bool",
          "name": "status",
          "type": "bool"
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
      "name": "ONE_TOKEN",
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
          "name": "name_",
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
          "name": "id",
          "type": "uint256"
        }
      ],
      "name": "disableCandidate",
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
          "internalType": "struct VotingExtended.Candidate[]",
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
      "name": "maxVoters",
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
      "inputs": [
        {
          "internalType": "bool",
          "name": "status",
          "type": "bool"
        }
      ],
      "name": "pause",
      "outputs": [],
      "stateMutability": "nonpayable",
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
          "name": "_start",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_end",
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
          "name": "candidateName",
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
      "inputs": [],
      "name": "votersCount",
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
      "inputs": [
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "withdrawToken",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }

];


let userTokenBalance = 0;
let tokenAllowance = 0;
let hasVoted = false;
let voteChartInstance = null;

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    console.log("QNU StarVote DApp initialized");
    
    // Check if wallet is already connected
    checkExistingConnection();
    
    // Set default datetime values
    const now = new Date();
    const oneWeekLater = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000);
    
    const startTimeInput = document.getElementById('startTime');
    const endTimeInput = document.getElementById('endTime');
    
    if (startTimeInput) {
        startTimeInput.value = now.toISOString().slice(0, 16);
    }
    if (endTimeInput) {
        endTimeInput.value = oneWeekLater.toISOString().slice(0, 16);
    }
    
    // Load initial data
    if (typeof getAllCandidates === 'function') {
        getAllCandidates();
    }
    if (typeof displayRemainingTime === 'function') {
        displayRemainingTime();
    }
    if (typeof updateDashboardData === 'function') {
        updateDashboardData();
    }
    
    // Listen for account changes
    if (window.ethereum) {
        window.ethereum.on('accountsChanged', handleAccountsChanged);
        window.ethereum.on('chainChanged', () => window.location.reload());
    }
});

// Check if wallet is already connected
async function checkExistingConnection() {
    if (typeof window.ethereum === 'undefined') return;
    
    try {
        const accounts = await window.ethereum.request({ method: 'eth_accounts' });
        if (accounts.length > 0) {
            WALLET_CONNECTED = accounts[0];
            updateWalletDisplay();
            loadTokenInfo();
            updateDashboardData();
        }
    } catch (error) {
        console.error("Error checking existing connection:", error);
    }
}

// Handle account changes
function handleAccountsChanged(accounts) {
    if (accounts.length === 0) {
        WALLET_CONNECTED = "";
        updateWalletDisplay();
        showNotification('Wallet disconnected', 'warning');
    } else {
        WALLET_CONNECTED = accounts[0];
        updateWalletDisplay();
        loadTokenInfo();
        updateDashboardData();
        showNotification('Wallet account changed', 'info');
    }
}

// Connect wallet function
async function connectWallet() {
    if (typeof window.ethereum === 'undefined') {
        showNotification('Please install MetaMask!', 'error');
        return;
    }
    
    try {
        const accounts = await window.ethereum.request({ 
            method: "eth_requestAccounts" 
        });
        
        WALLET_CONNECTED = accounts[0];
        updateWalletDisplay();
        loadTokenInfo();
        updateDashboardData();
        
        showNotification('Wallet connected successfully!', 'success');
        return WALLET_CONNECTED;
    } catch (error) {
        console.error("Wallet connection error:", error);
        showNotification('Failed to connect wallet: ' + error.message, 'error');
        throw error;
    }
}

// Update wallet display in UI
function updateWalletDisplay() {
    const statusDot = document.getElementById('statusDot');
    const statusText = document.getElementById('statusText');
    const walletAddress = document.getElementById('walletAddress');
    
    if (WALLET_CONNECTED) {
        statusDot.classList.add('connected');
        statusText.textContent = 'Connected';
        walletAddress.textContent = `${WALLET_CONNECTED.substring(0, 6)}...${WALLET_CONNECTED.substring(WALLET_CONNECTED.length - 4)}`;
        walletAddress.style.display = 'inline';
        
        // Enable voting UI
        const voteButton = document.getElementById('voteButton');
        const approveButton = document.getElementById('approveButton');
        if (voteButton) voteButton.disabled = false;
        if (approveButton) approveButton.disabled = false;
    } else {
        statusDot.classList.remove('connected');
        statusText.textContent = 'Not Connected';
        walletAddress.style.display = 'none';
    }
}

// Get contract instance
function getContract(signer = false) {
    if (typeof window.ethereum === 'undefined') {
        throw new Error("MetaMask not installed");
    }
    
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const contractSigner = signer ? provider.getSigner() : provider;
    
    return new ethers.Contract(contractAddress, contractAbi, contractSigner);
}

// Load token information
async function loadTokenInfo() {
    if (!WALLET_CONNECTED) return;
    
    try {
        const contract = getContract();
        
        // Get token balance
        const balance = await contract.balanceOf(WALLET_CONNECTED);
        userTokenBalance = parseFloat(ethers.utils.formatUnits(balance, 0));
        
        // Get token allowance for voting contract
        const allowance = await contract.allowance(WALLET_CONNECTED, contractAddress);
        tokenAllowance = parseFloat(ethers.utils.formatUnits(allowance, 0));
        
        // Check if user has already voted
        const voted = await contract.hasVoted(WALLET_CONNECTED);
        hasVoted = voted;
        
        // Update UI
        updateTokenDisplay();
        
    } catch (error) {
        console.error('Error loading token info:', error);
    }
}

// Update token display in UI
function updateTokenDisplay() {
    // Dashboard
    const yourTokenBalance = document.getElementById('yourTokenBalance');
    const tokenBalanceDisplay = document.getElementById('tokenBalanceDisplay');
    if (yourTokenBalance) yourTokenBalance.textContent = userTokenBalance;
    if (tokenBalanceDisplay) tokenBalanceDisplay.textContent = userTokenBalance;
    
    // Tokens section
    const tokenBalanceDetail = document.getElementById('tokenBalanceDetail');
    const tokenAllowanceDetail = document.getElementById('tokenAllowanceDetail');
    if (tokenBalanceDetail) tokenBalanceDetail.textContent = userTokenBalance;
    if (tokenAllowanceDetail) tokenAllowanceDetail.textContent = tokenAllowance;
    
    // Vote section
    const voteTokenBalance = document.getElementById('voteTokenBalance');
    const tokenAllowanceInfo = document.getElementById('tokenAllowanceInfo');
    const voteTokenStatus = document.getElementById('voteTokenStatus');
    
    if (voteTokenBalance) voteTokenBalance.textContent = userTokenBalance;
    
    if (tokenAllowanceInfo) {
        if (tokenAllowance >= 1) {
            tokenAllowanceInfo.innerHTML = `<span style="color: var(--success-color);"><i class="fas fa-check-circle"></i> ${tokenAllowance} tokens approved for voting</span>`;
        } else {
            tokenAllowanceInfo.innerHTML = `<span style="color: var(--danger-color);"><i class="fas fa-exclamation-circle"></i> No tokens approved for voting</span>`;
        }
    }
    
    if (voteTokenStatus) voteTokenStatus.style.display = 'block';
}

// Check voting eligibility
async function checkVotingEligibility() {
    if (!WALLET_CONNECTED) {
        showNotification('Please connect your wallet first', 'error');
        return;
    }
    
    const requirements = document.getElementById('voteRequirements');
    let html = '<h3 style="margin-bottom: 15px;">Voting Requirements:</h3>';
    let allMet = true;
    
    try {
        const contract = getContract();
        
        // 1. Check token balance
        if (userTokenBalance >= 1) {
            html += `<p style="color: var(--success-color);"><i class="fas fa-check-circle"></i> Token balance: ${userTokenBalance} (Minimum: 1)</p>`;
        } else {
            html += `<p style="color: var(--danger-color);"><i class="fas fa-times-circle"></i> Token balance: ${userTokenBalance} (Minimum: 1)</p>`;
            allMet = false;
        }
        
        // 2. Check token allowance
        if (tokenAllowance >= 1) {
            html += `<p style="color: var(--success-color);"><i class="fas fa-check-circle"></i> Token allowance: ${tokenAllowance} (Minimum: 1)</p>`;
        } else {
            html += `<p style="color: var(--danger-color);"><i class="fas fa-times-circle"></i> Token allowance: ${tokenAllowance} (Minimum: 1)</p>`;
            allMet = false;
        }
        
        // 3. Check if already voted
        if (!hasVoted) {
            html += `<p style="color: var(--success-color);"><i class="fas fa-check-circle"></i> Has not voted yet</p>`;
        } else {
            html += `<p style="color: var(--danger-color);"><i class="fas fa-times-circle"></i> Already voted (one vote per address)</p>`;
            allMet = false;
        }
        
        // 4. Check voting period
        const paused = await contract.paused();
        const endTime = await contract.endTime();
        const currentTime = Math.floor(Date.now() / 1000);
        
        if (!paused && endTime.toNumber() > currentTime) {
            html += `<p style="color: var(--success-color);"><i class="fas fa-check-circle"></i> Voting period is active</p>`;
        } else {
            html += `<p style="color: var(--danger-color);"><i class="fas fa-times-circle"></i> Voting period is not active</p>`;
            allMet = false;
        }
        
        if (requirements) {
            requirements.innerHTML = html;
            requirements.style.display = 'block';
        }
        
        // Update vote button state
        const voteButton = document.getElementById('voteButton');
        if (voteButton) {
            if (allMet) {
                voteButton.disabled = false;
                voteButton.innerHTML = '<i class="fas fa-vote-yea"></i> Submit Vote';
                showNotification('All voting requirements met! You can vote now.', 'success');
            } else {
                voteButton.disabled = true;
                voteButton.innerHTML = '<i class="fas fa-ban"></i> Requirements Not Met';
            }
        }
        
    } catch (error) {
        console.error('Error checking eligibility:', error);
        showNotification('Error checking voting eligibility', 'error');
    }
}

// Vote function
async function vote() {
    const candidateName = document.getElementById('voteName').value.trim();
    const statusElement = document.getElementById('voteStatusNotification');
    
    if (!candidateName) {
        showNotification('Please enter a candidate name', 'error');
        return;
    }
    
    if (!WALLET_CONNECTED) {
        showNotification('Please connect wallet first', 'error');
        return;
    }
    
    // Validate requirements
    if (userTokenBalance < 1) {
        showNotification(`Insufficient tokens. You need at least 1 token to vote. You have ${userTokenBalance} tokens.`, 'error');
        return;
    }
    
    if (tokenAllowance < 1) {
        showNotification(`Insufficient token allowance. You need to approve at least 1 token for voting. Current allowance: ${tokenAllowance}`, 'error');
        showSection('tokens');
        return;
    }
    
    if (hasVoted) {
        showNotification('You have already voted. Each address can only vote once.', 'error');
        return;
    }
    
    try {
        const contract = getContract(true);
        
        if (statusElement) {
            statusElement.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Voting... (Confirm in MetaMask)';
            statusElement.className = 'notification';
            statusElement.style.display = 'block';
        }
        
        const tx = await contract.vote(candidateName);
        await tx.wait();
        
        if (statusElement) {
            statusElement.innerHTML = '<i class="fas fa-check-circle"></i> Vote successful!';
            statusElement.className = 'notification success';
            statusElement.style.display = 'block';
            
            setTimeout(() => {
                statusElement.style.display = 'none';
            }, 5000);
        }
        
        document.getElementById('voteName').value = '';
        hasVoted = true;
        
        // Refresh data
        getAllCandidates();
        drawVoteChart();
        updateDashboardData();
        
        showNotification('Vote submitted successfully!', 'success');
        
    } catch (error) {
        console.error("Vote error:", error);
        
        if (statusElement) {
            statusElement.innerHTML = `<i class="fas fa-times-circle"></i> Error: ${error.reason || error.message}`;
            statusElement.className = 'notification error';
            statusElement.style.display = 'block';
        }
        
        showNotification('Error submitting vote: ' + error.message, 'error');
    }
}

// Check token allowance
async function checkTokenAllowance() {
    if (!WALLET_CONNECTED) {
        showNotification('Please connect your wallet first', 'error');
        return;
    }
    
    try {
        const contract = getContract();
        const allowance = await contract.allowance(WALLET_CONNECTED, contractAddress);
        tokenAllowance = parseFloat(ethers.utils.formatUnits(allowance, 0));
        
        updateTokenDisplay();
        showNotification(`Token allowance: ${tokenAllowance} tokens`, 'success');
        
    } catch (error) {
        console.error('Error checking allowance:', error);
        showNotification('Error checking token allowance', 'error');
    }
}

// Approve tokens for voting
async function approveTokens() {
    if (!WALLET_CONNECTED) {
        showNotification('Please connect your wallet first', 'error');
        return;
    }
    
    try {
        const contract = getContract(true);
        const notification = document.getElementById('approveStatusNotification');
        
        if (notification) {
            notification.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Approving tokens... (Confirm in MetaMask)';
            notification.className = 'notification';
            notification.style.display = 'block';
        }
        
        // Approve 1 token for voting
        const tx = await contract.approve(contractAddress, ethers.BigNumber.from("1"));
        await tx.wait();
        
        // Update allowance
        const newAllowance = await contract.allowance(WALLET_CONNECTED, contractAddress);
        tokenAllowance = parseFloat(ethers.utils.formatUnits(newAllowance, 0));
        
        if (notification) {
            notification.innerHTML = '<i class="fas fa-check-circle"></i> Successfully approved 1 token for voting!';
            notification.className = 'notification success';
            
            setTimeout(() => {
                notification.style.display = 'none';
            }, 5000);
        }
        
        updateTokenDisplay();
        showNotification('Tokens approved successfully!', 'success');
        
    } catch (error) {
        console.error('Error approving tokens:', error);
        
        const notification = document.getElementById('approveStatusNotification');
        if (notification) {
            notification.innerHTML = `<i class="fas fa-times-circle"></i> Error: ${error.message}`;
            notification.className = 'notification error';
            notification.style.display = 'block';
        }
        
        showNotification('Error approving tokens', 'error');
    }
}

// Set approve amount
function setApproveAmount(amount) {
    const amountInput = document.getElementById('approveTokenAmount');
    if (amountInput) {
        amountInput.value = amount;
    }
}

// Refresh all token information
async function refreshTokenInfo() {
    if (!WALLET_CONNECTED) {
        showNotification('Please connect your wallet first', 'error');
        return;
    }
    
    try {
        await loadTokenInfo();
        showNotification('Token information refreshed', 'success');
    } catch (error) {
        console.error('Error refreshing token info:', error);
        showNotification('Error refreshing token information', 'error');
    }
}

// Add candidate (admin only)
async function addCandidate(event) {
    event.preventDefault();
    const name = document.getElementById("candidateName").value.trim();
    const status = document.getElementById("statusMessage");

    if (!name) {
        showNotification("Please enter candidate name", "error");
        return;
    }

    try {
        const contract = getContract(true);
        if (status) status.innerHTML = "⏳ Adding candidate...";
        
        const tx = await contract.addCandidate(name);
        await tx.wait();
        
        if (status) status.innerHTML = "✅ Candidate added successfully!";
        document.getElementById("candidateName").value = "";
        getAllCandidates();
        updateDashboardData();
        
        showNotification('Candidate added successfully!', 'success');
    } catch (error) {
        console.error("Add candidate error:", error);
        if (status) status.innerHTML = "❌ Error: " + (error.reason || error.message);
        showNotification('Error adding candidate: ' + error.message, 'error');
    }
}

// Disable candidate (admin only)
async function disableCandidate(event) {
    event.preventDefault();
    const id = document.getElementById("disableId").value.trim();
    const status = document.getElementById("statusMessage");

    if (!id) {
        showNotification("Please enter candidate ID", "error");
        return;
    }

    try {
        const contract = getContract(true);
        if (status) status.innerHTML = "⏳ Disabling candidate...";
        
        const tx = await contract.disableCandidate(id);
        await tx.wait();
        
        if (status) status.innerHTML = "✅ Candidate disabled!";
        document.getElementById("disableId").value = "";
        getAllCandidates();
        updateDashboardData();
        
        showNotification('Candidate disabled successfully!', 'success');
    } catch (error) {
        console.error("Disable candidate error:", error);
        if (status) status.innerHTML = "❌ Error: " + (error.reason || error.message);
        showNotification('Error disabling candidate: ' + error.message, 'error');
    }
}

// Get all candidates
async function getAllCandidates() {
    const tableBody = document.querySelector("#myTable tbody");
    const status = document.getElementById("p3");

    if (!tableBody) return;

    try {
        tableBody.innerHTML = "<tr><td colspan='4'>Loading...</td></tr>";
        const contract = getContract();
        
        const candidates = await contract.getCandidates();
        
        if (candidates.length === 0) {
            tableBody.innerHTML = "<tr><td colspan='4'>No candidates found</td></tr>";
            return;
        }

        tableBody.innerHTML = "";
        candidates.forEach(candidate => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${candidate.id.toString()}</td>
                <td>${candidate.name}</td>
                <td>${candidate.voteCount.toString()}</td>
                <td><span class="status-badge ${candidate.active ? 'status-active' : 'status-inactive'}">${candidate.active ? "Active" : "Disabled"}</span></td>
            `;
            tableBody.appendChild(row);
        });
        
        if (status) status.innerHTML = "Candidates loaded successfully";
        
    } catch (error) {
        console.error("Get candidates error:", error);
        tableBody.innerHTML = "<tr><td colspan='4'>Error loading candidates</td></tr>";
        if (status) status.innerHTML = "Error loading candidates";
    }
}

// Set voting time (admin only)
async function setVotingTime(event) {
    event.preventDefault();
    const startInput = document.getElementById("startTime").value;
    const endInput = document.getElementById("endTime").value;
    const status = document.getElementById("statusMessage");

    if (!startInput || !endInput) {
        showNotification("Please enter both start and end times", "error");
        return;
    }

    const start = Math.floor(new Date(startInput).getTime() / 1000);
    const end = Math.floor(new Date(endInput).getTime() / 1000);

    if (end <= start) {
        showNotification("End time must be after start time", "error");
        return;
    }

    try {
        const contract = getContract(true);
        if (status) status.innerHTML = "⏳ Setting voting time...";
        
        const tx = await contract.setVotingTime(start, end);
        await tx.wait();
        
        if (status) status.innerHTML = "✅ Voting time set!";
        displayRemainingTime();
        updateDashboardData();
        
        showNotification('Voting time updated successfully!', 'success');
    } catch (error) {
        console.error("Set voting time error:", error);
        if (status) status.innerHTML = "❌ Error: " + (error.reason || error.message);
        showNotification('Error setting voting time: ' + error.message, 'error');
    }
}

// Display remaining time
async function displayRemainingTime() {
    const daysElement = document.getElementById("days");
    const hoursElement = document.getElementById("hours");
    const minutesElement = document.getElementById("minutes");
    const secondsElement = document.getElementById("seconds");
    const countdownStatus = document.getElementById("countdownStatus");

    if (!daysElement || !hoursElement || !minutesElement || !secondsElement) return;

    try {
        const contract = getContract();
        const endTime = await contract.endTime();
        const startTime = await contract.startTime();
        const currentTime = Math.floor(Date.now() / 1000);

        if (currentTime < startTime) {
            daysElement.textContent = "00";
            hoursElement.textContent = "00";
            minutesElement.textContent = "00";
            secondsElement.textContent = "00";
            if (countdownStatus) countdownStatus.textContent = "Voting not started yet";
            return;
        }

        if (currentTime > endTime) {
            daysElement.textContent = "00";
            hoursElement.textContent = "00";
            minutesElement.textContent = "00";
            secondsElement.textContent = "00";
            if (countdownStatus) countdownStatus.textContent = "Voting ended";
            return;
        }

        let remaining = endTime - currentTime;
        const updateTimer = () => {
            if (remaining <= 0) {
                daysElement.textContent = "00";
                hoursElement.textContent = "00";
                minutesElement.textContent = "00";
                secondsElement.textContent = "00";
                if (countdownStatus) countdownStatus.textContent = "Voting ended";
                return;
            }

            const days = Math.floor(remaining / 86400);
            const hours = Math.floor((remaining % 86400) / 3600);
            const minutes = Math.floor((remaining % 3600) / 60);
            const seconds = remaining % 60;

            daysElement.textContent = days.toString().padStart(2, '0');
            hoursElement.textContent = hours.toString().padStart(2, '0');
            minutesElement.textContent = minutes.toString().padStart(2, '0');
            secondsElement.textContent = seconds.toString().padStart(2, '0');
            
            remaining--;
            
            if (countdownStatus) {
                countdownStatus.textContent = `⏰ ${days}d ${hours}h ${minutes}m ${seconds}s remaining`;
            }
        };

        updateTimer();
        setInterval(updateTimer, 1000);
    } catch (error) {
        console.error("Timer error:", error);
        if (countdownStatus) countdownStatus.textContent = "Error loading timer";
    }
}

// Get winner
async function getWinner() {
    const winnerContent = document.getElementById("winnerContent");
    const winnerInfo = document.getElementById("winnerInfo");

    if (!winnerContent) return;

    try {
        const contract = getContract();
        const [winner, votes] = await contract.getWinner();
        
        if (winner === "") {
            winnerContent.innerHTML = "<p style='color: var(--text-muted);'>No winner yet or election not ended</p>";
        } else {
            winnerContent.innerHTML = `
                <h3 style="color: var(--primary-color); margin-bottom: 10px;">🏆 Current Winner</h3>
                <p style="font-size: 24px; font-weight: bold; margin-bottom: 5px;">${winner}</p>
                <p style="color: var(--text-muted);">with ${votes.toString()} votes</p>
            `;
        }
        
        if (winnerInfo) winnerInfo.style.display = 'block';
        
    } catch (error) {
        console.error("Get winner error:", error);
        winnerContent.innerHTML = "<p style='color: var(--danger-color);'>Error getting winner</p>";
        if (winnerInfo) winnerInfo.style.display = 'block';
    }
}

// Draw vote chart
async function drawVoteChart() {
    const canvas = document.getElementById("voteChart");
    const chartStatus = document.getElementById("chartStatus");

    if (!canvas) return;

    const ctx = canvas.getContext('2d');

    try {
        const contract = getContract();
        const candidates = await contract.getCandidates();
        
        const names = candidates.map(c => c.name);
        const votes = candidates.map(c => parseInt(c.voteCount));
        const colors = votes.map((_, i) => 
            `hsl(${(i * 360 / candidates.length)}, 70%, 60%)`
        );

        // Destroy previous chart if exists
        if (voteChartInstance) {
            voteChartInstance.destroy();
        }

        voteChartInstance = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: names,
                datasets: [{
                    label: 'Votes',
                    data: votes,
                    backgroundColor: colors,
                    borderColor: colors.map(c => c.replace('60%)', '40%)')),
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        display: false
                    },
                    title: {
                        display: true,
                        text: 'Voting Results'
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            stepSize: 1
                        }
                    }
                }
            }
        });

        if (chartStatus) chartStatus.innerHTML = "Chart updated successfully";
    } catch (error) {
        console.error("Chart error:", error);
        if (chartStatus) chartStatus.innerHTML = "Error loading chart";
    }
}

// Reset election (admin only)
async function resetElection() {
    if (!WALLET_CONNECTED) {
        showNotification('Please connect your wallet first', 'error');
        return;
    }
    
    if (!confirm("Are you sure you want to reset the election? This will clear all votes and reset candidates!")) {
        return;
    }
    
    try {
        const contract = getContract(true);
        showNotification('Resetting election...', 'info');
        
        const tx = await contract.resetElection();
        await tx.wait();
        
        showNotification('Election reset successfully!', 'success');
        
        // Refresh all data
        getAllCandidates();
        drawVoteChart();
        updateDashboardData();
        loadTokenInfo();
        
    } catch (error) {
        console.error("Reset election error:", error);
        showNotification('Error resetting election: ' + error.message, 'error');
    }
}

// Withdraw tokens (admin only)
async function withdrawTokens() {
    if (!WALLET_CONNECTED) {
        showNotification('Please connect your wallet first', 'error');
        return;
    }
    
    try {
        const contract = getContract(true);
        showNotification('Withdrawing tokens...', 'info');
        
        // Get contract balance
        const contractBalance = await contract.balanceOf(contractAddress);
        
        if (contractBalance.isZero()) {
            showNotification('No tokens to withdraw', 'warning');
            return;
        }
        
        const tx = await contract.withdrawToken(contractBalance);
        await tx.wait();
        
        showNotification(`Successfully withdrew ${ethers.utils.formatUnits(contractBalance, 0)} tokens`, 'success');
        
    } catch (error) {
        console.error("Withdraw tokens error:", error);
        showNotification('Error withdrawing tokens: ' + error.message, 'error');
    }
}

// Pause/resume voting (admin only)
async function pause(status) {
    if (!WALLET_CONNECTED) {
        showNotification('Please connect your wallet first', 'error');
        return;
    }
    
    try {
        const contract = getContract(true);
        
        if (status) {
            showNotification('Pausing voting...', 'info');
        } else {
            showNotification('Resuming voting...', 'info');
        }
        
        const tx = await contract.pause(status);
        await tx.wait();
        
        if (status) {
            showNotification('Voting paused successfully', 'success');
        } else {
            showNotification('Voting resumed successfully', 'success');
        }
        
        updateDashboardData();
        
    } catch (error) {
        console.error("Pause voting error:", error);
        showNotification('Error: ' + error.message, 'error');
    }
}

// Update dashboard data
async function updateDashboardData() {
    if (!WALLET_CONNECTED) return;
    
    try {
        const contract = getContract();
        
        const candidates = await contract.getCandidates();
        const totalVotes = candidates.reduce((sum, cand) => sum + parseInt(cand.voteCount), 0);
        
        const totalCandidatesElement = document.getElementById('totalCandidates');
        const totalVotesElement = document.getElementById('totalVotes');
        const votingStatusTextElement = document.getElementById('votingStatusText');
        
        if (totalCandidatesElement) totalCandidatesElement.textContent = candidates.length;
        if (totalVotesElement) totalVotesElement.textContent = totalVotes;
        
        // Get voting status
        const paused = await contract.paused();
        const endTime = await contract.endTime();
        const currentTime = Math.floor(Date.now() / 1000);
        
        if (votingStatusTextElement) {
            if (paused) {
                votingStatusTextElement.textContent = 'Paused';
                votingStatusTextElement.style.color = 'var(--warning-color)';
            } else if (endTime.toNumber() > currentTime) {
                votingStatusTextElement.textContent = 'Active';
                votingStatusTextElement.style.color = 'var(--success-color)';
            } else {
                votingStatusTextElement.textContent = 'Ended';
                votingStatusTextElement.style.color = 'var(--danger-color)';
            }
        }
        
    } catch (error) {
        console.error('Error updating dashboard:', error);
    }
}

// Show notification
function showNotification(message, type = 'info') {
    // Create notification element
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
        z-index: 3000;
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
        transform: translateX(150%);
        transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 10);
    
    // Remove after 5 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(150%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 5000);
}

// Show specific section
function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Remove active class from all nav items
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });
    
    // Show selected section
    const section = document.getElementById(sectionId);
    if (section) {
        section.classList.add('active');
    }
    
    // Activate corresponding nav item
    document.querySelectorAll('.nav-item').forEach(item => {
        if (item.textContent.includes(sectionId.charAt(0).toUpperCase() + sectionId.slice(1)) || 
            (sectionId === 'dashboard' && item.querySelector('i.fa-home'))) {
            item.classList.add('active');
        }
    });
    
    // Load section-specific data
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
            updateDashboardData();
            loadTokenInfo();
            break;
    }
}

// Update vote countdown display
function updateVoteCountdown() {
    const updateDisplay = () => {
        const countdownElement = document.getElementById('countdown');
        if (countdownElement && countdownElement.textContent) {
            const timeText = countdownElement.textContent;
            const timeParts = timeText.match(/(\d+)d\s+(\d+)h\s+(\d+)m\s+(\d+)s/);
            if (timeParts) {
                const days = document.getElementById('voteDays');
                const hours = document.getElementById('voteHours');
                const minutes = document.getElementById('voteMinutes');
                const seconds = document.getElementById('voteSeconds');
                
                if (days) days.textContent = timeParts[1].padStart(2, '0');
                if (hours) hours.textContent = timeParts[2].padStart(2, '0');
                if (minutes) minutes.textContent = timeParts[3].padStart(2, '0');
                if (seconds) seconds.textContent = timeParts[4].padStart(2, '0');
            }
        }
    };
    
    updateDisplay();
    setInterval(updateDisplay, 1000);
}