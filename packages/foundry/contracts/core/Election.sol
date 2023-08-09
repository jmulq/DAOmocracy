//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "forge-std/console.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "../helpers/ByteHasher.sol";
import "../interfaces/IWorldID.sol";

contract Election is Ownable {
    using ByteHasher for bytes;

    error InvalidNullifier();
    IWorldID internal immutable _worldId;
    uint256 internal immutable _externalNullifier;
    uint256 internal immutable _groupId = 1;
    mapping(uint256 => bool) internal _nullifierHashes;

    bool public isVotingOpen = false;

    struct Candidate {
        string name;
        string party;
        uint256 voteCount;
    }

    mapping(uint256 => Candidate) public candidates;
    mapping(address => bool) public voters;
    uint256 public candidatesCount;

    event VoteCast(address indexed voter, uint256 indexed candidateId);
    event CandidateAdded(uint256 indexed candidateId);
    event ElectionResult(
        uint256 indexed candidateId,
        uint256 indexed voteCount
    );

    modifier isElectionActive() {
        require(isVotingOpen, "Voting is not open");
        _;
    }

    constructor(
        IWorldID worldId,
        string memory appId,
        string memory actionId
    ) Ownable() {
        _worldId = worldId;
        _externalNullifier = abi
            .encodePacked(abi.encodePacked(appId).hashToField(), actionId)
            .hashToField();
    }

    function openVoting() public onlyOwner {
        isVotingOpen = true;
    }

    function endVoting() public onlyOwner {
        isVotingOpen = false;
    }

    function addCandidate(
        string memory _name,
        string memory _party
    ) public onlyOwner {
        candidates[candidatesCount] = Candidate(_name, _party, 0);
        emit CandidateAdded(candidatesCount);
        candidatesCount++;
    }

    function vote(
        address voter,
        uint256 candidateId,
        address signal,
        uint256 root,
        uint256 nullifierHash,
        uint256[8] calldata proof
    ) public isElectionActive {
        // World ID check
        if (_nullifierHashes[nullifierHash]) revert InvalidNullifier();

        // Backup check
        require(!voters[voter], "You have already voted");
        require(candidateId <= candidatesCount, "Invalid candidate");

        _worldId.verifyProof(
            root,
            _groupId,
            abi.encodePacked(signal).hashToField(),
            nullifierHash,
            _externalNullifier,
            proof
        );
        _nullifierHashes[nullifierHash] = true;

        voters[voter] = true;
        candidates[candidateId].voteCount++;

        emit VoteCast(voter, candidateId);
    }
}
