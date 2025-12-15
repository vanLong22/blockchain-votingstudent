const { ethers, run } = require("hardhat");
require("dotenv").config();

async function main() {
  console.log("Bắt đầu deploy VotingExtended contract...\n");

  // Không cần parameters nữa
  console.log("Deploying without initial candidates/voters (defaults in constructor)...");

  const VotingExtended = await ethers.getContractFactory("VotingExtended");
  const voting = await VotingExtended.deploy();

  await voting.waitForDeployment();
  const contractAddress = await voting.getAddress();

  console.log("DEPLOY THÀNH CÔNG!");
  console.log(`Contract address: ${contractAddress}`);
  console.log(`Etherscan: https://sepolia.etherscan.io/address/${contractAddress}`);

  // TỰ ĐỘNG VERIFY TRÊN ETHERSCAN
  console.log("\nĐang verify contract trên Etherscan... (chờ ~30s)");

  try {
    await run("verify:verify", {
      address: contractAddress,
      constructorArguments: [], // Không có args
    });
    console.log("VERIFY THÀNH CÔNG! Contract đã được xác minh");
    console.log(`Link: https://sepolia.etherscan.io/address/${contractAddress}#code`);
  } catch (error) {
    if (error.message.toLowerCase().includes("already verified")) {
      console.log("Contract đã được verify trước đó rồi!");
    } else {
      console.warn("Verify tự động thất bại (vẫn bình thường trên Sepolia):");
      console.warn("Bạn có thể verify thủ công sau tại: https://sepolia.etherscan.io/verifyContract");
    }
  }

  console.log("\nHOÀN TẤT! Copy contractAddress vào main.js và triển khai web.");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error("\nDEPLOY THẤT BẠI:");
    console.error(error);
    process.exit(1);
  });