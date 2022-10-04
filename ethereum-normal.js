import { ethers } from 'ethers';

import ERC20 from "@openzeppelin/contracts/build/contracts/ERC20.json" assert { type: "json" };

const infuraKey = '60560d1152794725b40e9ae100657e88';
const provider = new ethers.providers.InfuraProvider('mainnet', infuraKey);

const daiAddress = '0x6b175474e89094c44da98b954eedeac495271d0f';

async function call() {
  const daiContract = new ethers.Contract(daiAddress, ERC20.abi, provider);

  const uniswapDaiPool = "0x2a1530c4c41db0b0b2bb646cb5eb1a67b7158667";

 console.log(
   "ETH Balance:",
   (await provider.getBalance(uniswapDaiPool)).toString()
 );
  console.log(
    "DAI Balance:",
    (await daiContract.balanceOf(uniswapDaiPool)).toString()
  );
}

call();