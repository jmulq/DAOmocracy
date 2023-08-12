//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "forge-std/console.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "../worldcoin/WorldIDVerifier.sol";
import {IWorldID} from "../worldcoin/interfaces/IWorldID.sol";

contract Election is Ownable, WorldIDVerifier {
    bool public isVotingOpen = false;

    struct Candidate {
        string name;
        string party;
        string description;
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
    ) WorldIDVerifier(worldId, appId, actionId) Ownable() {}

    function openVoting() public onlyOwner {
        isVotingOpen = true;
    }

    function endVoting() public onlyOwner {
        isVotingOpen = false;
    }

    function addCandidate(
        string memory _name,
        string memory _party,
        string memory _description
    ) public onlyOwner {
        candidates[candidatesCount] = Candidate(_name, _party, _description, 0);
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
        _verifyWorldId(signal, root, nullifierHash, proof);
        require(!voters[voter], "You have already voted");
        require(candidateId <= candidatesCount, "Invalid candidate");

        voters[voter] = true;
        candidates[candidateId].voteCount++;

        emit VoteCast(voter, candidateId);
    }
}
