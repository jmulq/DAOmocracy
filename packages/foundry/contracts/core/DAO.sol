// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/AccessControl.sol";
import "./Proposal.sol";

contract DAO is AccessControl {
    bytes32 public constant PROPOSER_ROLE = keccak256("PROPOSER_ROLE");
    bytes32 public constant MEMBER_ROLE = keccak256("MEMBER_ROLE");

    mapping(address => bool) public members;
    mapping(address => bool) public proposers;
    mapping(uint256 => Proposal) public proposals;

    uint256 public membersCount;
    uint256 public propsersCount;
    uint256 public proposalsCount;
    string public name;
    string public description;

    event ProposalCreated(address indexed proposalAddress);
    event MemberAdded(address indexed member);
    event MemberRemoved(address indexed member);
    event ProposerAdded(address indexed proposer);
    event ProposerRemoved(address indexed proposer);

    constructor(
        address _admin,
        string memory _name,
        string memory _description
    ) {
        _setupRole(DEFAULT_ADMIN_ROLE, _admin);
        _setupRole(DEFAULT_ADMIN_ROLE, msg.sender);
        name = _name;
        description = _description;
    }

    function isMember(address _member) public view returns (bool) {
        return members[_member];
    }

    function addMember(address _member) public onlyRole(DEFAULT_ADMIN_ROLE) {
        grantRole(MEMBER_ROLE, _member);
        members[_member] = true;
        membersCount++;
        emit MemberAdded(_member);
    }

    function addProposer(
        address _proposer
    ) public onlyRole(DEFAULT_ADMIN_ROLE) {
        require(isMember(_proposer), "DAO: proposer must be a member");
        grantRole(PROPOSER_ROLE, _proposer);
        proposers[_proposer] = true;
        propsersCount++;
        emit ProposerAdded(_proposer);
    }

    function removeMember(address _member) public onlyRole(DEFAULT_ADMIN_ROLE) {
        revokeRole(MEMBER_ROLE, _member);
        members[_member] = false;
        membersCount--;
        emit MemberRemoved(_member);
    }

    function removeProposer(
        address _proposer
    ) public onlyRole(DEFAULT_ADMIN_ROLE) {
        revokeRole(PROPOSER_ROLE, _proposer);
        proposers[_proposer] = false;
        propsersCount--;
        emit ProposerRemoved(_proposer);
    }

    function createProposal(
        string memory _title,
        string memory _description,
        Proposal.VotingType _votingType,
        string[] memory _optionNames,
        string[] memory _optionDescriptions
    ) public onlyRole(PROPOSER_ROLE) {
        Proposal proposal = new Proposal(
            _title,
            _description,
            _votingType,
            _optionNames,
            _optionDescriptions
        );
        proposals[proposalsCount] = proposal;
        proposalsCount++;
        emit ProposalCreated(address(proposal));
    }

    function voteOnProposal(
        uint256 _proposalId,
        uint256 _optionId
    ) public onlyRole(MEMBER_ROLE) {
        Proposal proposal = proposals[_proposalId];
        proposal.vote(_optionId);
    }

    function closeProposal(
        uint256 _proposalId
    ) public onlyRole(DEFAULT_ADMIN_ROLE) {
        Proposal proposal = proposals[_proposalId];
        proposal.closeProposal();
    }
}
