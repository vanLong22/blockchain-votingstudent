const { ethers, run } = require("hardhat");
require("dotenv").config();

async function main() {
  console.log("Bắt đầu deploy VotingToken contract...\n");

  // Lấy thông tin gas price hiện tại
  const provider = ethers.provider;
  const feeData = await provider.getFeeData();
  
  console.log("=== THÔNG TIN GAS ===");
  console.log(`Gas Price hiện tại: ${ethers.formatUnits(feeData.gasPrice, "gwei")} Gwei`);
  console.log(`Max Fee Per Gas: ${ethers.formatUnits(feeData.maxFeePerGas, "gwei")} Gwei`);
  console.log(`Max Priority Fee: ${ethers.formatUnits(feeData.maxPriorityFeePerGas, "gwei")} Gwei\n`);

  // Ước tính chi phí trước khi deploy
  const VotingToken = await ethers.getContractFactory("VotingToken");
  
  // Ước tính gas cần thiết
  const deploymentData = VotingToken.getDeployTransaction();
  const estimatedGas = await provider.estimateGas({
    data: deploymentData.data
  });
  
  console.log("=== ƯỚC TÍNH CHI PHÍ ===");
  console.log(`Gas ước tính: ${estimatedGas.toString()}`);
  const estimatedCost = estimatedGas * feeData.gasPrice;
  console.log(`Chi phí ước tính: ${ethers.formatEther(estimatedCost)} ETH`);
  console.log(`Tương đương: ~$${(parseFloat(ethers.formatEther(estimatedCost)) * 2000).toFixed(2)} USD (nếu ETH = $2000)\n`);

  // Hỏi xác nhận (nếu muốn)
  console.log("Deploying with gas limit optimization...");

  // DEPLOY với gas limit
  const voting = await VotingToken.deploy({
    gasLimit: 8000000,  // Tăng lên 8M
    maxFeePerGas: feeData.maxFeePerGas * 2n,  // x2 để đảm bảo
    maxPriorityFeePerGas: feeData.maxPriorityFeePerGas * 2n
  });

  console.log("Đang chờ transaction được confirm...");
  const deployTx = await voting.deploymentTransaction();
  const receipt = await deployTx.wait();
  
  const contractAddress = await voting.getAddress();

  console.log("\n=== DEPLOY THÀNH CÔNG! ===");
  console.log(`Contract address: ${contractAddress}`);
  console.log(`Transaction hash: ${receipt.hash}`);
  console.log(`Gas đã sử dụng: ${receipt.gasUsed.toString()}`);
  console.log(`Gas price thực tế: ${ethers.formatUnits(receipt.gasPrice, "gwei")} Gwei`);
  
  const actualCost = receipt.gasUsed * receipt.gasPrice;
  console.log(`Chi phí thực tế: ${ethers.formatEther(actualCost)} ETH`);
  console.log(`Etherscan: https://sepolia.etherscan.io/address/${contractAddress}\n`);

  // Chờ 30 giây trước khi verify
  console.log("Đang chờ 30 giây trước khi verify trên Etherscan...");
  await new Promise(resolve => setTimeout(resolve, 30000));

  // TỰ ĐỘNG VERIFY TRÊN ETHERSCAN
  console.log("\nĐang verify contract trên Etherscan...");

  try {
    await run("verify:verify", {
      address: contractAddress,
      constructorArguments: [],
    });
    console.log("✅ VERIFY THÀNH CÔNG! Contract đã được xác minh");
    console.log(`📝 Link: https://sepolia.etherscan.io/address/${contractAddress}#code`);
  } catch (error) {
    if (error.message.toLowerCase().includes("already verified")) {
      console.log("ℹ️  Contract đã được verify trước đó rồi!");
    } else {
      console.warn("⚠️  Verify tự động thất bại:");
      console.warn(error.message);
      console.warn("Bạn có thể verify thủ công sau tại: https://sepolia.etherscan.io/verifyContract");
    }
  }

  console.log("\n=== HOÀN TẤT! ===");
  console.log("Copy contractAddress vào main.js và triển khai web.");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error("\n❌ DEPLOY THẤT BẠI:");
    console.error(error);
    process.exit(1);
  });