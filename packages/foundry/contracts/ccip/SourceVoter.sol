// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

import { LinkTokenInterface } from "@chainlink/contracts/src/v0.8/interfaces/LinkTokenInterface.sol";
import { IRouterClient } from "@chainlink/contracts-ccip/src/v0.8/ccip/interfaces/IRouterClient.sol";
import { Client } from "@chainlink/contracts-ccip/src/v0.8/ccip/libraries/Client.sol";
import { Withdraw } from "./utils/Withdraw.sol";

contract SourceVoter is Withdraw {
    enum PayFeesIn {
        Native,
        LINK
    }

    address immutable _router;
    address immutable _link;

    event VoteSent(bytes32 messageId, address indexed voter, uint256 indexed candidateId);

    constructor(address router, address link) {
        _router = router;
        _link = link;
    }

    receive() external payable {}

    function vote(
        uint64 destinationChainSelector,
        address receiver,
        PayFeesIn payFeesIn,
        uint256 candidateId
    ) external {
        Client.EVM2AnyMessage memory message = Client.EVM2AnyMessage({
            receiver: abi.encode(receiver),
            data: abi.encodeWithSignature("vote(address,uint256)", msg.sender, candidateId),
            tokenAmounts: new Client.EVMTokenAmount[](0),
            extraArgs: "",
            feeToken: payFeesIn == PayFeesIn.LINK ? _link : address(0)
        });

        uint256 fee = IRouterClient(_router).getFee(
            destinationChainSelector,
            message
        );

        bytes32 messageId;

        if (payFeesIn == PayFeesIn.LINK) {
            LinkTokenInterface(_link).approve(_router, fee);
            messageId = IRouterClient(_router).ccipSend(
                destinationChainSelector,
                message
            );
        } else {
            messageId = IRouterClient(_router).ccipSend{value: fee}(
                destinationChainSelector,
                message
            );
        }

        emit VoteSent(messageId, msg.sender, candidateId);
    }
}
