require("@nomiclabs/hardhat-etherscan");
require("@nomicfoundation/hardhat-toolbox");
const dotenv = require("dotenv");
const { task } = require("hardhat/config");
/** @type import('hardhat/config').HardhatUserConfig */

dotenv.config();


task("accounts", "Prints the list of accounts ", async (taskArgs,hre) => {
  const accounts = await hre.ethers.getSigner();

  for(const account of accounts){
    console.log(account.address);
  }
});

module.exports = {
  solidity: "0.8.9",
  networks: {
    rinkeby: {
      url: process.env.REACT_APP_RINKEBY_RPC_URL,
      accounts: [process.env.REACT_APP_PRIVATE_KEY]
    },
  },
  etherscan: {
    apiKey: process.env.REACT_APP_ETHERSCAN_KEY,
  }
};
