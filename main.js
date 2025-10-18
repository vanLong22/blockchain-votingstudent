let WALLET_CONNECTED = "0x1085B53922A837c3d4482bcF462a36D58189FB6f";
let contractAddress = "0xf680a99E71f5497C41Aaeb341604D05B7Bf208C5";
let contractAbi = [
    {
      "inputs": [
        {
          "internalType": "string[]",
          "name": "_candidateNames",
          "type": "string[]"
        },
        {
          "internalType": "uint256",
          "name": "_durationInMinutes",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "initialSupply",
          "type": "uint256"
        }
      ],
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
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "voteCount",
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
      "inputs": [],
      "name": "getAllVotesOfCandidates",
      "outputs": [
        {
          "internalType": "string[]",
          "name": "",
          "type": "string[]"
        },
        {
          "internalType": "uint256[]",
          "name": "",
          "type": "uint256[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getRemainingTime",
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
      "name": "getVotingStatus",
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
          "internalType": "uint256",
          "name": "_candidateIndex",
          "type": "uint256"
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
      "name": "voters",
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
      "name": "votingEnd",
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
      "name": "votingStart",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ];

const connectMetamask = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    try {
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();
        WALLET_CONNECTED = await signer.getAddress(); // Cập nhật biến toàn cục
        const element = document.getElementById("metamasknotification");

        const network = await provider.getNetwork();
        if (network.chainId !== 11155111) {
            await window.ethereum.request({
                method: "wallet_switchEthereumChain",
                params: [{ chainId: "0xaa36a7" }],
            });
            element.innerHTML = "Đã chuyển sang mạng Sepolia.";
        } else {
            element.innerHTML = "MetaMask đã kết nối: " + WALLET_CONNECTED;
        }

        // Gửi địa chỉ ví về backend để lưu vào MySQL
        const response = await fetch("http://localhost:3000/api/saveWallet", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ walletAddress: WALLET_CONNECTED }),
        });

        if (response.ok) {
            console.log("Địa chỉ ví đã được lưu thành công!");
        } else {
            console.error("Lỗi khi lưu địa chỉ ví:", await response.text());
        }

    } catch (error) {
        console.error("Lỗi khi kết nối MetaMask:", error);
        document.getElementById("metamasknotification").innerHTML =
            "Không thể kết nối. Vui lòng chọn mạng Sepolia!";
    }
};
// const addVote = async () => {
//     if (WALLET_CONNECTED) {
//         const provider = new ethers.providers.Web3Provider(window.ethereum);
//         const signer = provider.getSigner();
//         const contractInstance = new ethers.Contract(contractAddress, contractAbi, signer);
//         var cand = document.getElementById("cand");
//         cand.innerHTML = "Please wait, adding a vote in the smart contract";

//         const network = await provider.getNetwork();
//         if (network.chainId !== 11155111) {
//             alert("Please switch to Sepolia Test Network!");
//             return;
//         }

//         const tx = await contractInstance.vote(document.getElementById("voteId").value);
//         await tx.wait();
//         cand.innerHTML = "Vote added !!!";
//     } else {
//         document.getElementById("cand").innerHTML = "Please connect Metamask first";
//     }
// }

const addVote = async () => {
    if (!WALLET_CONNECTED) {
        document.getElementById("cand").innerHTML = "⚠️ Please connect MetaMask first!";
        return;
    }

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contractInstance = new ethers.Contract(contractAddress, contractAbi, signer);
    const cand = document.getElementById("cand");
    const voteId = document.getElementById("voteId").value;

    cand.innerHTML = "⏳ Please wait, processing your vote...";

    const network = await provider.getNetwork();
    if (network.chainId !== 11155111) {
        alert("⚠️ Please switch to Sepolia Test Network!");
        return;
    }

    try {
        // 🧩 Kiểm tra xem người dùng đã vote chưa
        const hasVoted = await contractInstance.voters(WALLET_CONNECTED);
        if (hasVoted) {
            cand.innerHTML = "🚫 You have already voted!";
            return;
        }

        // 🗳 Nếu chưa vote thì cho phép vote
        const tx = await contractInstance.vote(voteId);
        await tx.wait();

        cand.innerHTML = "✅ Vote successfully recorded!";
    } catch (error) {
        console.error("Error while voting:", error);
        cand.innerHTML = "❌ Failed to vote. Check console for details.";
    }
};


