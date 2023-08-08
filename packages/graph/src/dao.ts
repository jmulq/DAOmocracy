import {
  MemberAdded as MemberAddedEvent,
  MemberRemoved as MemberRemovedEvent,
  ProposalCreated as ProposalCreatedEvent,
  ProposerAdded as ProposerAddedEvent,
  ProposerRemoved as ProposerRemovedEvent,
} from "../generated/templates/DAO/DAO";
import {
  DAO,
  Member,
  MemberDao,
  Proposer,
  ProposerDao,
  Proposal,
  ProposalOption,
} from "../generated/schema";
import { DAO as DAOContract } from "../generated/templates/DAO/DAO";
import { Proposal as ProposalContract } from "../generated/templates/Proposal/Proposal";
import { Proposal as ProposalTemplate } from "../generated/templates";
import { BigInt, ethereum, store } from "@graphprotocol/graph-ts";

export function handleMemberAdded(event: MemberAddedEvent): void {
  let dao = DAO.load(event.address);
  if (!dao) {
    return;
  }

  let member = Member.load(event.params.member);
  if (!member) {
    // Create Member entity
    member = new Member(event.params.member);
    member.save();
  }

  let memberDaoId = member.id.concat(dao.id);
  let memberDao = MemberDao.load(memberDaoId);

  // Already exists
  if (memberDao !== null) return;

  // Create MemberDao entity
  memberDao = new MemberDao(memberDaoId);
  memberDao.member = member.id;
  memberDao.dao = dao.id;
  memberDao.save();
}

export function handleMemberRemoved(event: MemberRemovedEvent): void {
  let dao = DAO.load(event.address);
  if (!dao) {
    return;
  }

  let member = Member.load(event.params.member);
  // No member to remove
  if (!member) {
    return;
  }

  let memberDaoId = member.id.concat(dao.id);
  let memberDao = MemberDao.load(memberDaoId);
  if (!memberDao) return;

  let daoContract = DAOContract.bind(event.address);
  // TODO: Add member/proposer count to contract        !!DONE!!
  // TODO: check here and then remove relevant entity if === 1;

  if (memberDao) {
    store.remove("MemberDao", memberDaoId.toHexString());
  }
}

export function handleProposerAdded(event: ProposerAddedEvent): void {
  let dao = DAO.load(event.address);
  if (!dao) {
    return;
  }

  let proposer = Proposer.load(event.params.proposer);
  if (!proposer) {
    // Create Member entity
    proposer = new Proposer(event.params.proposer);
    proposer.save();
  }

  let proposerDaoId = proposer.id.concat(dao.id);
  let proposerDao = ProposerDao.load(proposerDaoId);

  // Already exists
  if (proposerDao !== null) return;

  // Create MemberDao entity
  proposerDao = new ProposerDao(proposerDaoId);
  proposerDao.proposer = proposer.id;
  proposerDao.dao = dao.id;
  proposerDao.save();
}

export function handleProposerRemoved(event: ProposerRemovedEvent): void {
  let dao = DAO.load(event.address);
  if (!dao) {
    return;
  }

  let proposer = Proposer.load(event.params.proposer);
  // No member to remove
  if (!proposer) {
    return;
  }

  let proposerDaoId = proposer.id.concat(dao.id);
  let proposerDao = ProposerDao.load(proposerDaoId);
  if (!proposerDao) return;

  let daoContract = DAOContract.bind(event.address);
  // TODO: Add member/proposer count to contract and check here and then remove relevant entity if === 1;

  if (proposerDao) {
    store.remove("ProposerDao", proposerDaoId.toHexString());
  }
}

export function handleProposalCreated(event: ProposalCreatedEvent): void {
    // Verify Proposal entity doesn't already exist
  let proposal = Proposal.load(event.params.proposalAddress);
  if (proposal !== null) return;

  // Create contract instance
  let proposalContract = ProposalContract.bind(event.params.proposalAddress);

  // Create and save Proposal entity
  proposal = new Proposal(event.params.proposalAddress);
  proposal.title = proposalContract.title();
  proposal.description = proposalContract.description();

  let contractState = proposalContract.state();
  if (contractState === 0) {
    proposal.proposalState = "Active";
  } else if (contractState === 1) {
    proposal.proposalState = "Closed";
  }

  let votingType = proposalContract.votingType();
  if (votingType === 0) {
    proposal.votingType = "OneToOne";
  } else if (votingType === 1) {
    proposal.votingType = "Quadratic";
  }
  proposal.dao = event.address;
  proposal.proposer = event.transaction.from;
  proposal.save();


  // Create ProposalOption entities
  let optionsLength = proposalContract.getOptionsLength();

  for (let i = 0; i < optionsLength.toI32(); i++) {
    let optionStruct = proposalContract.options(BigInt.fromI32(i));
    let optionId =  proposal.id
      .toHexString()
      .concat("-")
      .concat(i.toString());

    let proposalOption = new ProposalOption(optionId);
    proposalOption.proposal = proposal.id;
    proposalOption.name = optionStruct.getName();
    proposalOption.description = optionStruct.getDescription();
    proposalOption.voteCount = optionStruct.getVoteCount();
    proposalOption.save();
  }
  
  // Create Proposal template with address of Proposal instance
  ProposalTemplate.create(event.params.proposalAddress);
}
