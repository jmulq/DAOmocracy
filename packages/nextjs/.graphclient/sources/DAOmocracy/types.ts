// @ts-nocheck

import { InContextSdkMethod } from '@graphql-mesh/types';
import { MeshContext } from '@graphql-mesh/runtime';

export namespace DaOmocracyTypes {
  export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigDecimal: any;
  BigInt: any;
  Bytes: any;
  Int8: any;
};

export type BlockChangedFilter = {
  number_gte: Scalars['Int'];
};

export type Block_height = {
  hash?: InputMaybe<Scalars['Bytes']>;
  number?: InputMaybe<Scalars['Int']>;
  number_gte?: InputMaybe<Scalars['Int']>;
};

export type Candidate = {
  id: Scalars['ID'];
  name: Scalars['String'];
  party: Scalars['String'];
  votes: Scalars['BigInt'];
  election: Election;
};

export type Candidate_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  name?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  party?: InputMaybe<Scalars['String']>;
  party_not?: InputMaybe<Scalars['String']>;
  party_gt?: InputMaybe<Scalars['String']>;
  party_lt?: InputMaybe<Scalars['String']>;
  party_gte?: InputMaybe<Scalars['String']>;
  party_lte?: InputMaybe<Scalars['String']>;
  party_in?: InputMaybe<Array<Scalars['String']>>;
  party_not_in?: InputMaybe<Array<Scalars['String']>>;
  party_contains?: InputMaybe<Scalars['String']>;
  party_contains_nocase?: InputMaybe<Scalars['String']>;
  party_not_contains?: InputMaybe<Scalars['String']>;
  party_not_contains_nocase?: InputMaybe<Scalars['String']>;
  party_starts_with?: InputMaybe<Scalars['String']>;
  party_starts_with_nocase?: InputMaybe<Scalars['String']>;
  party_not_starts_with?: InputMaybe<Scalars['String']>;
  party_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  party_ends_with?: InputMaybe<Scalars['String']>;
  party_ends_with_nocase?: InputMaybe<Scalars['String']>;
  party_not_ends_with?: InputMaybe<Scalars['String']>;
  party_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  votes?: InputMaybe<Scalars['BigInt']>;
  votes_not?: InputMaybe<Scalars['BigInt']>;
  votes_gt?: InputMaybe<Scalars['BigInt']>;
  votes_lt?: InputMaybe<Scalars['BigInt']>;
  votes_gte?: InputMaybe<Scalars['BigInt']>;
  votes_lte?: InputMaybe<Scalars['BigInt']>;
  votes_in?: InputMaybe<Array<Scalars['BigInt']>>;
  votes_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  election?: InputMaybe<Scalars['String']>;
  election_not?: InputMaybe<Scalars['String']>;
  election_gt?: InputMaybe<Scalars['String']>;
  election_lt?: InputMaybe<Scalars['String']>;
  election_gte?: InputMaybe<Scalars['String']>;
  election_lte?: InputMaybe<Scalars['String']>;
  election_in?: InputMaybe<Array<Scalars['String']>>;
  election_not_in?: InputMaybe<Array<Scalars['String']>>;
  election_contains?: InputMaybe<Scalars['String']>;
  election_contains_nocase?: InputMaybe<Scalars['String']>;
  election_not_contains?: InputMaybe<Scalars['String']>;
  election_not_contains_nocase?: InputMaybe<Scalars['String']>;
  election_starts_with?: InputMaybe<Scalars['String']>;
  election_starts_with_nocase?: InputMaybe<Scalars['String']>;
  election_not_starts_with?: InputMaybe<Scalars['String']>;
  election_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  election_ends_with?: InputMaybe<Scalars['String']>;
  election_ends_with_nocase?: InputMaybe<Scalars['String']>;
  election_not_ends_with?: InputMaybe<Scalars['String']>;
  election_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  election_?: InputMaybe<Election_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Candidate_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Candidate_filter>>>;
};

export type Candidate_orderBy =
  | 'id'
  | 'name'
  | 'party'
  | 'votes'
  | 'election'
  | 'election__id'
  | 'election__candidatesCount'
  | 'election__votersCount';

export type DAO = {
  id: Scalars['Bytes'];
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  transactionHash: Scalars['Bytes'];
  name: Scalars['String'];
  description: Scalars['String'];
  members?: Maybe<Array<MemberDao>>;
  proposers?: Maybe<Array<ProposerDao>>;
  proposals?: Maybe<Array<Proposal>>;
  daoRegistry?: Maybe<DAORegistry>;
};


export type DAOmembersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MemberDao_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<MemberDao_filter>;
};


export type DAOproposersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ProposerDao_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ProposerDao_filter>;
};


export type DAOproposalsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Proposal_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Proposal_filter>;
};

export type DAOAdded = {
  id: Scalars['Bytes'];
  daoAddress: Scalars['Bytes'];
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  transactionHash: Scalars['Bytes'];
};

export type DAOAdded_filter = {
  id?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_gt?: InputMaybe<Scalars['Bytes']>;
  id_lt?: InputMaybe<Scalars['Bytes']>;
  id_gte?: InputMaybe<Scalars['Bytes']>;
  id_lte?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  daoAddress?: InputMaybe<Scalars['Bytes']>;
  daoAddress_not?: InputMaybe<Scalars['Bytes']>;
  daoAddress_gt?: InputMaybe<Scalars['Bytes']>;
  daoAddress_lt?: InputMaybe<Scalars['Bytes']>;
  daoAddress_gte?: InputMaybe<Scalars['Bytes']>;
  daoAddress_lte?: InputMaybe<Scalars['Bytes']>;
  daoAddress_in?: InputMaybe<Array<Scalars['Bytes']>>;
  daoAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  daoAddress_contains?: InputMaybe<Scalars['Bytes']>;
  daoAddress_not_contains?: InputMaybe<Scalars['Bytes']>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<DAOAdded_filter>>>;
  or?: InputMaybe<Array<InputMaybe<DAOAdded_filter>>>;
};

