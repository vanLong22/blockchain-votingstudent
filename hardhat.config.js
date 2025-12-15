require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: {
    version: "0.8.20",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      },
      viaIR: true
    }
  },
  networks: {
    sepolia: {
      url: process.env.ALCHEMY_API_URL || "https://eth-sepolia.g.alchemy.com/v2/Z7UoL5hSpMabz2Gu8zi3C",
      accounts: [process.env.PRIVATE_KEY || "25f74d459b38e117c346e89917c756bda5004ed5695158c4389c5d7a75b2ce8d"]
    }
  },
  etherscan: {
    apiKey: {
      sepolia: process.env.ETHERSCAN_API_KEY
    }
  }
};