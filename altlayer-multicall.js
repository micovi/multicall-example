import { Contract, Provider } from 'ethers-multicall';
import { ethers } from 'ethers';

import ERC721 from "@openzeppelin/contracts/build/contracts/ERC721.json" assert { type: "json" };

const tokenAddress = '0xEFfe03fa0e33783646ab4deBB3a4C3BFb66058A5';
const rpcUrl = "https://acadia2-alt-producer-archive-rpc.altresearch.xyz/";

let provider = new ethers.providers.JsonRpcProvider(rpcUrl);

async function call() {

  const ethcallProvider = new Provider(provider);

  await ethcallProvider.init(); // Only required when `chainId` is not provided in the `Provider` constructor

  const contract = new Contract(tokenAddress, ERC721.abi);

  const nameCall = contract.name();
  const symbolCall = contract.symbol();

  console.log(await contract.name());

  const [name, symbol] = await ethcallProvider.all([nameCall, symbolCall]);

  console.log("name:", name.toString());
  console.log("symbol:", symbol.toString());
}

call();