export type DAOAdded_orderBy =
  | 'id'
  | 'daoAddress'
  | 'blockNumber'
  | 'blockTimestamp'
  | 'transactionHash';

export type DAORegistry = {
  id: Scalars['Bytes'];
  daos: Array<DAO>;
};


export type DAORegistrydaosArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<DAO_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<DAO_filter>;
};

export type DAORegistry_filter = {
  id?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_gt?: InputMaybe<Scalars['Bytes']>;
  id_lt?: InputMaybe<Scalars['Bytes']>;
  id_gte?: InputMaybe<Scalars['Bytes']>;
  id_lte?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  daos_?: InputMaybe<DAO_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<DAORegistry_filter>>>;
  or?: InputMaybe<Array<InputMaybe<DAORegistry_filter>>>;
};

export type DAORegistry_orderBy =
  | 'id'
  | 'daos';

export type DAORemoved = {
  id: Scalars['Bytes'];
  daoAddress: Scalars['Bytes'];
  blockNumber: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  transactionHash: Scalars['Bytes'];
};

export type DAORemoved_filter = {
  id?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_gt?: InputMaybe<Scalars['Bytes']>;
  id_lt?: InputMaybe<Scalars['Bytes']>;
  id_gte?: InputMaybe<Scalars['Bytes']>;
  id_lte?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  daoAddress?: InputMaybe<Scalars['Bytes']>;
  daoAddress_not?: InputMaybe<Scalars['Bytes']>;
  daoAddress_gt?: InputMaybe<Scalars['Bytes']>;
  daoAddress_lt?: InputMaybe<Scalars['Bytes']>;
  daoAddress_gte?: InputMaybe<Scalars['Bytes']>;
  daoAddress_lte?: InputMaybe<Scalars['Bytes']>;
  daoAddress_in?: InputMaybe<Array<Scalars['Bytes']>>;
  daoAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  daoAddress_contains?: InputMaybe<Scalars['Bytes']>;
  daoAddress_not_contains?: InputMaybe<Scalars['Bytes']>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<DAORemoved_filter>>>;
  or?: InputMaybe<Array<InputMaybe<DAORemoved_filter>>>;
};

export type DAORemoved_orderBy =
  | 'id'
  | 'daoAddress'
  | 'blockNumber'
  | 'blockTimestamp'
  | 'transactionHash';

export type DAO_filter = {
  id?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_gt?: InputMaybe<Scalars['Bytes']>;
  id_lt?: InputMaybe<Scalars['Bytes']>;
  id_gte?: InputMaybe<Scalars['Bytes']>;
  id_lte?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  name?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  description_not?: InputMaybe<Scalars['String']>;
  description_gt?: InputMaybe<Scalars['String']>;
  description_lt?: InputMaybe<Scalars['String']>;
  description_gte?: InputMaybe<Scalars['String']>;
  description_lte?: InputMaybe<Scalars['String']>;
  description_in?: InputMaybe<Array<Scalars['String']>>;
  description_not_in?: InputMaybe<Array<Scalars['String']>>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_contains_nocase?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_contains_nocase?: InputMaybe<Scalars['String']>;
  description_starts_with?: InputMaybe<Scalars['String']>;
  description_starts_with_nocase?: InputMaybe<Scalars['String']>;
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  description_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  description_ends_with?: InputMaybe<Scalars['String']>;
  description_ends_with_nocase?: InputMaybe<Scalars['String']>;
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  description_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  members_?: InputMaybe<MemberDao_filter>;
  proposers_?: InputMaybe<ProposerDao_filter>;
  proposals_?: InputMaybe<Proposal_filter>;
  daoRegistry?: InputMaybe<Scalars['String']>;
  daoRegistry_not?: InputMaybe<Scalars['String']>;
  daoRegistry_gt?: InputMaybe<Scalars['String']>;
  daoRegistry_lt?: InputMaybe<Scalars['String']>;
  daoRegistry_gte?: InputMaybe<Scalars['String']>;
  daoRegistry_lte?: InputMaybe<Scalars['String']>;
  daoRegistry_in?: InputMaybe<Array<Scalars['String']>>;
  daoRegistry_not_in?: InputMaybe<Array<Scalars['String']>>;
  daoRegistry_contains?: InputMaybe<Scalars['String']>;
  daoRegistry_contains_nocase?: InputMaybe<Scalars['String']>;
  daoRegistry_not_contains?: InputMaybe<Scalars['String']>;
  daoRegistry_not_contains_nocase?: InputMaybe<Scalars['String']>;
  daoRegistry_starts_with?: InputMaybe<Scalars['String']>;
  daoRegistry_starts_with_nocase?: InputMaybe<Scalars['String']>;
  daoRegistry_not_starts_with?: InputMaybe<Scalars['String']>;
  daoRegistry_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  daoRegistry_ends_with?: InputMaybe<Scalars['String']>;
  daoRegistry_ends_with_nocase?: InputMaybe<Scalars['String']>;
  daoRegistry_not_ends_with?: InputMaybe<Scalars['String']>;
  daoRegistry_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  daoRegistry_?: InputMaybe<DAORegistry_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<DAO_filter>>>;
  or?: InputMaybe<Array<InputMaybe<DAO_filter>>>;
};

export type DAO_orderBy =
  | 'id'
  | 'blockNumber'
  | 'blockTimestamp'
  | 'transactionHash'
  | 'name'
  | 'description'
  | 'members'
  | 'proposers'
  | 'proposals'
  | 'daoRegistry'
  | 'daoRegistry__id';

