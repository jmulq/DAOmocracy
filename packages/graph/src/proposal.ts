import { BigInt, log } from "@graphprotocol/graph-ts";
import { Proposal, ProposalOption } from "../generated/schema";
import {
  ProposalVoteCast as ProposalVoteCastEvent,
  ProposalClosed as ProposalClosedEvent,
} from "../generated/templates/Proposal/Proposal";

export function handleVoteCast(event: ProposalVoteCastEvent): void {
  let optionId = event.address
    .toHexString()
    .concat("-")
    .concat(event.params.optionId.toI32().toString());

  let option = ProposalOption.load(optionId);
  if (!option) {
    log.error("Option not found for vote cast event", [
      event.transaction.hash.toHexString(),
      event.params.optionId.toString(),
    ]);
    return;
  }

  option.voteCount = option.voteCount.plus(BigInt.fromI32(1));
  option.save();
}

export function handleProposalClosed(event: ProposalClosedEvent): void {
  let proposal = Proposal.load(event.address);
  if (!proposal) {
    log.error("Proposal not found for closed event", [
      event.transaction.hash.toHexString(),
      event.address.toHexString(),
    ]);
    return;
  }
  proposal.proposalState = "Closed";
  proposal.save();
}
