//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// Useful for debugging. Remove when deploying to a live network.
import "forge-std/console.sol";

import "@openzeppelin/contracts/access/Ownable.sol";

contract Election is Ownable {

    bool isVotingOpen = false;

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
    event ElectionResult(uint256 indexed candidateId, uint256 indexed voteCount);

    modifier isElectionActive() {
        require(isVotingOpen, "Voting is not open");
        _;
    }

    constructor() Ownable() {}

    function openVoting() public onlyOwner {
        isVotingOpen = true;
    }

    function endVoting() public onlyOwner {
        isVotingOpen = false;
    }

    function addCandidate(string memory _name, string memory _party) public onlyOwner {
        candidates[candidatesCount] = Candidate(_name, _party, 0);
        candidatesCount++;
        emit CandidateAdded(candidatesCount);
    }

    function vote(uint256 _candidateId) public isElectionActive {
        require(!voters[msg.sender], "You have already voted");
        require(_candidateId <= candidatesCount, "Invalid candidate");
        voters[msg.sender] = true;
        candidates[_candidateId].voteCount++;
        emit VoteCast(msg.sender, _candidateId);
    }
}
