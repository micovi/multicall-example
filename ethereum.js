import { Contract, Provider } from 'ethers-multicall';
import { ethers } from 'ethers';

import ERC20 from "@openzeppelin/contracts/build/contracts/ERC20.json" assert { type: "json" };

const infuraKey = '60560d1152794725b40e9ae100657e88';
const provider = new ethers.providers.InfuraProvider('mainnet', infuraKey);

const daiAddress = '0x6b175474e89094c44da98b954eedeac495271d0f';

async function call() {
  const ethcallProvider = new Provider(provider);

  await ethcallProvider.init(); // Only required when `chainId` is not provided in the `Provider` constructor

  const daiContract = new Contract(daiAddress, ERC20.abi);

  const uniswapDaiPool = '0x2a1530c4c41db0b0b2bb646cb5eb1a67b7158667';

  const ethBalanceCall = ethcallProvider.getEthBalance(uniswapDaiPool);
  const daiBalanceCall = daiContract.balanceOf(uniswapDaiPool);

  const [ethBalance, daiBalance] = await ethcallProvider.all(
    [ethBalanceCall, daiBalanceCall],
    {} // Call options
  );

  console.log('ETH Balance:', ethBalance.toString());
  console.log('DAI Balance:', daiBalance.toString());
}

call();