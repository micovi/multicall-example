# multicall-example

## node ethereum-multicall.js
Calls ethereum chain using multicall method, calling 2 contract functions in one request.

## node ethereum-normal.js
Calls ethereum chain using 2 requests, one for each function. Much slower than multicall requests if there are many functions that need to be called.

## node altlayer-normal.js
Calls altlayer chain with 2 requests for ERC721 contract.

## node altlayer-multicall.js
Throws error.
