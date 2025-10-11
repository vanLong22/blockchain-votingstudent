
require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();


module.exports = {
  solidity: "0.8.24",
  networks: {
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/Z7UoL5hSpMabz2Gu8zi3C",
      accounts: ["25f74d459b38e117c346e89917c756bda5004ed5695158c4389c5d7a75b2ce8d"]
    }
  }
};
