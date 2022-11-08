require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-etherscan")
/** @type import('hardhat/config').HardhatUserConfig */

const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  solidity: "0.8.17",
  networks:{
    mumbai:{
      url:process.env.POLYGON_MUMBAI,
      accounts:[process.env.PRIVATE_KEY]
    }
  },
  etherscan:{
    apiKey:process.env.API_KEY
  }

};
