/*
This script lists the Farcaster client apps that a Farcaster account has
registered as client apps. Farcaster apps are _account keys_ registered
on-chain, in Optimism. We are using KeyRegistry contract to read the
number and keys of an FID.
*/
import { ethers } from "hardhat";
import loadContractAbi from "./loadContractAbi";

const KEY_REGISTRY_CONTRACT_ADDRESS =
  "0x00000000Fc1237824fb747aBDE0FF18990E59b7e";

enum STATE {
  ADDED = 1,
  REMOVED = 2,
}

async function main() {
  // Can I load the KeyRegistry contract?
  const abi = loadContractAbi("KeyRegistry");

  const [signer] = await ethers.getSigners();

  console.debug("signer", signer.address);

  const keyRegistry = new ethers.Contract(
    KEY_REGISTRY_CONTRACT_ADDRESS,
    abi,
    signer
  );

  const fid = 539381;
  const state: STATE = STATE.ADDED;
  const totalKeys = await keyRegistry.totalKeys(fid, state);

  console.log("totalKeys", totalKeys);

  const keys = await keyRegistry.keysOf(fid, state);
  for (let i = 0; i < totalKeys; i++) {
    console.log(keys[i]);
  }
}

main()
  .then(() => {
    process.exit(0);
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
