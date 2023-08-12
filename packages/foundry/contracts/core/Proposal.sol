// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "../worldcoin/WorldIDVerifier.sol";
import {IWorldID} from "../worldcoin/interfaces/IWorldID.sol";

contract Proposal is WorldIDVerifier {
    enum ProposalState {
        Active,
        Closed
    }
    // TODO - Implement Quadratic Voting
    // enum VotingType {
    //     OneToOne,
    //     Quadratic
    // }

    string public title;
    string public description;
    ProposalState public state;

    // VotingType public votingType;

    struct Option {
        string name;
        string description;
        uint256 voteCount;
    }

    Option[] public options;

    event ProposalVoteCast(address indexed voter, uint256 indexed optionId);
    event ProposalClosed();

    mapping(address => bool) public voters;

    modifier isProposalActive() {
        require(state == ProposalState.Active, "Proposal is not active");
        _;
    }

    constructor(
        string memory _title,
        string memory _description,
        // VotingType _votingType,
        string[] memory _optionNames,
        string[] memory _optionDescriptions,
        IWorldID worldId,
        string memory appId,
        string memory actionId
    ) WorldIDVerifier(worldId, appId, actionId) {
        require(
            _optionNames.length == _optionDescriptions.length,
            "Option names and descriptions must be the same length"
        );
        title = _title;
        description = _description;
        // votingType = _votingType;
        for (uint256 i = 0; i < _optionNames.length; i++) {
            options.push(Option(_optionNames[i], _optionDescriptions[i], 0));
        }
        state = ProposalState.Active;
    }

    function vote(
        uint256 _optionId,
        address signal,
        uint256 root,
        uint256 nullifierHash,
        uint256[8] calldata proof
    ) public isProposalActive {
        _verifyWorldId(signal, root, nullifierHash, proof);

        require(!voters[msg.sender], "You have already voted");
        require(_optionId < options.length, "Invalid option");
        voters[msg.sender] = true;
        options[_optionId].voteCount++;
        emit ProposalVoteCast(msg.sender, _optionId);
    }

    function closeProposal() public isProposalActive {
        state = ProposalState.Closed;
        emit ProposalClosed();
    }

    function getOptionsLength() public view returns (uint256) {
        return options.length;
    }

    function getOptionsBatch(
        uint256 _start,
        uint256 _count
    ) public view returns (Option[] memory) {
        require(_start + _count <= options.length, "Invalid batch size");
        Option[] memory _options = new Option[](_count);
        for (uint256 i = 0; i < _count; i++) {
            _options[i] = options[_start + i];
        }
        return _options;
    }
}
