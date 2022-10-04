import { ethers } from "ethers";

import ERC721 from "@openzeppelin/contracts/build/contracts/ERC721.json" assert { type: "json" };

const tokenAddress = "0xEFfe03fa0e33783646ab4deBB3a4C3BFb66058A5";
const rpcUrl = "https://acadia2-alt-producer-archive-rpc.altresearch.xyz/";

let provider = new ethers.providers.JsonRpcProvider(rpcUrl);

async function call() {
  const contract = new ethers.Contract(tokenAddress, ERC721.abi, provider);

  console.log("name:", await contract.name());
  console.log("symbol:", await contract.symbol());
}

call();