export type Election = {
  id: Scalars['Bytes'];
  candidates?: Maybe<Array<Candidate>>;
  candidatesCount: Scalars['BigInt'];
  voters?: Maybe<Array<Voter>>;
  votersCount: Scalars['BigInt'];
};


export type ElectioncandidatesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Candidate_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Candidate_filter>;
};


export type ElectionvotersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Voter_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Voter_filter>;
};

export type Election_filter = {
  id?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_gt?: InputMaybe<Scalars['Bytes']>;
  id_lt?: InputMaybe<Scalars['Bytes']>;
  id_gte?: InputMaybe<Scalars['Bytes']>;
  id_lte?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  candidates_?: InputMaybe<Candidate_filter>;
  candidatesCount?: InputMaybe<Scalars['BigInt']>;
  candidatesCount_not?: InputMaybe<Scalars['BigInt']>;
  candidatesCount_gt?: InputMaybe<Scalars['BigInt']>;
  candidatesCount_lt?: InputMaybe<Scalars['BigInt']>;
  candidatesCount_gte?: InputMaybe<Scalars['BigInt']>;
  candidatesCount_lte?: InputMaybe<Scalars['BigInt']>;
  candidatesCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  candidatesCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  voters_?: InputMaybe<Voter_filter>;
  votersCount?: InputMaybe<Scalars['BigInt']>;
  votersCount_not?: InputMaybe<Scalars['BigInt']>;
  votersCount_gt?: InputMaybe<Scalars['BigInt']>;
  votersCount_lt?: InputMaybe<Scalars['BigInt']>;
  votersCount_gte?: InputMaybe<Scalars['BigInt']>;
  votersCount_lte?: InputMaybe<Scalars['BigInt']>;
  votersCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  votersCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Election_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Election_filter>>>;
};

export type Election_orderBy =
  | 'id'
  | 'candidates'
  | 'candidatesCount'
  | 'voters'
  | 'votersCount';

export type Member = {
  id: Scalars['Bytes'];
  daos?: Maybe<Array<MemberDao>>;
};


export type MemberdaosArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MemberDao_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<MemberDao_filter>;
};

export type MemberDao = {
  id: Scalars['Bytes'];
  member: Member;
  dao: DAO;
};

export type MemberDao_filter = {
  id?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_gt?: InputMaybe<Scalars['Bytes']>;
  id_lt?: InputMaybe<Scalars['Bytes']>;
  id_gte?: InputMaybe<Scalars['Bytes']>;
  id_lte?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  member?: InputMaybe<Scalars['String']>;
  member_not?: InputMaybe<Scalars['String']>;
  member_gt?: InputMaybe<Scalars['String']>;
  member_lt?: InputMaybe<Scalars['String']>;
  member_gte?: InputMaybe<Scalars['String']>;
  member_lte?: InputMaybe<Scalars['String']>;
  member_in?: InputMaybe<Array<Scalars['String']>>;
  member_not_in?: InputMaybe<Array<Scalars['String']>>;
  member_contains?: InputMaybe<Scalars['String']>;
  member_contains_nocase?: InputMaybe<Scalars['String']>;
  member_not_contains?: InputMaybe<Scalars['String']>;
  member_not_contains_nocase?: InputMaybe<Scalars['String']>;
  member_starts_with?: InputMaybe<Scalars['String']>;
  member_starts_with_nocase?: InputMaybe<Scalars['String']>;
  member_not_starts_with?: InputMaybe<Scalars['String']>;
  member_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  member_ends_with?: InputMaybe<Scalars['String']>;
  member_ends_with_nocase?: InputMaybe<Scalars['String']>;
  member_not_ends_with?: InputMaybe<Scalars['String']>;
  member_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  member_?: InputMaybe<Member_filter>;
  dao?: InputMaybe<Scalars['String']>;
  dao_not?: InputMaybe<Scalars['String']>;
  dao_gt?: InputMaybe<Scalars['String']>;
  dao_lt?: InputMaybe<Scalars['String']>;
  dao_gte?: InputMaybe<Scalars['String']>;
  dao_lte?: InputMaybe<Scalars['String']>;
  dao_in?: InputMaybe<Array<Scalars['String']>>;
  dao_not_in?: InputMaybe<Array<Scalars['String']>>;
  dao_contains?: InputMaybe<Scalars['String']>;
  dao_contains_nocase?: InputMaybe<Scalars['String']>;
  dao_not_contains?: InputMaybe<Scalars['String']>;
  dao_not_contains_nocase?: InputMaybe<Scalars['String']>;
  dao_starts_with?: InputMaybe<Scalars['String']>;
  dao_starts_with_nocase?: InputMaybe<Scalars['String']>;
  dao_not_starts_with?: InputMaybe<Scalars['String']>;
  dao_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  dao_ends_with?: InputMaybe<Scalars['String']>;
  dao_ends_with_nocase?: InputMaybe<Scalars['String']>;
  dao_not_ends_with?: InputMaybe<Scalars['String']>;
  dao_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  dao_?: InputMaybe<DAO_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<MemberDao_filter>>>;
  or?: InputMaybe<Array<InputMaybe<MemberDao_filter>>>;
};

export type MemberDao_orderBy =
  | 'id'
  | 'member'
  | 'member__id'
  | 'dao'
  | 'dao__id'
  | 'dao__blockNumber'
  | 'dao__blockTimestamp'
  | 'dao__transactionHash'
  | 'dao__name'
  | 'dao__description';

export type Member_filter = {
  id?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_gt?: InputMaybe<Scalars['Bytes']>;
  id_lt?: InputMaybe<Scalars['Bytes']>;
  id_gte?: InputMaybe<Scalars['Bytes']>;
  id_lte?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  daos_?: InputMaybe<MemberDao_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Member_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Member_filter>>>;
};

