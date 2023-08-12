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
        election.addCandidate("Viktor Kaine", "Nexus Dominance Party", "Vote for Viktor Kaine, a master of strategy and innovation in the realm of data manipulation. With cyber-enhanced intelligence and keen foresight, he's primed to lead with calculated precision. Viktor's augmented neural interfaces underscore his capacity for insightful governance, while glitchy holographic projections mirror his knack for navigating complexity. Dressed in adaptive urban attire, Viktor Kaine exudes enigmatic strength, a candidate who embraces the shadows and artfully shapes a new trajectory for the city.");
        election.addCandidate("Seraphina Reyes", "Unity for Tomorrow Coalition", "Elect Seraphina Reyes, a virtual reality trailblazer who wields data as a force for good. Her decisions are rooted in the intricate web of information, and holographic campaign rallies showcase her visionary leadership. Seraphina's VR headset-style eyewear demonstrates her grasp on the digital realm, while glowing data projections echo her mastery of data-driven decision-making. Through vibrant virtual environments, she immerses herself in the world she envisions, inviting voters to participate in the dawn of a new era of data-guided progress.");
        election.addCandidate("Aurora Sterling", "Futura Progress Alliance", "Cast your vote for Aurora Sterling, a beacon of innovation and a tech-savvy visionary. With a comic book infusion, she symbolizes a new era of politics, one defined by cybernetic policies and virtual governance. Aurora's augmented cyber-eyes exemplify her commitment to progress, while neon-lit enhancements reflect her dedication to lighting the path toward a brighter future. Dynamic poses capture her energy, and her futuristic attire, adorned with glowing accents, signifies her role as a pioneer in navigating a metropolis painted in the vibrant hues of innovation.");
        election.addCandidate("Binary Croak", "Neo-Tech Frogs Collective", "Cast your vote for Binary Croak, an extraordinary candidate who defies convention in pursuit of progress. This digitally-augmented amphibian champions the rights of augmented and non-human entities within our evolving metropolis. With a charismatic demeanor, Binary Croak's neon-lit skin and holographic projections symbolize a commitment to a technologically diverse future. Through the Neo-Tech Frogs Collective, they stand as a beacon for inclusivity, advocating for a city where all voices, regardless of form, are heard and valued.");

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
            "SourceVoter deployed on ",
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
