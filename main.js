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

// Kết nối Metamask
async function connectMetamask() {
  if (window.ethereum) {
    try {
      const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
      WALLET_CONNECTED = accounts[0];
      document.getElementById("metamasknotification").innerHTML = "Wallet connected: " + WALLET_CONNECTED;
    } catch (error) {
      console.error(error);
    }
  } else {
    alert("Metamask not found");
  }
}

// Thêm candidate (owner only)
async function addCandidate(event) {
  event.preventDefault();
  const name = document.getElementById("candidateName").value.trim();
  const status = document.getElementById("p3");

  if (!name) return alert("Enter candidate name");

  try {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, contractAbi, signer);

    status.innerHTML = "Adding candidate...";
    const tx = await contract.addCandidate(name);
    await tx.wait();
    status.innerHTML = "Candidate added!";
    getAllCandidates();
  } catch (error) {
    console.error(error);
    status.innerHTML = "Error adding candidate (owner only?)";
  }
}

// Disable candidate (owner only)
async function disableCandidate(event) {
  event.preventDefault();
  const id = document.getElementById("disableId").value.trim();
  const status = document.getElementById("p3");

  if (!id) return alert("Enter candidate ID");

  try {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, contractAbi, signer);

    status.innerHTML = "Disabling candidate...";
    const tx = await contract.disableCandidate(id);
    await tx.wait();
    status.innerHTML = "Candidate disabled!";
    getAllCandidates();
  } catch (error) {
    console.error(error);
    status.innerHTML = "Error disabling candidate (owner only?)";
  }
}