export type Member_orderBy =
  | 'id'
  | 'daos';

/** Defines the order direction, either ascending or descending */
export type OrderDirection =
  | 'asc'
  | 'desc';

export type Proposal = {
  id: Scalars['Bytes'];
  title: Scalars['String'];
  description: Scalars['String'];
  proposalState: ProposalState;
  votingType: VotingType;
  options: Array<ProposalOption>;
  dao: DAO;
  proposer: Proposer;
};


export type ProposaloptionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ProposalOption_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ProposalOption_filter>;
};

export type ProposalOption = {
  id: Scalars['ID'];
  proposal: Proposal;
  name: Scalars['String'];
  description: Scalars['String'];
  voteCount: Scalars['BigInt'];
};

export type ProposalOption_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  proposal?: InputMaybe<Scalars['String']>;
  proposal_not?: InputMaybe<Scalars['String']>;
  proposal_gt?: InputMaybe<Scalars['String']>;
  proposal_lt?: InputMaybe<Scalars['String']>;
  proposal_gte?: InputMaybe<Scalars['String']>;
  proposal_lte?: InputMaybe<Scalars['String']>;
  proposal_in?: InputMaybe<Array<Scalars['String']>>;
  proposal_not_in?: InputMaybe<Array<Scalars['String']>>;
  proposal_contains?: InputMaybe<Scalars['String']>;
  proposal_contains_nocase?: InputMaybe<Scalars['String']>;
  proposal_not_contains?: InputMaybe<Scalars['String']>;
  proposal_not_contains_nocase?: InputMaybe<Scalars['String']>;
  proposal_starts_with?: InputMaybe<Scalars['String']>;
  proposal_starts_with_nocase?: InputMaybe<Scalars['String']>;
  proposal_not_starts_with?: InputMaybe<Scalars['String']>;
  proposal_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  proposal_ends_with?: InputMaybe<Scalars['String']>;
  proposal_ends_with_nocase?: InputMaybe<Scalars['String']>;
  proposal_not_ends_with?: InputMaybe<Scalars['String']>;
  proposal_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  proposal_?: InputMaybe<Proposal_filter>;
  name?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  description_not?: InputMaybe<Scalars['String']>;
  description_gt?: InputMaybe<Scalars['String']>;
  description_lt?: InputMaybe<Scalars['String']>;
  description_gte?: InputMaybe<Scalars['String']>;
  description_lte?: InputMaybe<Scalars['String']>;
  description_in?: InputMaybe<Array<Scalars['String']>>;
  description_not_in?: InputMaybe<Array<Scalars['String']>>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_contains_nocase?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_contains_nocase?: InputMaybe<Scalars['String']>;
  description_starts_with?: InputMaybe<Scalars['String']>;
  description_starts_with_nocase?: InputMaybe<Scalars['String']>;
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  description_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  description_ends_with?: InputMaybe<Scalars['String']>;
  description_ends_with_nocase?: InputMaybe<Scalars['String']>;
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  description_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  voteCount?: InputMaybe<Scalars['BigInt']>;
  voteCount_not?: InputMaybe<Scalars['BigInt']>;
  voteCount_gt?: InputMaybe<Scalars['BigInt']>;
  voteCount_lt?: InputMaybe<Scalars['BigInt']>;
  voteCount_gte?: InputMaybe<Scalars['BigInt']>;
  voteCount_lte?: InputMaybe<Scalars['BigInt']>;
  voteCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  voteCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ProposalOption_filter>>>;
  or?: InputMaybe<Array<InputMaybe<ProposalOption_filter>>>;
};

export type ProposalOption_orderBy =
  | 'id'
  | 'proposal'
  | 'proposal__id'
  | 'proposal__title'
  | 'proposal__description'
  | 'proposal__proposalState'
  | 'proposal__votingType'
  | 'name'
  | 'description'
  | 'voteCount';

export type ProposalState =
  | 'Active'
  | 'Closed';

