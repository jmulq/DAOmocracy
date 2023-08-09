// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

import { CCIPReceiver } from "@chainlink/contracts-ccip/src/v0.8/ccip/applications/CCIPReceiver.sol";
import { Client } from "@chainlink/contracts-ccip/src/v0.8/ccip/libraries/Client.sol";
import { Election } from "../core/Election.sol";

contract DestinationVoter is CCIPReceiver {
    Election election;

    event VoteCallSuccessfull();

    constructor(address router, address electionAddress) CCIPReceiver(router) {
        election = Election(electionAddress);
    }

    function _ccipReceive(
        Client.Any2EVMMessage memory message
    ) internal override {
        (bool success, ) = address(election).call(message.data);
        require(success);
        emit VoteCallSuccessfull();
    }
}
