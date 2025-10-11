const { ethers } = require("hardhat");

async function main() {
  const Voting = await ethers.getContractFactory("Voting");
  
  const candidateNames = ["Nguyen Van A", "Tran Thi B", "Le Van C"];
  const durationInMinutes = 5;

  // Deploy contract
  const voting = await Voting.deploy(candidateNames, durationInMinutes, 1000);
  await voting.waitForDeployment(); // Chờ deploy hoàn tất

  // Lấy địa chỉ contract
  const contractAddress = await voting.getAddress();
  console.log("✅ Voting contract deployed to:", contractAddress);
}

main().catch((error) => {
  console.error("❌ Deployment failed:", error);
  process.exitCode = 1;
});