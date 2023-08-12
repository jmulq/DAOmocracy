// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

import { CCIPReceiver } from "@chainlink/contracts-ccip/src/v0.8/ccip/applications/CCIPReceiver.sol";
import { Client } from "@chainlink/contracts-ccip/src/v0.8/ccip/libraries/Client.sol";
import { Election } from "../core/Election.sol";

contract DestinationVoter is CCIPReceiver {
    Election _election;

    event VoteCallSuccessfull();

    constructor(address router, address electionAddress) CCIPReceiver(router) {
        _election = Election(electionAddress);
    }

    function _ccipReceive(
        Client.Any2EVMMessage memory message
    ) internal override {
        (bool success, ) = address(_election).call(message.data);
        require(success);
        emit VoteCallSuccessfull();
    }
}
