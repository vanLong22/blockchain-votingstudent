require('dotenv').config();
const express = require('express');
const app = express();
const fileUpload = require('express-fileupload');
const cors = require("cors");
const pool = require("./db"); // file kết nối MySQL như đã hướng dẫn

app.use(cors());
app.use(express.json());

app.use(
    fileUpload({
        extended:true
    })
)
app.use(express.static(__dirname));
app.use(express.json());
const path = require("path");
const ethers = require('ethers');

var port = 3000;

const API_URL = process.env.ALCHEMY_API_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;

const {abi} = require('./artifacts/contracts/Voting.sol/Voting.json');


const provider = new ethers.JsonRpcProvider(API_URL);
const signer = new ethers.Wallet(PRIVATE_KEY, provider);
const contractInstance = new ethers.Contract(CONTRACT_ADDRESS, abi, signer);


app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
})

app.get("/index.html", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
})

// 🧠 API thêm ứng viên vào MySQL
app.post("/api/candidates", async (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ error: "Thiếu tên ứng viên!" });
  }

  try {
    const [result] = await pool.query(
      "INSERT INTO candidates (name) VALUES (?)",
      [name]
    );
    res.json({ success: true, id: result.insertId, name });
  } catch (error) {
    console.error("Lỗi lưu ứng viên vào DB:", error);
    res.status(500).json({ error: "Lỗi máy chủ khi lưu ứng viên!" });
  }
})

app.post("/vote", async (req, res) => {
    var vote = req.body.vote;
    const network = await provider.getNetwork();
    if (network.chainId !== 11155111) {
        return res.status(400).send("Server is not on Sepolia network!");
    }
    const bool = await contractInstance.getVotingStatus();
    if (bool) {
        const tx = await contractInstance.addCandidate(vote);
        await tx.wait();
        res.send("The candidate has been registered in the smart contract");
    } else {
        res.send("Voting is finished");
    }
});

app.listen(port, function () {
    console.log("App is listening on port 3000")
});