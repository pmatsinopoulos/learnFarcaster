import { HardhatUserConfig, vars } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const ALCHEMY_API_KEY = vars.get("ALCHEMY_API_KEY");
const ACCOUNT_PRIVATE_KEY = vars.get("ACCOUNT_PRIVATE_KEY")

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  networks: {
    optimism: {
      url: `https://opt-mainnet.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts: [ACCOUNT_PRIVATE_KEY],
    },
  },
};

export default config;
