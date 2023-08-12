## Core contract deployment

1. DAORegistry + DAOFactory

The registry should be deployed first, followed by the factory. Use the following script to achieve this:

```shell
forge script ./script/Deploy.s.sol:DeployRegAndFactory -vvv --broadcast --rpc-url optimismGoerli --sig "run()"
```

2. DAO deployment

```shell
forge script ./script/Deploy.s.sol:DeployDAO -vvv --broadcast --rpc-url optimismGoerli --sig "run(address,string,string)" -- <FACTORY_ADDRESS> <NAME> <DESCRIPTION>
```

3. AddMembersToDao

Set env vars before running.

```shell
forge script ./script/Deploy.s.sol:AddMembersToDAO -vvv --broadcast --rpc-url optimismGoerli --sig "run(address)" -- <DAO>
```

4. CreateDAOProposal

Set env vars before running.

```shell
forge script ./script/Deploy.s.sol:CreateDAOProposal -vvv --broadcast --rpc-url optimismGoerli --sig "run(address)" -- <DAO> <TITLE> <DESCRIPTION>
```

## CCIP

1. To deploy DestinationVoter, and Election with candidates added, run the following script (change network name following `SupportedNetworks` type in [`Helper.sol`](./script/ccip/Helper.sol)):

```shell
forge script ./script/ccip/CrossChainVote.s.sol:DeployDestination -vvv --broadcast --rpc-url optimismGoerli --sig "run(uint8)" -- 1
```

2. To deploy the [`SourceVoter.sol`](./contracts/ccip/SourceVoter.sol) smart contract on the **source blockchain**, run the following script:

For the demo, this will likely need to be deployed on multiple chains. So run the command twice for each chain (eth sep = 0 / mumbai = 3)

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