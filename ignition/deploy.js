// const { ethers } = require("hardhat");

// async function main() {
//   const Voting = await ethers.getContractFactory("Voting");
  
//   const candidateNames = ["Nguyen Van A", "Tran Thi B", "Le Van C"];
//   const durationInMinutes = 5;

//   // Deploy contract
//   const voting = await Voting.deploy(candidateNames, durationInMinutes, 1000);
//   await voting.waitForDeployment(); // Chờ deploy hoàn tất

//   // Lấy địa chỉ contract
//   const contractAddress = await voting.getAddress();
//   console.log("✅ Voting contract deployed to:", contractAddress);
// }

// main().catch((error) => {
//   console.error("❌ Deployment failed:", error);
//   process.exitCode = 1;
// });

const { ethers } = require("hardhat");
const pool = require("D:/2022-2026/HOC KI 7/BLOCK CHAIN/votingstudents/db");

async function main() {
  // 🔹 Lấy danh sách ứng viên từ MySQL
  const [rows] = await pool.query("SELECT name FROM candidates");
  const candidateNames = rows.map(row => row.name);

  if (candidateNames.length === 0) {
    console.error("⚠️ No candidates found in database!");
    process.exit(1);
  }

  const Voting = await ethers.getContractFactory("Voting");
  const durationInMinutes = 10080;

  // 🔹 Deploy contract
  console.log("🚀 Deploying contract with candidates:", candidateNames);
  const voting = await Voting.deploy(candidateNames, durationInMinutes, 1000);
  await voting.waitForDeployment();

  // 🔹 Hiển thị địa chỉ contract
  const contractAddress = await voting.getAddress();
  console.log("✅ Voting contract deployed to:", contractAddress);
}

main().catch((error) => {
  console.error("❌ Deployment failed:", error);
  process.exitCode = 1;
});
