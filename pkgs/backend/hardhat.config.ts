import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomicfoundation/hardhat-ethers";
import * as dotenv from "dotenv";

dotenv.config();

const {
  PRIVATE_KEY,
} = process.env

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.20",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  networks: {
    hardhat: {
      initialDate: "1970-01-01T00:00:00Z",
      accounts: {
        accountsBalance: "1000000000000000000000000000000",
      },
      hardfork: "berlin",
    },
    mumbai: {
      url: "https://rpc.ankr.com/polygon_mumbai",
      accounts: [`0x${PRIVATE_KEY!}`],
    }
  },
  etherscan: {
    apiKey: "S1VXKDQCP4P2VXAK9Q8B46K71TFP9WF692",
  },
};

export default config;