export type Proposal_filter = {
  id?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_gt?: InputMaybe<Scalars['Bytes']>;
  id_lt?: InputMaybe<Scalars['Bytes']>;
  id_gte?: InputMaybe<Scalars['Bytes']>;
  id_lte?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  title?: InputMaybe<Scalars['String']>;
  title_not?: InputMaybe<Scalars['String']>;
  title_gt?: InputMaybe<Scalars['String']>;
  title_lt?: InputMaybe<Scalars['String']>;
  title_gte?: InputMaybe<Scalars['String']>;
  title_lte?: InputMaybe<Scalars['String']>;
  title_in?: InputMaybe<Array<Scalars['String']>>;
  title_not_in?: InputMaybe<Array<Scalars['String']>>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_contains_nocase?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_contains_nocase?: InputMaybe<Scalars['String']>;
  title_starts_with?: InputMaybe<Scalars['String']>;
  title_starts_with_nocase?: InputMaybe<Scalars['String']>;
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  title_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  title_ends_with?: InputMaybe<Scalars['String']>;
  title_ends_with_nocase?: InputMaybe<Scalars['String']>;
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  title_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  description_not?: InputMaybe<Scalars['String']>;
  description_gt?: InputMaybe<Scalars['String']>;
  description_lt?: InputMaybe<Scalars['String']>;
  description_gte?: InputMaybe<Scalars['String']>;
  description_lte?: InputMaybe<Scalars['String']>;
  description_in?: InputMaybe<Array<Scalars['String']>>;
  description_not_in?: InputMaybe<Array<Scalars['String']>>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_contains_nocase?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_contains_nocase?: InputMaybe<Scalars['String']>;
  description_starts_with?: InputMaybe<Scalars['String']>;
  description_starts_with_nocase?: InputMaybe<Scalars['String']>;
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  description_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  description_ends_with?: InputMaybe<Scalars['String']>;
  description_ends_with_nocase?: InputMaybe<Scalars['String']>;
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  description_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  proposalState?: InputMaybe<ProposalState>;
  proposalState_not?: InputMaybe<ProposalState>;
  proposalState_in?: InputMaybe<Array<ProposalState>>;
  proposalState_not_in?: InputMaybe<Array<ProposalState>>;
  votingType?: InputMaybe<VotingType>;
  votingType_not?: InputMaybe<VotingType>;
  votingType_in?: InputMaybe<Array<VotingType>>;
  votingType_not_in?: InputMaybe<Array<VotingType>>;
  options_?: InputMaybe<ProposalOption_filter>;
  dao?: InputMaybe<Scalars['String']>;
  dao_not?: InputMaybe<Scalars['String']>;
  dao_gt?: InputMaybe<Scalars['String']>;
  dao_lt?: InputMaybe<Scalars['String']>;
  dao_gte?: InputMaybe<Scalars['String']>;
  dao_lte?: InputMaybe<Scalars['String']>;
  dao_in?: InputMaybe<Array<Scalars['String']>>;
  dao_not_in?: InputMaybe<Array<Scalars['String']>>;
  dao_contains?: InputMaybe<Scalars['String']>;
  dao_contains_nocase?: InputMaybe<Scalars['String']>;
  dao_not_contains?: InputMaybe<Scalars['String']>;
  dao_not_contains_nocase?: InputMaybe<Scalars['String']>;
  dao_starts_with?: InputMaybe<Scalars['String']>;
  dao_starts_with_nocase?: InputMaybe<Scalars['String']>;
  dao_not_starts_with?: InputMaybe<Scalars['String']>;
  dao_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  dao_ends_with?: InputMaybe<Scalars['String']>;
  dao_ends_with_nocase?: InputMaybe<Scalars['String']>;
  dao_not_ends_with?: InputMaybe<Scalars['String']>;
  dao_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  dao_?: InputMaybe<DAO_filter>;
  proposer?: InputMaybe<Scalars['String']>;
  proposer_not?: InputMaybe<Scalars['String']>;
  proposer_gt?: InputMaybe<Scalars['String']>;
  proposer_lt?: InputMaybe<Scalars['String']>;
  proposer_gte?: InputMaybe<Scalars['String']>;
  proposer_lte?: InputMaybe<Scalars['String']>;
  proposer_in?: InputMaybe<Array<Scalars['String']>>;
  proposer_not_in?: InputMaybe<Array<Scalars['String']>>;
  proposer_contains?: InputMaybe<Scalars['String']>;
  proposer_contains_nocase?: InputMaybe<Scalars['String']>;
  proposer_not_contains?: InputMaybe<Scalars['String']>;
  proposer_not_contains_nocase?: InputMaybe<Scalars['String']>;
  proposer_starts_with?: InputMaybe<Scalars['String']>;
  proposer_starts_with_nocase?: InputMaybe<Scalars['String']>;
  proposer_not_starts_with?: InputMaybe<Scalars['String']>;
  proposer_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  proposer_ends_with?: InputMaybe<Scalars['String']>;
  proposer_ends_with_nocase?: InputMaybe<Scalars['String']>;
  proposer_not_ends_with?: InputMaybe<Scalars['String']>;
  proposer_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  proposer_?: InputMaybe<Proposer_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Proposal_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Proposal_filter>>>;
};

export type Proposal_orderBy =
  | 'id'
  | 'title'
  | 'description'
  | 'proposalState'
  | 'votingType'
  | 'options'
  | 'dao'
  | 'dao__id'
  | 'dao__blockNumber'
  | 'dao__blockTimestamp'
  | 'dao__transactionHash'
  | 'dao__name'
  | 'dao__description'
  | 'proposer'
  | 'proposer__id';

export type Proposer = {
  id: Scalars['Bytes'];
  daos?: Maybe<Array<ProposerDao>>;
  proposals: Array<Proposal>;
};


export type ProposerdaosArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ProposerDao_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ProposerDao_filter>;
};


export type ProposerproposalsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Proposal_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Proposal_filter>;
};

export type ProposerDao = {
  id: Scalars['Bytes'];
  proposer: Proposer;
  dao: DAO;
};

