## CCIP

1. To deploy DestinationVoter, and Election with candidates added, run the following script (change network name following `SupportedNetworks` type in [`Helper.sol`](./script/ccip/Helper.sol)):

```shell
forge script ./script/ccip/CrossChainVote.s.sol:DeployDestination -vvv --broadcast --rpc-url optimismGoerli --sig "run(uint8)" -- 1
```

2. To deploy the [`SourceVoter.sol`](./contracts/ccip/SourceVoter.sol) smart contract on the **source blockchain**, run the following script:


```shell
forge script ./script/ccip/CrossChainVote.s.sol:DeploySource -vvv --broadcast --rpc-url ethereumSepolia --sig "run(uint8)" -- 0
```

3. Fund the [`SourceVoter.sol`](./contracts/ccip/SourceVoter.sol) smart contract with tokens for CCIP fees. Send manually or use one of the following commands (to send 0.1 WETH or 1 LINK):


  ```shell
  cast send <SOURCE_VOTER_ADDRESS> --rpc-url optimismGoerli --private-key=$PRIVATE_KEY --value 0.1ether
  ```

  ```shell
  cast send <SOURCE_LINK_ADDRESS> "transfer(address,uint256)" <SOURCE_VOTER_ADDRESS> 1000000000000000000 --rpc-url avalancheFuji --private-key=$PRIVATE_KEY
  ```

4. Vote by running the following command:

```shell
forge script ./script/ccip/CrossChainVote.s.sol:Vote -vvv --broadcast --rpc-url polygonMumbai --sig "run(a
ddress,uint8,address,uint8,uint256)" -- <SOURCE_VOTER_ADDRESS> 0 <DESTINATION_VOTER_ADDRESS> 0 <CANDIDATE_ID>
```

5. Once the CCIP (https://ccip.chain.link/) message is finalised on the destination blockchain, you can query the candidates votes on the election contract, using the `cast call` command.

To verify the candidate vote has gone through run the following command (do this before and after it has been finalised on the destination chain to ensure it has actually gone through):

```shell
cast call <ELECTION_ADDRESS> "candidates(uint256)" <CANDIDATE_ID> --rpc-url optimismGoerli
```

6. You can always withdraw tokens for Chainlink CCIP fees from the [`SourceVoter.sol`](./contracts/ccip/SourceVoter.sol) smart contract using the `cast send` command.

For example, to withdraw tokens previously sent for Chainlink CCIP fees, run:

```shell
cast send <SOURCE_VOTER_ADDRESS> --rpc-url ethereumSepolia --private-key=$PRIVATE_KEY "withdraw(address)" <BENEFICIARY_ADDRESS>
```

or

```shell
cast send <SOURCE_VOTER_ADDRESS> --rpc-url ethereumSepolia --private-key=$PRIVATE_KEY "withdrawToken(address,address)" <BENEFICIARY_ADDRESS> 0x0b9d5D9136855f6FEc3c0993feE6E9CE8a297846
```