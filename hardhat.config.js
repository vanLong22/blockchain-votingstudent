require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-verify");
require("dotenv").config();

module.exports = {
  solidity: {
    version: "0.8.20",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200  // Giảm runs để giảm deployment cost
      },
      viaIR: true
    }
  },
  networks: {
    sepolia: {
      url: process.env.ALCHEMY_API_URL,
      accounts: [process.env.PRIVATE_KEY],
      gas: 8000000,           // Tăng từ 6M lên 8M
      gasPrice: 30000000000,  // 30 Gwei (tăng từ 20)
      timeout: 120000
    }
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY
  },
  sourcify: {
    enabled: false
  },
  // GAS REPORTER (Optional - để xem báo cáo gas)
  gasReporter: {
    enabled: true,
    currency: 'USD',
    coinmarketcap: process.env.COINMARKETCAP_API_KEY || undefined
  }
};