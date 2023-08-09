// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

import "forge-std/Script.sol";
import "./Helper.sol";
import {Election} from "../../contracts/core/Election.sol";
import {DestinationVoter} from "../../contracts/ccip/DestinationVoter.sol";
import {SourceVoter} from "../../contracts/ccip/SourceVoter.sol";

contract DeployDestination is Script, Helper {
    function run(SupportedNetworks destination) external {
        uint256 senderPrivateKey = vm.envUint("PRIVATE_KEY");
        vm.startBroadcast(senderPrivateKey);

        (address router, , , ) = getConfigFromNetwork(destination);

        Election election = new Election();

        console.log(
            "Election deployed on ",
            networks[destination],
            "with address: ",
            address(election)
        );

        DestinationVoter destinationVoter = new DestinationVoter(
            router,
            address(election)
        );

        console.log(
            "DestinationVoter deployed on ",
            networks[destination],
            "with address: ",
            address(destinationVoter)
        );

        election.openVoting();
        election.addCandidate("James", "JAM");
        election.addCandidate("David", "DAV");
        election.addCandidate("Vanessa", "VAN");

        console.log("Voting open and candidates added");

        vm.stopBroadcast();
    }
}

contract DeploySource is Script, Helper {
    function run(SupportedNetworks source) external {
        uint256 senderPrivateKey = vm.envUint("PRIVATE_KEY");
        vm.startBroadcast(senderPrivateKey);

        (address router, address link, , ) = getConfigFromNetwork(source);

        SourceVoter sourceVoter = new SourceVoter(router, link);

        console.log(
            "SourceMinter deployed on ",
            networks[source],
            "with address: ",
            address(sourceVoter)
        );

        vm.stopBroadcast();
    }
}

contract Vote is Script, Helper {
    function run(
        address payable sourceVoterAddress,
        SupportedNetworks destination,
        address destinationVoterAddress,
        SourceVoter.PayFeesIn payFeesIn,
        uint256 candidateId
    ) external {
        uint256 senderPrivateKey = vm.envUint("PRIVATE_KEY");
        vm.startBroadcast(senderPrivateKey);

        (, , , uint64 destinationChainId) = getConfigFromNetwork(destination);

        SourceVoter(sourceVoterAddress).vote(
            destinationChainId,
            destinationVoterAddress,
            payFeesIn,
            candidateId
        );

        vm.stopBroadcast();
    }
}
