import { BigInt, log } from "@graphprotocol/graph-ts";
import {
  Election as ElectionContract,
  CandidateAdded as CandidateAddedEvent,
  VoteCast as VoteCaseEvent,
} from "../generated/Election/Election";
import { Candidate, Election, Voter } from "../generated/schema";

export function handleCandidateAdded(event: CandidateAddedEvent): void {
  // Check if election exists and create if not
  let contract = ElectionContract.bind(event.address);
  let election = Election.load(event.address);
  if (!election) {
    election = new Election(event.address);
    election.votersCount = BigInt.fromI32(0);
  }
  election.candidatesCount = contract.candidatesCount();
  election.save();

  // Create candidate entity
  let candidateId = event.address
    .toHexString()
    .concat("-")
    .concat(event.params.candidateId.toI32().toString());
  let candidate = new Candidate(candidateId);

  // Get candidate contract data
  let candidateData = contract.candidates(event.params.candidateId);
  candidate.name = candidateData.getName();
  candidate.party = candidateData.getParty();
  candidate.votes = candidateData.getVoteCount();
  candidate.election = election.id;
  candidate.save();
}

export function handleVoteCast(event: VoteCaseEvent): void {
  // Check if election exists
  let election = Election.load(event.address);
  if (!election) {
    log.error("Election not found for vote cast event", []);
    return;
  }

  // Update candidate vote count if exists
  let candidateId = event.address
    .toHexString()
    .concat("-")
    .concat(event.params.candidateId.toI32().toString());
  let candidate = Candidate.load(candidateId);
  if (!candidate) {
    log.error("Candidate not found for vote cast event", []);
    return;
  }
  candidate.votes = candidate.votes.plus(BigInt.fromI32(1));
  candidate.save();

  // Update votersCount after vote cast
  election.votersCount.plus(BigInt.fromI32(1));

  // Create voter entity associated with election candidate vote
  let voter = new Voter(event.params.voter);
  voter.election = election.id;
  voter.votedFor = candidate.id;
  voter.save();
}