export type ProposerDao_filter = {
  id?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_gt?: InputMaybe<Scalars['Bytes']>;
  id_lt?: InputMaybe<Scalars['Bytes']>;
  id_gte?: InputMaybe<Scalars['Bytes']>;
  id_lte?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  proposer?: InputMaybe<Scalars['String']>;
  proposer_not?: InputMaybe<Scalars['String']>;
  proposer_gt?: InputMaybe<Scalars['String']>;
  proposer_lt?: InputMaybe<Scalars['String']>;
  proposer_gte?: InputMaybe<Scalars['String']>;
  proposer_lte?: InputMaybe<Scalars['String']>;
  proposer_in?: InputMaybe<Array<Scalars['String']>>;
  proposer_not_in?: InputMaybe<Array<Scalars['String']>>;
  proposer_contains?: InputMaybe<Scalars['String']>;
  proposer_contains_nocase?: InputMaybe<Scalars['String']>;
  proposer_not_contains?: InputMaybe<Scalars['String']>;
  proposer_not_contains_nocase?: InputMaybe<Scalars['String']>;
  proposer_starts_with?: InputMaybe<Scalars['String']>;
  proposer_starts_with_nocase?: InputMaybe<Scalars['String']>;
  proposer_not_starts_with?: InputMaybe<Scalars['String']>;
  proposer_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  proposer_ends_with?: InputMaybe<Scalars['String']>;
  proposer_ends_with_nocase?: InputMaybe<Scalars['String']>;
  proposer_not_ends_with?: InputMaybe<Scalars['String']>;
  proposer_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  proposer_?: InputMaybe<Proposer_filter>;
  dao?: InputMaybe<Scalars['String']>;
  dao_not?: InputMaybe<Scalars['String']>;
  dao_gt?: InputMaybe<Scalars['String']>;
  dao_lt?: InputMaybe<Scalars['String']>;
  dao_gte?: InputMaybe<Scalars['String']>;
  dao_lte?: InputMaybe<Scalars['String']>;
  dao_in?: InputMaybe<Array<Scalars['String']>>;
  dao_not_in?: InputMaybe<Array<Scalars['String']>>;
  dao_contains?: InputMaybe<Scalars['String']>;
  dao_contains_nocase?: InputMaybe<Scalars['String']>;
  dao_not_contains?: InputMaybe<Scalars['String']>;
  dao_not_contains_nocase?: InputMaybe<Scalars['String']>;
  dao_starts_with?: InputMaybe<Scalars['String']>;
  dao_starts_with_nocase?: InputMaybe<Scalars['String']>;
  dao_not_starts_with?: InputMaybe<Scalars['String']>;
  dao_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  dao_ends_with?: InputMaybe<Scalars['String']>;
  dao_ends_with_nocase?: InputMaybe<Scalars['String']>;
  dao_not_ends_with?: InputMaybe<Scalars['String']>;
  dao_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  dao_?: InputMaybe<DAO_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ProposerDao_filter>>>;
  or?: InputMaybe<Array<InputMaybe<ProposerDao_filter>>>;
};

export type ProposerDao_orderBy =
  | 'id'
  | 'proposer'
  | 'proposer__id'
  | 'dao'
  | 'dao__id'
  | 'dao__blockNumber'
  | 'dao__blockTimestamp'
  | 'dao__transactionHash'
  | 'dao__name'
  | 'dao__description';

export type Proposer_filter = {
  id?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_gt?: InputMaybe<Scalars['Bytes']>;
  id_lt?: InputMaybe<Scalars['Bytes']>;
  id_gte?: InputMaybe<Scalars['Bytes']>;
  id_lte?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  daos_?: InputMaybe<ProposerDao_filter>;
  proposals_?: InputMaybe<Proposal_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Proposer_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Proposer_filter>>>;
};

export type Proposer_orderBy =
  | 'id'
  | 'daos'
  | 'proposals';

