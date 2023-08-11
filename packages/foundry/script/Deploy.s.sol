//SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "../contracts/core/Election.sol";
import "../contracts/core/DAORegistry.sol";
import "../contracts/core/DAOFactory.sol";
import "../contracts/core/DAO.sol";
import "../contracts/core/Proposal.sol";
import "forge-std/Script.sol";

contract DeployElection is Script {
    function run() external {
        uint256 senderPrivateKey = vm.envUint("PRIVATE_KEY");
        vm.startBroadcast(senderPrivateKey);

        Election election = new Election();
        console.logString(
            string.concat(
                "Election deployed at: ",
                vm.toString(address(election))
            )
        );

        election.openVoting();
        election.addCandidate("James", "JAM");
        election.addCandidate("David", "DAV");
        election.addCandidate("Vanessa", "VAN");

        console.log("Voting open and candidates added");

        vm.stopBroadcast();
    }
}

contract DeployRegAndFactory is Script {
    function run() external {
        console.logString("hello");
        uint256 senderPrivateKey = vm.envUint("PRIVATE_KEY");
        vm.startBroadcast(senderPrivateKey);

        // Setup dao registry and dao factory
        address admin = vm.addr(senderPrivateKey);
        DAORegistry daoRegistry = new DAORegistry(admin);
        DAOFactory daoFactory = new DAOFactory(address(daoRegistry));
        daoRegistry.addRegistrar(address(daoFactory));

        console.logString(
            string.concat(
                "DAO Registry deployed at: ",
                vm.toString(address(daoRegistry)),
                " and DAO Factory deployed at: ",
                vm.toString(address(daoFactory))
            )
        );
        vm.stopBroadcast();
    }
}

contract DeployDAOs is Script {
    function run(
        address factory,
        string memory name,
        string memory description
    ) external {
        uint256 senderPrivateKey = vm.envUint("PRIVATE_KEY");
        vm.startBroadcast(senderPrivateKey);
        address admin = vm.addr(senderPrivateKey);

        DAOFactory daoFactory = DAOFactory(factory);
        daoFactory.createDAO(admin, name, description);

        vm.stopBroadcast();
    }
}

contract AddMemberToDAO is Script {
    function run(address dao, address member) external {
        uint256 senderPrivateKey = vm.envUint("PRIVATE_KEY");
        vm.startBroadcast(senderPrivateKey);

        DAO daoContract = DAO(dao);
        daoContract.addMember(member);

        vm.stopBroadcast();
    }
}

contract CreateDAOProposal is Script {
    function run(
        address daoAddress,
        string memory title,
        string memory description,
        Proposal.VotingType votingType,
        string[] memory optionNames,
        string[] memory optionDescriptions
    ) external {
        uint256 senderPrivateKey = vm.envUint("PRIVATE_KEY");
        vm.startBroadcast(senderPrivateKey);

        DAO dao = DAO(daoAddress);
        dao.addProposer(vm.addr(senderPrivateKey));
        dao.createProposal(
            title,
            description,
            votingType,
            optionNames,
            optionDescriptions
        );
        vm.stopBroadcast();
    }
}

// registry = 0x116B6099945D6B662e7E7e5cef46f9b2FA5CcdA1
// factory = 0x41Cf70C72fcFFBD1938785A9C1774A3eA4359372

// "Blockchain DAO",
// "Responsible for the legislation, regulation, and funding of blockchain related matters in the UK"

// DAO 1 0x461e22126e9a0E54B7521151e8682F6caAD2895b (BLOCKCHAIN)
// DAO 2 0x1c9fe64Ca70445108579D6d665497d3E64cfc5d8 (AI)
// DAO 3 0x9E03A596595B8231e146F72792558D3E592Eff46 (HEALTH)

// forge script ./script/Deploy.s.sol:AddMemberToDAO -vvv --broadcast --rpc-url optimismGoerli --sig "run(address,address)" -- 0x461e22126e9a0E54B7521151e8682F6caAD2895b 0xef19127CfA164dBCB181c4800f2d0237422c6D19
// forge script ./script/Deploy.s.sol:AddMemberToDAO -vvv --broadcast --rpc-url optimismGoerli --sig "run(address,address)" -- 0x1c9fe64Ca70445108579D6d665497d3E64cfc5d8 0xef19127CfA164dBCB181c4800f2d0237422c6D19
// forge script ./script/Deploy.s.sol:AddMemberToDAO -vvv --broadcast --rpc-url optimismGoerli --sig "run(address,address)" -- 0x9E03A596595B8231e146F72792558D3E592Eff46 0xef19127CfA164dBCB181c4800f2d0237422c6D19

// forge script ./script/Deploy.s.sol:CreateDAOProposal -vvv --broadcast --rpl-url optimismGoerli --sig "run(address,string,string,Proposal.VotingType,string[],string[])" -- "0x461e22126e9a0E54B7521151e8682F6caAD2895b" 