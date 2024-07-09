import path from "path";
import fs from "fs";

const loadContractAbi = (contractName: string): string => {
  const abiPath = path.join(
    __dirname,
    "..",
    "abis",
    `${contractName}.sol`,
    `${contractName}.json`
  );
  return JSON.parse(fs.readFileSync(abiPath, "utf8"));
};

export default loadContractAbi;