async function getCandidates() {
    try {
        const candidates = await contract.getAllVotesOfCandidates();
        console.log(candidates); // Kiểm tra dữ liệu trả về
        // Xử lý dữ liệu để hiển thị lên giao diện (ví dụ: bảng #myTable)
    } catch (error) {
        console.error("Lỗi khi gọi getAllVotesOfCandidates:", error);
    }
}

const voteStatus = async() => {
    if(WALLET_CONNECTED != 0) {
        var status = document.getElementById("status");
        var remainingTime = document.getElementById("time");
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();
        const contractInstance = new ethers.Contract(contractAddress, contractAbi, signer);
        const currentStatus = await contractInstance.getVotingStatus();
        const time = await contractInstance.getRemainingTime();
        console.log(time);
        status.innerHTML = currentStatus == 1 ? "Voting is currently open" : "Voting is finished";
        remainingTime.innerHTML = `Remaining time is ${parseInt(time, 16)} seconds`;
    }
    else {
        var status = document.getElementById("status");
        status.innerHTML = "Please connect metamask first";
    }
}

const getAllCandidates = async () => {
    if (WALLET_CONNECTED !== "") {
        var p3 = document.getElementById("p3");
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();
        const contractInstance = new ethers.Contract(contractAddress, contractAbi, signer);
        p3.innerHTML = "Đang lấy danh sách ứng viên...";
        try {
            var [names, votes] = await contractInstance.getAllVotesOfCandidates();
            var table = document.getElementById("myTable");
            table.innerHTML = "<thead><tr><th>Index</th><th>Candidate name</th><th>Candidate votes</th></tr></thead><tbody></tbody>";
            for (let i = 0; i < names.length; i++) {
                var row = table.getElementsByTagName("tbody")[0].insertRow();
                row.insertCell().innerHTML = i;
                row.insertCell().innerHTML = names[i];
                row.insertCell().innerHTML = votes[i].toString();
            }
            p3.innerHTML = "Danh sách ứng viên đã được cập nhật";
        } catch (error) {
            console.error("Lỗi:", error);
            p3.innerHTML = "Lỗi khi lấy danh sách ứng viên. Xem console để biết chi tiết.";
        }
    } else {
        document.getElementById("p3").innerHTML = "Vui lòng kết nối MetaMask trước!";
    }
};

