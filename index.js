require('dotenv').config();
const express = require('express');
const app = express();
const fileUpload = require('express-fileupload');
const cors = require("cors");
const pool = require("./db");
const path = require("path");
const { ethers } = require('ethers');

app.use(cors());
app.use(express.json());
app.use(fileUpload({ extended: true }));
app.use(express.static(__dirname));

const port = 3000;

// 🧠 Thông tin blockchain
const API_URL = process.env.ALCHEMY_API_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;

// 🧩 Nạp ABI của token contract
const { abi } = require('./artifacts/contracts/Voting.sol/Voting.json');

// ⚙️ Kết nối blockchain
const provider = new ethers.JsonRpcProvider(API_URL);
const signer = new ethers.Wallet(PRIVATE_KEY, provider);
const contractInstance = new ethers.Contract(CONTRACT_ADDRESS, abi, signer);

// ---------------------------- ROUTES ----------------------------

// Trang chính
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

// 🧠 API thêm ứng viên
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
});

// Xoá ứng viên theo ID
app.delete("/api/candidates/:id", async (req, res) => {
    const { id } = req.params;

    if (!id) {
        return res.status(400).json({ success: false, message: "Thiếu ID ứng viên!" });
    }

    try {
        const [result] = await pool.query("DELETE FROM candidates WHERE id = ?", [id]);

        if (result.affectedRows === 0) {
            return res.status(404).json({ success: false, message: "Không tìm thấy ứng viên cần xóa!" });
        }

        res.json({ success: true, message: "Xóa ứng viên thành công!" });
    } catch (error) {
        console.error("Lỗi khi xóa ứng viên:", error);
        res.status(500).json({ success: false, message: "Lỗi máy chủ khi xóa ứng viên!" });
    }
});



// 🪙 API lưu ví và gửi token
app.post("/api/saveWallet", async (req, res) => {
    try {
        const { walletAddress } = req.body;

        if (!walletAddress) {
            return res.status(400).json({ success: false, message: "Thiếu địa chỉ ví!" });
        }

        // ✅ Kiểm tra ví đã tồn tại chưa
        const [rows] = await pool.query(
            "SELECT * FROM wallets WHERE wallet_address = ?",
            [walletAddress]
        );

        if (rows.length > 0) {
            const user = rows[0];

            // ⚙️ Nếu chưa nhận token => gửi token ngay
            if (user.tokens_received === 0) {
                console.log("Người dùng đã có ví nhưng chưa nhận token. Đang gửi...");
                const tx = await contractInstance.transfer(walletAddress, ethers.parseUnits("10", 18));
                await tx.wait();

                await pool.query(
                    "UPDATE wallets SET tokens_received = 1 WHERE wallet_address = ?",
                    [walletAddress]
                );

                return res.status(200).json({
                    success: true,
                    message: "Ví đã có trong hệ thống. Token vừa được gửi thành công!",
                    txHash: tx.hash,
                });
            }

            // ⚙️ Nếu đã nhận token rồi
            return res.status(200).json({
                success: true,
                message: "Ví đã tồn tại và đã nhận token trước đó.",
            });
        }


        // ✅ Thêm ví mới
        await pool.query(
            "INSERT INTO wallets (wallet_address, tokens_received) VALUES (?, 0)",
            [walletAddress]
        );

        // ✅ Gửi token (10 token = 10 * 10^18)
        console.log("Đang gửi token đến:", walletAddress);
        const tx = await contractInstance.transfer(
            walletAddress,
            ethers.parseUnits("10", 18)
        );
        await tx.wait();

        console.log("Gửi token thành công! Tx Hash:", tx.hash);

        // ✅ Cập nhật DB
        await pool.query(
            "UPDATE wallets SET tokens_received = 1 WHERE wallet_address = ?",
            [walletAddress]
        );

        res.status(200).json({
            success: true,
            message: "Đã lưu ví và gửi 10 token thành công!",
            txHash: tx.hash,
        });
    } catch (error) {
        console.error("Lỗi khi lưu ví hoặc gửi token:", error);
        res.status(500).json({
            success: false,
            message: "Lỗi khi lưu ví hoặc gửi token.",
            error: error.message,
        });
    }
});

// 🗳️ API bỏ phiếu
app.post("/vote", async (req, res) => {
    try {
        const { vote } = req.body;
        const network = await provider.getNetwork();

        if (network.chainId !== 11155111) {
            return res.status(400).send("Server is not on Sepolia network!");
        }

        const isVotingOpen = await contractInstance.getVotingStatus();
        if (!isVotingOpen) {
            return res.send("Voting is finished");
        }

        const tx = await contractInstance.addCandidate(vote);
        await tx.wait();
        res.send("The candidate has been registered in the smart contract");
    } catch (err) {
        console.error("Lỗi khi bỏ phiếu:", err);
        res.status(500).send("Đã xảy ra lỗi khi bỏ phiếu.");
    }
});

app.listen(port, function () {
    console.log("✅ App is listening on port", port);
});