// Lấy list candidates và hiển thị table
async function getAllCandidates() {
  const tableBody = document.querySelector("#myTable tbody");
  tableBody.innerHTML = "";
  const status = document.getElementById("p3");

  try {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const contract = new ethers.Contract(contractAddress, contractAbi, provider);

    status.innerHTML = "Loading candidates...";
    const candidates = await contract.getCandidates();

    candidates.forEach((cand, index) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${cand.id}</td>
        <td>${cand.name}</td>
        <td>${cand.voteCount}</td>
        <td>${cand.active ? "Active" : "Disabled"}</td>
      `;
      tableBody.appendChild(row);
    });
    status.innerHTML = "Candidates loaded!";
  } catch (error) {
    console.error(error);
    status.innerHTML = "Error loading candidates";
  }
}

// Vote (by name)
async function addVote() {
  const name = document.getElementById("voteName").value.trim();
  const status = document.getElementById("cand");

  if (!name) return alert("Enter candidate name");

  try {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, contractAbi, signer);

    status.innerHTML = "Voting...";
    const tx = await contract.vote(name);
    await tx.wait();
    status.innerHTML = "Voted successfully!";
    getAllCandidates();
  } catch (error) {
    console.error(error);
    status.innerHTML = "Error voting (check time/paused/approved?)";
  }
}

// Set voting time (owner only, unix timestamp)
async function resetVotingTime(event) {
  event.preventDefault();
  const startInput = document.getElementById("startTime").value;
  const endInput = document.getElementById("endTime").value;
  const status = document.getElementById("p3");

  const start = Math.floor(new Date(startInput).getTime() / 1000);
  const end = Math.floor(new Date(endInput).getTime() / 1000);

  if (end <= start) return alert("End time must be after start");

  try {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, contractAbi, signer);

    status.innerHTML = "Setting time...";
    const tx = await contract.setVotingTime(start, end);
    await tx.wait();
    status.innerHTML = "Time set!";
    displayRemainingTime();
  } catch (error) {
    console.error(error);
    status.innerHTML = "Error setting time (owner only?)";
  }
}

// Hiển thị countdown
async function displayRemainingTime() {
  const countdownElement = document.getElementById("countdown");

  try {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const contract = new ethers.Contract(contractAddress, contractAbi, provider);

    const endTime = await contract.endTime();
    const currentTime = Math.floor(Date.now() / 1000);
    let remainingSeconds = endTime - currentTime;

    const updateCountdown = () => {
      if (remainingSeconds <= 0) {
        countdownElement.innerHTML = "Voting ended!";
        return;
      }
      const days = Math.floor(remainingSeconds / 86400);
      const hours = Math.floor((remainingSeconds % 86400) / 3600);
      const minutes = Math.floor((remainingSeconds % 3600) / 60);
      const seconds = remainingSeconds % 60;
      countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
      remainingSeconds--;
    };

    updateCountdown();
    setInterval(updateCountdown, 1000);
  } catch (error) {
    console.error(error);
    countdownElement.innerHTML = "Error loading countdown";
  }
}

// Get winner
async function showWinner() {
  const winnerInfo = document.getElementById("winnerInfo");

  try {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const contract = new ethers.Contract(contractAddress, contractAbi, provider);

    const [winner, votes] = await contract.getWinner();
    winnerInfo.innerHTML = `Winner: ${winner} with ${votes} votes`;
  } catch (error) {
    console.error(error);
    winnerInfo.innerHTML = "Error getting winner";
  }
}

// Draw chart
async function drawVoteChart() {
  const ctx = document.getElementById("voteChart").getContext("2d");
  const status = document.getElementById("chartStatus");

  try {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const contract = new ethers.Contract(contractAddress, contractAbi, provider);

    const candidates = await contract.getCandidates();
    const names = candidates.map(c => c.name);
    const votes = candidates.map(c => parseInt(c.voteCount));

    if (window.voteChartInstance) window.voteChartInstance.destroy();

    window.voteChartInstance = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: names,
        datasets: [{
          label: 'Votes',
          data: votes,
          backgroundColor: 'rgba(75, 192, 192, 0.5)',
        }]
      },
      options: { responsive: true }
    });
    status.innerHTML = "Chart loaded!";
  } catch (error) {
    console.error(error);
    status.innerHTML = "Error loading chart";
  }
}

// Get voters (for ListVoters.html)
async function getAllVoters() {
  const tableBody = document.querySelector("#votersTable tbody"); // Giả sử có table id="votersTable"
  try {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const contract = new ethers.Contract(contractAddress, contractAbi, provider);

    const voters = await contract.getVoters();

    voters.forEach((voter, index) => {
      const row = document.createElement("tr");
      row.innerHTML = `<td>${index + 1}</td><td>${voter}</td>`;
      tableBody.appendChild(row);
    });
  } catch (error) {
    console.error(error);
  }
}

// Reset election (owner only)
async function resetElection() {
  try {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, contractAbi, signer);

    const tx = await contract.resetElection();
    await tx.wait();
    alert("Election reset!");
  } catch (error) {
    console.error(error);
    alert("Error resetting (owner only?)");
  }
}

// Withdraw tokens (owner only)
async function withdrawTokens() {
  const amount = prompt("Enter amount to withdraw");
  if (!amount) return;

  try {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, contractAbi, signer);

    const tx = await contract.withdrawToken(amount);
    await tx.wait();
    alert("Withdrawn!");
  } catch (error) {
    console.error(error);
    alert("Error withdrawing (owner only?)");
  }
}

// Pause (owner only)
async function togglePause(status) {
  try {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, contractAbi, signer);

    const tx = await contract.pause(status);
    await tx.wait();
    alert(`Pause set to ${status}`);
  } catch (error) {
    console.error(error);
    alert("Error pausing (owner only?)");
  }
}

// Approve tokens for voting (owner only)
async function approveTokens() {
  const status = document.getElementById("approveStatus");
  if (!WALLET_CONNECTED) return alert("Connect wallet first!");

  try {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, contractAbi, signer);

    status.innerHTML = "Approving 11 tokens... (Confirm in MetaMask)";

    // Approve 11 tokens (maxVoters = 11)
    const amount = ethers.BigNumber.from(11);
    const tx = await contract.approve(contractAddress, amount); // spender = contract itself
    await tx.wait();

    status.innerHTML = "✅ Approved 11 tokens! Now voting works.";
  } catch (error) {
    console.error(error);
    if (error.message.includes("Only owner")) {
      status.innerHTML = "❌ Only owner can approve!";
    } else {
      status.innerHTML = "❌ Error approving. Check if you are owner.";
    }
  }
}

// Load on page
window.onload = () => {
  displayRemainingTime();
  drawVoteChart();
  // Gọi getAllVoters() nếu trên ListVoters.html
};