export type Query = {
  daoadded?: Maybe<DAOAdded>;
  daoaddeds: Array<DAOAdded>;
  daoremoved?: Maybe<DAORemoved>;
  daoremoveds: Array<DAORemoved>;
  daoregistry?: Maybe<DAORegistry>;
  daoregistries: Array<DAORegistry>;
  election?: Maybe<Election>;
  elections: Array<Election>;
  candidate?: Maybe<Candidate>;
  candidates: Array<Candidate>;
  voter?: Maybe<Voter>;
  voters: Array<Voter>;
  dao?: Maybe<DAO>;
  daos: Array<DAO>;
  member?: Maybe<Member>;
  members: Array<Member>;
  proposer?: Maybe<Proposer>;
  proposers: Array<Proposer>;
  memberDao?: Maybe<MemberDao>;
  memberDaos: Array<MemberDao>;
  proposerDao?: Maybe<ProposerDao>;
  proposerDaos: Array<ProposerDao>;
  proposal?: Maybe<Proposal>;
  proposals: Array<Proposal>;
  proposalOption?: Maybe<ProposalOption>;
  proposalOptions: Array<ProposalOption>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type QuerydaoaddedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerydaoaddedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<DAOAdded_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<DAOAdded_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerydaoremovedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerydaoremovedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<DAORemoved_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<DAORemoved_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerydaoregistryArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerydaoregistriesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<DAORegistry_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<DAORegistry_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryelectionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryelectionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Election_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Election_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerycandidateArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerycandidatesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Candidate_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Candidate_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryvoterArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryvotersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Voter_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Voter_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerydaoArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerydaosArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<DAO_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<DAO_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerymemberArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerymembersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Member_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Member_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryproposerArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryproposersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Proposer_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Proposer_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerymemberDaoArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerymemberDaosArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MemberDao_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<MemberDao_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryproposerDaoArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryproposerDaosArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ProposerDao_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ProposerDao_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryproposalArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryproposalsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Proposal_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Proposal_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryproposalOptionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryproposalOptionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ProposalOption_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ProposalOption_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Query_metaArgs = {
  block?: InputMaybe<Block_height>;
};

export type Subscription = {
  daoadded?: Maybe<DAOAdded>;
  daoaddeds: Array<DAOAdded>;
  daoremoved?: Maybe<DAORemoved>;
  daoremoveds: Array<DAORemoved>;
  daoregistry?: Maybe<DAORegistry>;
  daoregistries: Array<DAORegistry>;
  election?: Maybe<Election>;
  elections: Array<Election>;
  candidate?: Maybe<Candidate>;
  candidates: Array<Candidate>;
  voter?: Maybe<Voter>;
  voters: Array<Voter>;
  dao?: Maybe<DAO>;
  daos: Array<DAO>;
  member?: Maybe<Member>;
  members: Array<Member>;
  proposer?: Maybe<Proposer>;
  proposers: Array<Proposer>;
  memberDao?: Maybe<MemberDao>;
  memberDaos: Array<MemberDao>;
  proposerDao?: Maybe<ProposerDao>;
  proposerDaos: Array<ProposerDao>;
  proposal?: Maybe<Proposal>;
  proposals: Array<Proposal>;
  proposalOption?: Maybe<ProposalOption>;
  proposalOptions: Array<ProposalOption>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type SubscriptiondaoaddedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiondaoaddedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<DAOAdded_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<DAOAdded_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiondaoremovedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiondaoremovedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<DAORemoved_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<DAORemoved_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiondaoregistryArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiondaoregistriesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<DAORegistry_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<DAORegistry_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionelectionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionelectionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Election_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Election_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptioncandidateArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptioncandidatesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Candidate_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Candidate_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionvoterArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionvotersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Voter_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Voter_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiondaoArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiondaosArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<DAO_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<DAO_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionmemberArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionmembersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Member_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Member_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionproposerArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionproposersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Proposer_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Proposer_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionmemberDaoArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionmemberDaosArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MemberDao_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<MemberDao_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionproposerDaoArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionproposerDaosArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ProposerDao_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ProposerDao_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionproposalArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionproposalsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Proposal_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Proposal_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionproposalOptionArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionproposalOptionsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ProposalOption_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ProposalOption_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscription_metaArgs = {
  block?: InputMaybe<Block_height>;
};

export type Voter = {
  id: Scalars['Bytes'];
  election: Election;
  votedFor: Scalars['ID'];
};

export type Voter_filter = {
  id?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_gt?: InputMaybe<Scalars['Bytes']>;
  id_lt?: InputMaybe<Scalars['Bytes']>;
  id_gte?: InputMaybe<Scalars['Bytes']>;
  id_lte?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  election?: InputMaybe<Scalars['String']>;
  election_not?: InputMaybe<Scalars['String']>;
  election_gt?: InputMaybe<Scalars['String']>;
  election_lt?: InputMaybe<Scalars['String']>;
  election_gte?: InputMaybe<Scalars['String']>;
  election_lte?: InputMaybe<Scalars['String']>;
  election_in?: InputMaybe<Array<Scalars['String']>>;
  election_not_in?: InputMaybe<Array<Scalars['String']>>;
  election_contains?: InputMaybe<Scalars['String']>;
  election_contains_nocase?: InputMaybe<Scalars['String']>;
  election_not_contains?: InputMaybe<Scalars['String']>;
  election_not_contains_nocase?: InputMaybe<Scalars['String']>;
  election_starts_with?: InputMaybe<Scalars['String']>;
  election_starts_with_nocase?: InputMaybe<Scalars['String']>;
  election_not_starts_with?: InputMaybe<Scalars['String']>;
  election_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  election_ends_with?: InputMaybe<Scalars['String']>;
  election_ends_with_nocase?: InputMaybe<Scalars['String']>;
  election_not_ends_with?: InputMaybe<Scalars['String']>;
  election_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  election_?: InputMaybe<Election_filter>;
  votedFor?: InputMaybe<Scalars['ID']>;
  votedFor_not?: InputMaybe<Scalars['ID']>;
  votedFor_gt?: InputMaybe<Scalars['ID']>;
  votedFor_lt?: InputMaybe<Scalars['ID']>;
  votedFor_gte?: InputMaybe<Scalars['ID']>;
  votedFor_lte?: InputMaybe<Scalars['ID']>;
  votedFor_in?: InputMaybe<Array<Scalars['ID']>>;
  votedFor_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Voter_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Voter_filter>>>;
};

export type Voter_orderBy =
  | 'id'
  | 'election'
  | 'election__id'
  | 'election__candidatesCount'
  | 'election__votersCount'
  | 'votedFor';

export type VotingType =
  | 'OneToOne'
  | 'Quadratic';

export type _Block_ = {
  /** The hash of the block */
  hash?: Maybe<Scalars['Bytes']>;
  /** The block number */
  number: Scalars['Int'];
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Maybe<Scalars['Int']>;
};

/** The type for the top-level _meta field */
export type _Meta_ = {
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: _Block_;
  /** The deployment ID */
  deployment: Scalars['String'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean'];
};

export type _SubgraphErrorPolicy_ =
  /** Data will be returned even if the subgraph has indexing errors */
  | 'allow'
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  | 'deny';

  export type QuerySdk = {
      /** null **/
  daoadded: InContextSdkMethod<Query['daoadded'], QuerydaoaddedArgs, MeshContext>,
  /** null **/
  daoaddeds: InContextSdkMethod<Query['daoaddeds'], QuerydaoaddedsArgs, MeshContext>,
  /** null **/
  daoremoved: InContextSdkMethod<Query['daoremoved'], QuerydaoremovedArgs, MeshContext>,
  /** null **/
  daoremoveds: InContextSdkMethod<Query['daoremoveds'], QuerydaoremovedsArgs, MeshContext>,
  /** null **/
  daoregistry: InContextSdkMethod<Query['daoregistry'], QuerydaoregistryArgs, MeshContext>,
  /** null **/
  daoregistries: InContextSdkMethod<Query['daoregistries'], QuerydaoregistriesArgs, MeshContext>,
  /** null **/
  election: InContextSdkMethod<Query['election'], QueryelectionArgs, MeshContext>,
  /** null **/
  elections: InContextSdkMethod<Query['elections'], QueryelectionsArgs, MeshContext>,
  /** null **/
  candidate: InContextSdkMethod<Query['candidate'], QuerycandidateArgs, MeshContext>,
  /** null **/
  candidates: InContextSdkMethod<Query['candidates'], QuerycandidatesArgs, MeshContext>,
  /** null **/
  voter: InContextSdkMethod<Query['voter'], QueryvoterArgs, MeshContext>,
  /** null **/
  voters: InContextSdkMethod<Query['voters'], QueryvotersArgs, MeshContext>,
  /** null **/
  dao: InContextSdkMethod<Query['dao'], QuerydaoArgs, MeshContext>,
  /** null **/
  daos: InContextSdkMethod<Query['daos'], QuerydaosArgs, MeshContext>,
  /** null **/
  member: InContextSdkMethod<Query['member'], QuerymemberArgs, MeshContext>,
  /** null **/
  members: InContextSdkMethod<Query['members'], QuerymembersArgs, MeshContext>,
  /** null **/
  proposer: InContextSdkMethod<Query['proposer'], QueryproposerArgs, MeshContext>,
  /** null **/
  proposers: InContextSdkMethod<Query['proposers'], QueryproposersArgs, MeshContext>,
  /** null **/
  memberDao: InContextSdkMethod<Query['memberDao'], QuerymemberDaoArgs, MeshContext>,
  /** null **/
  memberDaos: InContextSdkMethod<Query['memberDaos'], QuerymemberDaosArgs, MeshContext>,
  /** null **/
  proposerDao: InContextSdkMethod<Query['proposerDao'], QueryproposerDaoArgs, MeshContext>,
  /** null **/
  proposerDaos: InContextSdkMethod<Query['proposerDaos'], QueryproposerDaosArgs, MeshContext>,
  /** null **/
  proposal: InContextSdkMethod<Query['proposal'], QueryproposalArgs, MeshContext>,
  /** null **/
  proposals: InContextSdkMethod<Query['proposals'], QueryproposalsArgs, MeshContext>,
  /** null **/
  proposalOption: InContextSdkMethod<Query['proposalOption'], QueryproposalOptionArgs, MeshContext>,
  /** null **/
  proposalOptions: InContextSdkMethod<Query['proposalOptions'], QueryproposalOptionsArgs, MeshContext>,
  /** Access to subgraph metadata **/
  _meta: InContextSdkMethod<Query['_meta'], Query_metaArgs, MeshContext>
  };

  export type MutationSdk = {
    
  };

  export type SubscriptionSdk = {
      /** null **/
  daoadded: InContextSdkMethod<Subscription['daoadded'], SubscriptiondaoaddedArgs, MeshContext>,
  /** null **/
  daoaddeds: InContextSdkMethod<Subscription['daoaddeds'], SubscriptiondaoaddedsArgs, MeshContext>,
  /** null **/
  daoremoved: InContextSdkMethod<Subscription['daoremoved'], SubscriptiondaoremovedArgs, MeshContext>,
  /** null **/
  daoremoveds: InContextSdkMethod<Subscription['daoremoveds'], SubscriptiondaoremovedsArgs, MeshContext>,
  /** null **/
  daoregistry: InContextSdkMethod<Subscription['daoregistry'], SubscriptiondaoregistryArgs, MeshContext>,
  /** null **/
  daoregistries: InContextSdkMethod<Subscription['daoregistries'], SubscriptiondaoregistriesArgs, MeshContext>,
  /** null **/
  election: InContextSdkMethod<Subscription['election'], SubscriptionelectionArgs, MeshContext>,
  /** null **/
  elections: InContextSdkMethod<Subscription['elections'], SubscriptionelectionsArgs, MeshContext>,
  /** null **/
  candidate: InContextSdkMethod<Subscription['candidate'], SubscriptioncandidateArgs, MeshContext>,
  /** null **/
  candidates: InContextSdkMethod<Subscription['candidates'], SubscriptioncandidatesArgs, MeshContext>,
  /** null **/
  voter: InContextSdkMethod<Subscription['voter'], SubscriptionvoterArgs, MeshContext>,
  /** null **/
  voters: InContextSdkMethod<Subscription['voters'], SubscriptionvotersArgs, MeshContext>,
  /** null **/
  dao: InContextSdkMethod<Subscription['dao'], SubscriptiondaoArgs, MeshContext>,
  /** null **/
  daos: InContextSdkMethod<Subscription['daos'], SubscriptiondaosArgs, MeshContext>,
  /** null **/
  member: InContextSdkMethod<Subscription['member'], SubscriptionmemberArgs, MeshContext>,
  /** null **/
  members: InContextSdkMethod<Subscription['members'], SubscriptionmembersArgs, MeshContext>,
  /** null **/
  proposer: InContextSdkMethod<Subscription['proposer'], SubscriptionproposerArgs, MeshContext>,
  /** null **/
  proposers: InContextSdkMethod<Subscription['proposers'], SubscriptionproposersArgs, MeshContext>,
  /** null **/
  memberDao: InContextSdkMethod<Subscription['memberDao'], SubscriptionmemberDaoArgs, MeshContext>,
  /** null **/
  memberDaos: InContextSdkMethod<Subscription['memberDaos'], SubscriptionmemberDaosArgs, MeshContext>,
  /** null **/
  proposerDao: InContextSdkMethod<Subscription['proposerDao'], SubscriptionproposerDaoArgs, MeshContext>,
  /** null **/
  proposerDaos: InContextSdkMethod<Subscription['proposerDaos'], SubscriptionproposerDaosArgs, MeshContext>,
  /** null **/
  proposal: InContextSdkMethod<Subscription['proposal'], SubscriptionproposalArgs, MeshContext>,
  /** null **/
  proposals: InContextSdkMethod<Subscription['proposals'], SubscriptionproposalsArgs, MeshContext>,
  /** null **/
  proposalOption: InContextSdkMethod<Subscription['proposalOption'], SubscriptionproposalOptionArgs, MeshContext>,
  /** null **/
  proposalOptions: InContextSdkMethod<Subscription['proposalOptions'], SubscriptionproposalOptionsArgs, MeshContext>,
  /** Access to subgraph metadata **/
  _meta: InContextSdkMethod<Subscription['_meta'], Subscription_metaArgs, MeshContext>
  };

  export type Context = {
      ["DAOmocracy"]: { Query: QuerySdk, Mutation: MutationSdk, Subscription: SubscriptionSdk },
      
    };
}
