// app.js - UI Management for QNU StarVote
// This file handles UI interactions and calls functions from main.js

// Global state
let currentAccount = null;
let isOwner = false;

// Update wallet status display
function updateWalletDisplay() {
    const statusDot = document.getElementById('statusDot');
    const statusText = document.getElementById('statusText');
    const walletAddress = document.getElementById('walletAddress');
    
    if (typeof WALLET_CONNECTED !== 'undefined' && WALLET_CONNECTED && 
        WALLET_CONNECTED !== "0x1085B53922A837c3d4482bcF462a36D58189FB6f") {
        currentAccount = WALLET_CONNECTED;
        statusDot.classList.add('connected');
        statusText.textContent = 'Connected';
        walletAddress.textContent = `${WALLET_CONNECTED.substring(0, 6)}...${WALLET_CONNECTED.substring(WALLET_CONNECTED.length - 4)}`;
        walletAddress.style.display = 'inline';
    } else {
        currentAccount = null;
        statusDot.classList.remove('connected');
        statusText.textContent = 'Not Connected';
        walletAddress.style.display = 'none';
    }
}

// Connect wallet wrapper function
async function connectWallet() {
    try {
        await connectMetamask();
        updateWalletDisplay();
        updateDashboardData();
        showNotification('Wallet connected successfully!', 'success');
    } catch (error) {
        console.error('Error connecting wallet:', error);
        showNotification('Failed to connect wallet', 'error');
    }
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
            if (typeof getAllCandidates === 'function') {
                getAllCandidates();
            }
            break;
        case 'results':
            if (typeof drawVoteChart === 'function') {
                drawVoteChart();
            }
            break;
        case 'vote':
            updateVoteCountdown();
            break;
        case 'dashboard':
            updateDashboardData();
            break;
    }
}

// Update dashboard data
async function updateDashboardData() {
    if (!currentAccount) return;
    
    try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const contract = new ethers.Contract(contractAddress, contractAbi, provider);
        
        const candidates = await contract.getCandidates();
        const totalVotes = candidates.reduce((sum, cand) => sum + parseInt(cand.voteCount), 0);
        
        document.getElementById('totalCandidates').textContent = candidates.length;
        document.getElementById('totalVotes').textContent = totalVotes;
        
        // Get voting status
        const paused = await contract.paused();
        const endTime = await contract.endTime();
        const currentTime = Math.floor(Date.now() / 1000);
        
        const statusText = document.getElementById('votingStatusText');
        if (paused) {
            statusText.textContent = 'Paused';
            statusText.style.color = 'var(--warning-color)';
        } else if (endTime.toNumber() > currentTime) {
            statusText.textContent = 'Active';
            statusText.style.color = 'var(--success-color)';
        } else {
            statusText.textContent = 'Ended';
            statusText.style.color = 'var(--danger-color)';
        }
        
        // Get voters count
        const voters = await contract.getVoters();
        document.getElementById('voterCount').textContent = voters.length;
        
    } catch (error) {
        console.error('Error updating dashboard:', error);
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
    // Update every second
    setInterval(updateDisplay, 1000);
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
        border-radius: var(--border-radius);
        background: ${type === 'success' ? 'var(--success-color)' : 
                   type === 'error' ? 'var(--danger-color)' : 
                   'var(--info-color)'};
        color: white;
        font-weight: 500;
        z-index: 3000;
        box-shadow: var(--box-shadow);
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

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Check if wallet is already connected
    if (typeof window.ethereum !== 'undefined') {
        window.ethereum.request({ method: 'eth_accounts' })
            .then(accounts => {
                if (accounts.length > 0) {
                    WALLET_CONNECTED = accounts[0];
                    updateWalletDisplay();
                    updateDashboardData();
                }
            })
            .catch(console.error);
    }
    
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
    
    // Start countdown timers
    if (typeof displayRemainingTime === 'function') {
        displayRemainingTime();
    }
    updateVoteCountdown();
    
    // Listen for account changes
    if (window.ethereum) {
        window.ethereum.on('accountsChanged', (accounts) => {
            if (accounts.length > 0) {
                WALLET_CONNECTED = accounts[0];
            } else {
                WALLET_CONNECTED = null;
            }
            updateWalletDisplay();
            updateDashboardData();
        });
        
        window.ethereum.on('chainChanged', () => {
            window.location.reload();
        });
    }
    
    // Check owner status
    checkOwnerStatus();
});

// Check if connected account is the contract owner
async function checkOwnerStatus() {
    if (!currentAccount) return;
    
    try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const contract = new ethers.Contract(contractAddress, contractAbi, provider);
        const owner = await contract.owner();
        isOwner = (owner.toLowerCase() === currentAccount.toLowerCase());
        
        // Update UI to show/hide owner-only features
        document.querySelectorAll('.badge.owner').forEach(badge => {
            badge.style.display = isOwner ? 'inline-block' : 'none';
        });
        
    } catch (error) {
        console.error('Error checking owner status:', error);
    }
}

// Make functions available globally for onclick handlers
window.connectWallet = connectWallet;
window.showSection = showSection;
window.showNotification = showNotification;