async function addCandidate(event) {
    event.preventDefault(); // Ngăn form reload lại trang

    const name = document.getElementById("candidateName").value.trim();
    const status = document.getElementById("p3");

    if (!name) {
        alert("Vui lòng nhập tên ứng viên!");
        return;
    }

    if (!window.ethereum) {
        alert("Vui lòng cài đặt MetaMask!");
        return;
    }

    try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();

        const network = await provider.getNetwork();
        if (network.chainId !== 11155111) {
            alert("Vui lòng chuyển sang mạng Sepolia!");
            return;
        }

        const contractInstance = new ethers.Contract(contractAddress, contractAbi, signer);

        status.innerHTML = "⏳ Đang thêm ứng viên vào blockchain...";

        // 1️⃣ Gọi hàm trên smart contract
        const tx = await contractInstance.addCandidate(name);
        await tx.wait();

        // 2️⃣ Sau khi blockchain thêm xong => lưu vào DB
        const response = await fetch("http://localhost:3000/api/candidates", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name }),
        });

        const data = await response.json();
        if (data.success) {
            status.innerHTML = `✅ Ứng viên "${name}" đã được thêm vào blockchain & DB!`;
        } else {
            status.innerHTML = "⚠️ Đã thêm vào blockchain nhưng không lưu được vào DB!";
        }

        // 3️⃣ Xóa nội dung ô nhập và load lại danh sách
        document.getElementById("candidateName").value = "";
        await getAllCandidates();

    } catch (error) {
        console.error("Lỗi khi thêm ứng viên:", error);
        if (error.message.includes("Only owner")) {
            status.innerHTML = "❌ Bạn không có quyền thêm ứng viên (chỉ chủ sở hữu mới được phép).";
        } else {
            status.innerHTML = "❌ Có lỗi xảy ra khi thêm ứng viên. Xem console để biết chi tiết.";
        }
    }
}
/*
// trả về người chiến thắng 
async function showWinner() {
    const winnerInfoElement = document.getElementById("winnerInfo");

    if (!window.ethereum) {
        winnerInfoElement.innerHTML = "⚠️ Please install MetaMask!";
        return;
    }

    try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const contractInstance = new ethers.Contract(contractAddress, contractAbi, provider);

        const currentStatus = await contractInstance.getVotingStatus();
        if (currentStatus) {
            winnerInfoElement.innerHTML = "⏳ Voting is still in progress!";
            return;
        }

        const [winnerName, winnerVotes] = await contractInstance.getWinner();
        winnerInfoElement.innerHTML = `🏆 Winner: ${winnerName} with ${winnerVotes} votes`;
    } catch (error) {
        console.error("Lỗi khi lấy thông tin người chiến thắng:", error);
        winnerInfoElement.innerHTML = "❌ Error fetching winner. Check console for details.";
    }
}
*/


// hiển thị countdown thời gian còn lại mà không cần connect wallet
async function displayRemainingTime() {
    const countdownElement = document.getElementById("countdown");
    const statusElement = document.getElementById("status"); // Optional: Cập nhật status nếu cần

    if (!window.ethereum) {
        countdownElement.innerHTML = "⚠️ Please install MetaMask to view countdown!";
        return;
    }

    try {
        // Sử dụng provider mà không cần connect wallet (không gọi eth_requestAccounts)
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const contractInstance = new ethers.Contract(contractAddress, contractAbi, provider); // Dùng provider cho read-only

        // Lấy remaining time và status từ contract
        let remainingSeconds = parseInt(await contractInstance.getRemainingTime(), 10); // Lấy giây còn lại
        const currentStatus = await contractInstance.getVotingStatus();

        // Cập nhật status nếu cần (tương tự voteStatus)
        if (statusElement) {
            statusElement.innerHTML = currentStatus ? "Voting is currently open" : "Voting is finished";
        }

        // Hàm cập nhật countdown
        function updateCountdown() {
            if (remainingSeconds <= 0) {
                countdownElement.innerHTML = "🛑 Voting has finished!";
                if (statusElement) statusElement.innerHTML = "Voting is finished";
                return;
            }

            const hours = Math.floor(remainingSeconds / 3600);
            const minutes = Math.floor((remainingSeconds % 3600) / 60);
            const seconds = remainingSeconds % 60;

            countdownElement.innerHTML = `Remaining: ${hours}h ${minutes}m ${seconds}s`;
            remainingSeconds--; // Giảm dần mỗi giây
        }

        // Gọi ngay lập tức và setInterval để countdown
        updateCountdown();
        const interval = setInterval(updateCountdown, 1000);

        if (remainingSeconds <= 0) {
            clearInterval(interval);
            if (winnerButton) winnerButton.style.display = "block"; // Hiển thị ngay nếu đã hết thời gian
        }

    } catch (error) {
        console.error("Lỗi khi lấy thời gian countdown:", error);
        countdownElement.innerHTML = "❌ Error loading countdown. Check console.";
    }
}

// Tự động gọi khi trang load
window.onload = function() {
    displayRemainingTime(); // Hiển thị countdown ngay khi truy cập
    // Optional: Gọi các hàm khác nếu cần, ví dụ getAllCandidates() để load danh sách tự động
};