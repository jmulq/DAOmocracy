// @ts-nocheck
import { GraphQLResolveInfo, SelectionSetNode, FieldNode, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import { gql } from '@graphql-mesh/utils';

import type { GetMeshOptions } from '@graphql-mesh/runtime';
import type { YamlConfig } from '@graphql-mesh/types';
import { PubSub } from '@graphql-mesh/utils';
import { DefaultLogger } from '@graphql-mesh/utils';
import MeshCache from "@graphql-mesh/cache-localforage";
import { fetch as fetchFn } from '@whatwg-node/fetch';

import { MeshResolvedSource } from '@graphql-mesh/runtime';
import { MeshTransform, MeshPlugin } from '@graphql-mesh/types';
import GraphqlHandler from "@graphql-mesh/graphql"
import BareMerger from "@graphql-mesh/merger-bare";
import { printWithCache } from '@graphql-mesh/utils';
import { createMeshHTTPHandler, MeshHTTPHandler } from '@graphql-mesh/http';
import { getMesh, ExecuteMeshFn, SubscribeMeshFn, MeshContext as BaseMeshContext, MeshInstance } from '@graphql-mesh/runtime';
import { MeshStore, FsStoreStorageAdapter } from '@graphql-mesh/store';
import { path as pathModule } from '@graphql-mesh/cross-helpers';
import { ImportFn } from '@graphql-mesh/types';
import type { DaOmocracyTypes } from './sources/DAOmocracy/types';
import * as importedModule$0 from "./sources/DAOmocracy/introspectionSchema";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };



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

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string | ((fieldNode: FieldNode) => SelectionSetNode);
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  BigDecimal: ResolverTypeWrapper<Scalars['BigDecimal']>;
  BigInt: ResolverTypeWrapper<Scalars['BigInt']>;
  BlockChangedFilter: BlockChangedFilter;
  Block_height: Block_height;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Bytes: ResolverTypeWrapper<Scalars['Bytes']>;
  Candidate: ResolverTypeWrapper<Candidate>;
  Candidate_filter: Candidate_filter;
  Candidate_orderBy: Candidate_orderBy;
  DAO: ResolverTypeWrapper<DAO>;
  DAOAdded: ResolverTypeWrapper<DAOAdded>;
  DAOAdded_filter: DAOAdded_filter;
  DAOAdded_orderBy: DAOAdded_orderBy;
  DAORegistry: ResolverTypeWrapper<DAORegistry>;
  DAORegistry_filter: DAORegistry_filter;
  DAORegistry_orderBy: DAORegistry_orderBy;
  DAORemoved: ResolverTypeWrapper<DAORemoved>;
  DAORemoved_filter: DAORemoved_filter;
  DAORemoved_orderBy: DAORemoved_orderBy;
  DAO_filter: DAO_filter;
  DAO_orderBy: DAO_orderBy;
  Election: ResolverTypeWrapper<Election>;
  Election_filter: Election_filter;
  Election_orderBy: Election_orderBy;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Int8: ResolverTypeWrapper<Scalars['Int8']>;
  Member: ResolverTypeWrapper<Member>;
  MemberDao: ResolverTypeWrapper<MemberDao>;
  MemberDao_filter: MemberDao_filter;
  MemberDao_orderBy: MemberDao_orderBy;
  Member_filter: Member_filter;
  Member_orderBy: Member_orderBy;
  OrderDirection: OrderDirection;
  Proposal: ResolverTypeWrapper<Proposal>;
  ProposalOption: ResolverTypeWrapper<ProposalOption>;
  ProposalOption_filter: ProposalOption_filter;
  ProposalOption_orderBy: ProposalOption_orderBy;
  ProposalState: ProposalState;
  Proposal_filter: Proposal_filter;
  Proposal_orderBy: Proposal_orderBy;
  Proposer: ResolverTypeWrapper<Proposer>;
  ProposerDao: ResolverTypeWrapper<ProposerDao>;
  ProposerDao_filter: ProposerDao_filter;
  ProposerDao_orderBy: ProposerDao_orderBy;
  Proposer_filter: Proposer_filter;
  Proposer_orderBy: Proposer_orderBy;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Subscription: ResolverTypeWrapper<{}>;
  Voter: ResolverTypeWrapper<Voter>;
  Voter_filter: Voter_filter;
  Voter_orderBy: Voter_orderBy;
  VotingType: VotingType;
  _Block_: ResolverTypeWrapper<_Block_>;
  _Meta_: ResolverTypeWrapper<_Meta_>;
  _SubgraphErrorPolicy_: _SubgraphErrorPolicy_;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  BigDecimal: Scalars['BigDecimal'];
  BigInt: Scalars['BigInt'];
  BlockChangedFilter: BlockChangedFilter;
  Block_height: Block_height;
  Boolean: Scalars['Boolean'];
  Bytes: Scalars['Bytes'];
  Candidate: Candidate;
  Candidate_filter: Candidate_filter;
  DAO: DAO;
  DAOAdded: DAOAdded;
  DAOAdded_filter: DAOAdded_filter;
  DAORegistry: DAORegistry;
  DAORegistry_filter: DAORegistry_filter;
  DAORemoved: DAORemoved;
  DAORemoved_filter: DAORemoved_filter;
  DAO_filter: DAO_filter;
  Election: Election;
  Election_filter: Election_filter;
  Float: Scalars['Float'];
  ID: Scalars['ID'];
  Int: Scalars['Int'];
  Int8: Scalars['Int8'];
  Member: Member;
  MemberDao: MemberDao;
  MemberDao_filter: MemberDao_filter;
  Member_filter: Member_filter;
  Proposal: Proposal;
  ProposalOption: ProposalOption;
  ProposalOption_filter: ProposalOption_filter;
  Proposal_filter: Proposal_filter;
  Proposer: Proposer;
  ProposerDao: ProposerDao;
  ProposerDao_filter: ProposerDao_filter;
  Proposer_filter: Proposer_filter;
  Query: {};
  String: Scalars['String'];
  Subscription: {};
  Voter: Voter;
  Voter_filter: Voter_filter;
  _Block_: _Block_;
  _Meta_: _Meta_;
}>;

export type entityDirectiveArgs = { };

export type entityDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = entityDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type subgraphIdDirectiveArgs = {
  id: Scalars['String'];
};

export type subgraphIdDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = subgraphIdDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type derivedFromDirectiveArgs = {
  field: Scalars['String'];
};

export type derivedFromDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = derivedFromDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export interface BigDecimalScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigDecimal'], any> {
  name: 'BigDecimal';
}

export interface BigIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigInt'], any> {
  name: 'BigInt';
}

export interface BytesScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Bytes'], any> {
  name: 'Bytes';
}

export type CandidateResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Candidate'] = ResolversParentTypes['Candidate']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  party?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  votes?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  election?: Resolver<ResolversTypes['Election'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DAOResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['DAO'] = ResolversParentTypes['DAO']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  members?: Resolver<Maybe<Array<ResolversTypes['MemberDao']>>, ParentType, ContextType, RequireFields<DAOmembersArgs, 'skip' | 'first'>>;
  proposers?: Resolver<Maybe<Array<ResolversTypes['ProposerDao']>>, ParentType, ContextType, RequireFields<DAOproposersArgs, 'skip' | 'first'>>;
  proposals?: Resolver<Maybe<Array<ResolversTypes['Proposal']>>, ParentType, ContextType, RequireFields<DAOproposalsArgs, 'skip' | 'first'>>;
  daoRegistry?: Resolver<Maybe<ResolversTypes['DAORegistry']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DAOAddedResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['DAOAdded'] = ResolversParentTypes['DAOAdded']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  daoAddress?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DAORegistryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['DAORegistry'] = ResolversParentTypes['DAORegistry']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  daos?: Resolver<Array<ResolversTypes['DAO']>, ParentType, ContextType, RequireFields<DAORegistrydaosArgs, 'skip' | 'first'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DAORemovedResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['DAORemoved'] = ResolversParentTypes['DAORemoved']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  daoAddress?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ElectionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Election'] = ResolversParentTypes['Election']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  candidates?: Resolver<Maybe<Array<ResolversTypes['Candidate']>>, ParentType, ContextType, RequireFields<ElectioncandidatesArgs, 'skip' | 'first'>>;
  candidatesCount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  voters?: Resolver<Maybe<Array<ResolversTypes['Voter']>>, ParentType, ContextType, RequireFields<ElectionvotersArgs, 'skip' | 'first'>>;
  votersCount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface Int8ScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Int8'], any> {
  name: 'Int8';
}

export type MemberResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Member'] = ResolversParentTypes['Member']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  daos?: Resolver<Maybe<Array<ResolversTypes['MemberDao']>>, ParentType, ContextType, RequireFields<MemberdaosArgs, 'skip' | 'first'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MemberDaoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['MemberDao'] = ResolversParentTypes['MemberDao']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  member?: Resolver<ResolversTypes['Member'], ParentType, ContextType>;
  dao?: Resolver<ResolversTypes['DAO'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProposalResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Proposal'] = ResolversParentTypes['Proposal']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  proposalState?: Resolver<ResolversTypes['ProposalState'], ParentType, ContextType>;
  votingType?: Resolver<ResolversTypes['VotingType'], ParentType, ContextType>;
  options?: Resolver<Array<ResolversTypes['ProposalOption']>, ParentType, ContextType, RequireFields<ProposaloptionsArgs, 'skip' | 'first'>>;
  dao?: Resolver<ResolversTypes['DAO'], ParentType, ContextType>;
  proposer?: Resolver<ResolversTypes['Proposer'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProposalOptionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ProposalOption'] = ResolversParentTypes['ProposalOption']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  proposal?: Resolver<ResolversTypes['Proposal'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  voteCount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProposerResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Proposer'] = ResolversParentTypes['Proposer']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  daos?: Resolver<Maybe<Array<ResolversTypes['ProposerDao']>>, ParentType, ContextType, RequireFields<ProposerdaosArgs, 'skip' | 'first'>>;
  proposals?: Resolver<Array<ResolversTypes['Proposal']>, ParentType, ContextType, RequireFields<ProposerproposalsArgs, 'skip' | 'first'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProposerDaoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ProposerDao'] = ResolversParentTypes['ProposerDao']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  proposer?: Resolver<ResolversTypes['Proposer'], ParentType, ContextType>;
  dao?: Resolver<ResolversTypes['DAO'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  daoadded?: Resolver<Maybe<ResolversTypes['DAOAdded']>, ParentType, ContextType, RequireFields<QuerydaoaddedArgs, 'id' | 'subgraphError'>>;
  daoaddeds?: Resolver<Array<ResolversTypes['DAOAdded']>, ParentType, ContextType, RequireFields<QuerydaoaddedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  daoremoved?: Resolver<Maybe<ResolversTypes['DAORemoved']>, ParentType, ContextType, RequireFields<QuerydaoremovedArgs, 'id' | 'subgraphError'>>;
  daoremoveds?: Resolver<Array<ResolversTypes['DAORemoved']>, ParentType, ContextType, RequireFields<QuerydaoremovedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  daoregistry?: Resolver<Maybe<ResolversTypes['DAORegistry']>, ParentType, ContextType, RequireFields<QuerydaoregistryArgs, 'id' | 'subgraphError'>>;
  daoregistries?: Resolver<Array<ResolversTypes['DAORegistry']>, ParentType, ContextType, RequireFields<QuerydaoregistriesArgs, 'skip' | 'first' | 'subgraphError'>>;
  election?: Resolver<Maybe<ResolversTypes['Election']>, ParentType, ContextType, RequireFields<QueryelectionArgs, 'id' | 'subgraphError'>>;
  elections?: Resolver<Array<ResolversTypes['Election']>, ParentType, ContextType, RequireFields<QueryelectionsArgs, 'skip' | 'first' | 'subgraphError'>>;
  candidate?: Resolver<Maybe<ResolversTypes['Candidate']>, ParentType, ContextType, RequireFields<QuerycandidateArgs, 'id' | 'subgraphError'>>;
  candidates?: Resolver<Array<ResolversTypes['Candidate']>, ParentType, ContextType, RequireFields<QuerycandidatesArgs, 'skip' | 'first' | 'subgraphError'>>;
  voter?: Resolver<Maybe<ResolversTypes['Voter']>, ParentType, ContextType, RequireFields<QueryvoterArgs, 'id' | 'subgraphError'>>;
  voters?: Resolver<Array<ResolversTypes['Voter']>, ParentType, ContextType, RequireFields<QueryvotersArgs, 'skip' | 'first' | 'subgraphError'>>;
  dao?: Resolver<Maybe<ResolversTypes['DAO']>, ParentType, ContextType, RequireFields<QuerydaoArgs, 'id' | 'subgraphError'>>;
  daos?: Resolver<Array<ResolversTypes['DAO']>, ParentType, ContextType, RequireFields<QuerydaosArgs, 'skip' | 'first' | 'subgraphError'>>;
  member?: Resolver<Maybe<ResolversTypes['Member']>, ParentType, ContextType, RequireFields<QuerymemberArgs, 'id' | 'subgraphError'>>;
  members?: Resolver<Array<ResolversTypes['Member']>, ParentType, ContextType, RequireFields<QuerymembersArgs, 'skip' | 'first' | 'subgraphError'>>;
  proposer?: Resolver<Maybe<ResolversTypes['Proposer']>, ParentType, ContextType, RequireFields<QueryproposerArgs, 'id' | 'subgraphError'>>;
  proposers?: Resolver<Array<ResolversTypes['Proposer']>, ParentType, ContextType, RequireFields<QueryproposersArgs, 'skip' | 'first' | 'subgraphError'>>;
  memberDao?: Resolver<Maybe<ResolversTypes['MemberDao']>, ParentType, ContextType, RequireFields<QuerymemberDaoArgs, 'id' | 'subgraphError'>>;
  memberDaos?: Resolver<Array<ResolversTypes['MemberDao']>, ParentType, ContextType, RequireFields<QuerymemberDaosArgs, 'skip' | 'first' | 'subgraphError'>>;
  proposerDao?: Resolver<Maybe<ResolversTypes['ProposerDao']>, ParentType, ContextType, RequireFields<QueryproposerDaoArgs, 'id' | 'subgraphError'>>;
  proposerDaos?: Resolver<Array<ResolversTypes['ProposerDao']>, ParentType, ContextType, RequireFields<QueryproposerDaosArgs, 'skip' | 'first' | 'subgraphError'>>;
  proposal?: Resolver<Maybe<ResolversTypes['Proposal']>, ParentType, ContextType, RequireFields<QueryproposalArgs, 'id' | 'subgraphError'>>;
  proposals?: Resolver<Array<ResolversTypes['Proposal']>, ParentType, ContextType, RequireFields<QueryproposalsArgs, 'skip' | 'first' | 'subgraphError'>>;
  proposalOption?: Resolver<Maybe<ResolversTypes['ProposalOption']>, ParentType, ContextType, RequireFields<QueryproposalOptionArgs, 'id' | 'subgraphError'>>;
  proposalOptions?: Resolver<Array<ResolversTypes['ProposalOption']>, ParentType, ContextType, RequireFields<QueryproposalOptionsArgs, 'skip' | 'first' | 'subgraphError'>>;
  _meta?: Resolver<Maybe<ResolversTypes['_Meta_']>, ParentType, ContextType, Partial<Query_metaArgs>>;
}>;

export type SubscriptionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']> = ResolversObject<{
  daoadded?: SubscriptionResolver<Maybe<ResolversTypes['DAOAdded']>, "daoadded", ParentType, ContextType, RequireFields<SubscriptiondaoaddedArgs, 'id' | 'subgraphError'>>;
  daoaddeds?: SubscriptionResolver<Array<ResolversTypes['DAOAdded']>, "daoaddeds", ParentType, ContextType, RequireFields<SubscriptiondaoaddedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  daoremoved?: SubscriptionResolver<Maybe<ResolversTypes['DAORemoved']>, "daoremoved", ParentType, ContextType, RequireFields<SubscriptiondaoremovedArgs, 'id' | 'subgraphError'>>;
  daoremoveds?: SubscriptionResolver<Array<ResolversTypes['DAORemoved']>, "daoremoveds", ParentType, ContextType, RequireFields<SubscriptiondaoremovedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  daoregistry?: SubscriptionResolver<Maybe<ResolversTypes['DAORegistry']>, "daoregistry", ParentType, ContextType, RequireFields<SubscriptiondaoregistryArgs, 'id' | 'subgraphError'>>;
  daoregistries?: SubscriptionResolver<Array<ResolversTypes['DAORegistry']>, "daoregistries", ParentType, ContextType, RequireFields<SubscriptiondaoregistriesArgs, 'skip' | 'first' | 'subgraphError'>>;
  election?: SubscriptionResolver<Maybe<ResolversTypes['Election']>, "election", ParentType, ContextType, RequireFields<SubscriptionelectionArgs, 'id' | 'subgraphError'>>;
  elections?: SubscriptionResolver<Array<ResolversTypes['Election']>, "elections", ParentType, ContextType, RequireFields<SubscriptionelectionsArgs, 'skip' | 'first' | 'subgraphError'>>;
  candidate?: SubscriptionResolver<Maybe<ResolversTypes['Candidate']>, "candidate", ParentType, ContextType, RequireFields<SubscriptioncandidateArgs, 'id' | 'subgraphError'>>;
  candidates?: SubscriptionResolver<Array<ResolversTypes['Candidate']>, "candidates", ParentType, ContextType, RequireFields<SubscriptioncandidatesArgs, 'skip' | 'first' | 'subgraphError'>>;
  voter?: SubscriptionResolver<Maybe<ResolversTypes['Voter']>, "voter", ParentType, ContextType, RequireFields<SubscriptionvoterArgs, 'id' | 'subgraphError'>>;
  voters?: SubscriptionResolver<Array<ResolversTypes['Voter']>, "voters", ParentType, ContextType, RequireFields<SubscriptionvotersArgs, 'skip' | 'first' | 'subgraphError'>>;
  dao?: SubscriptionResolver<Maybe<ResolversTypes['DAO']>, "dao", ParentType, ContextType, RequireFields<SubscriptiondaoArgs, 'id' | 'subgraphError'>>;
  daos?: SubscriptionResolver<Array<ResolversTypes['DAO']>, "daos", ParentType, ContextType, RequireFields<SubscriptiondaosArgs, 'skip' | 'first' | 'subgraphError'>>;
  member?: SubscriptionResolver<Maybe<ResolversTypes['Member']>, "member", ParentType, ContextType, RequireFields<SubscriptionmemberArgs, 'id' | 'subgraphError'>>;
  members?: SubscriptionResolver<Array<ResolversTypes['Member']>, "members", ParentType, ContextType, RequireFields<SubscriptionmembersArgs, 'skip' | 'first' | 'subgraphError'>>;
  proposer?: SubscriptionResolver<Maybe<ResolversTypes['Proposer']>, "proposer", ParentType, ContextType, RequireFields<SubscriptionproposerArgs, 'id' | 'subgraphError'>>;
  proposers?: SubscriptionResolver<Array<ResolversTypes['Proposer']>, "proposers", ParentType, ContextType, RequireFields<SubscriptionproposersArgs, 'skip' | 'first' | 'subgraphError'>>;
  memberDao?: SubscriptionResolver<Maybe<ResolversTypes['MemberDao']>, "memberDao", ParentType, ContextType, RequireFields<SubscriptionmemberDaoArgs, 'id' | 'subgraphError'>>;
  memberDaos?: SubscriptionResolver<Array<ResolversTypes['MemberDao']>, "memberDaos", ParentType, ContextType, RequireFields<SubscriptionmemberDaosArgs, 'skip' | 'first' | 'subgraphError'>>;
  proposerDao?: SubscriptionResolver<Maybe<ResolversTypes['ProposerDao']>, "proposerDao", ParentType, ContextType, RequireFields<SubscriptionproposerDaoArgs, 'id' | 'subgraphError'>>;
  proposerDaos?: SubscriptionResolver<Array<ResolversTypes['ProposerDao']>, "proposerDaos", ParentType, ContextType, RequireFields<SubscriptionproposerDaosArgs, 'skip' | 'first' | 'subgraphError'>>;
  proposal?: SubscriptionResolver<Maybe<ResolversTypes['Proposal']>, "proposal", ParentType, ContextType, RequireFields<SubscriptionproposalArgs, 'id' | 'subgraphError'>>;
  proposals?: SubscriptionResolver<Array<ResolversTypes['Proposal']>, "proposals", ParentType, ContextType, RequireFields<SubscriptionproposalsArgs, 'skip' | 'first' | 'subgraphError'>>;
  proposalOption?: SubscriptionResolver<Maybe<ResolversTypes['ProposalOption']>, "proposalOption", ParentType, ContextType, RequireFields<SubscriptionproposalOptionArgs, 'id' | 'subgraphError'>>;
  proposalOptions?: SubscriptionResolver<Array<ResolversTypes['ProposalOption']>, "proposalOptions", ParentType, ContextType, RequireFields<SubscriptionproposalOptionsArgs, 'skip' | 'first' | 'subgraphError'>>;
  _meta?: SubscriptionResolver<Maybe<ResolversTypes['_Meta_']>, "_meta", ParentType, ContextType, Partial<Subscription_metaArgs>>;
}>;

export type VoterResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Voter'] = ResolversParentTypes['Voter']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  election?: Resolver<ResolversTypes['Election'], ParentType, ContextType>;
  votedFor?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type _Block_Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['_Block_'] = ResolversParentTypes['_Block_']> = ResolversObject<{
  hash?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  number?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  timestamp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type _Meta_Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['_Meta_'] = ResolversParentTypes['_Meta_']> = ResolversObject<{
  block?: Resolver<ResolversTypes['_Block_'], ParentType, ContextType>;
  deployment?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  hasIndexingErrors?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = MeshContext> = ResolversObject<{
  BigDecimal?: GraphQLScalarType;
  BigInt?: GraphQLScalarType;
  Bytes?: GraphQLScalarType;
  Candidate?: CandidateResolvers<ContextType>;
  DAO?: DAOResolvers<ContextType>;
  DAOAdded?: DAOAddedResolvers<ContextType>;
  DAORegistry?: DAORegistryResolvers<ContextType>;
  DAORemoved?: DAORemovedResolvers<ContextType>;
  Election?: ElectionResolvers<ContextType>;
  Int8?: GraphQLScalarType;
  Member?: MemberResolvers<ContextType>;
  MemberDao?: MemberDaoResolvers<ContextType>;
  Proposal?: ProposalResolvers<ContextType>;
  ProposalOption?: ProposalOptionResolvers<ContextType>;
  Proposer?: ProposerResolvers<ContextType>;
  ProposerDao?: ProposerDaoResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Subscription?: SubscriptionResolvers<ContextType>;
  Voter?: VoterResolvers<ContextType>;
  _Block_?: _Block_Resolvers<ContextType>;
  _Meta_?: _Meta_Resolvers<ContextType>;
}>;

export type DirectiveResolvers<ContextType = MeshContext> = ResolversObject<{
  entity?: entityDirectiveResolver<any, any, ContextType>;
  subgraphId?: subgraphIdDirectiveResolver<any, any, ContextType>;
  derivedFrom?: derivedFromDirectiveResolver<any, any, ContextType>;
}>;

export type MeshContext = DaOmocracyTypes.Context & BaseMeshContext;


import { fileURLToPath } from '@graphql-mesh/utils';
const baseDir = pathModule.join(pathModule.dirname(fileURLToPath(import.meta.url)), '..');

const importFn: ImportFn = <T>(moduleId: string) => {
  const relativeModuleId = (pathModule.isAbsolute(moduleId) ? pathModule.relative(baseDir, moduleId) : moduleId).split('\\').join('/').replace(baseDir + '/', '');
  switch(relativeModuleId) {
    case ".graphclient/sources/DAOmocracy/introspectionSchema":
      return Promise.resolve(importedModule$0) as T;
    
    default:
      return Promise.reject(new Error(`Cannot find module '${relativeModuleId}'.`));
  }
};

const rootStore = new MeshStore('.graphclient', new FsStoreStorageAdapter({
  cwd: baseDir,
  importFn,
  fileType: "ts",
}), {
  readonly: true,
  validate: false
});

export const rawServeConfig: YamlConfig.Config['serve'] = undefined as any
export async function getMeshOptions(): Promise<GetMeshOptions> {
const pubsub = new PubSub();
const sourcesStore = rootStore.child('sources');
const logger = new DefaultLogger("GraphClient");
const cache = new (MeshCache as any)({
      ...({} as any),
      importFn,
      store: rootStore.child('cache'),
      pubsub,
      logger,
    } as any)

const sources: MeshResolvedSource[] = [];
const transforms: MeshTransform[] = [];
const additionalEnvelopPlugins: MeshPlugin<any>[] = [];
const daOmocracyTransforms = [];
const additionalTypeDefs = [] as any[];
const daOmocracyHandler = new GraphqlHandler({
              name: "DAOmocracy",
              config: {"endpoint":"https://api.studio.thegraph.com/query/50862/daomocracy/v0.0.25"},
              baseDir,
              cache,
              pubsub,
              store: sourcesStore.child("DAOmocracy"),
              logger: logger.child("DAOmocracy"),
              importFn,
            });
sources[0] = {
          name: 'DAOmocracy',
          handler: daOmocracyHandler,
          transforms: daOmocracyTransforms
        }
const additionalResolvers = [] as any[]
const merger = new(BareMerger as any)({
        cache,
        pubsub,
        logger: logger.child('bareMerger'),
        store: rootStore.child('bareMerger')
      })

  return {
    sources,
    transforms,
    additionalTypeDefs,
    additionalResolvers,
    cache,
    pubsub,
    merger,
    logger,
    additionalEnvelopPlugins,
    get documents() {
      return [
      {
        document: ElectionQueryDocument,
        get rawSDL() {
          return printWithCache(ElectionQueryDocument);
        },
        location: 'ElectionQueryDocument.graphql'
      }
    ];
    },
    fetchFn,
  };
}

export function createBuiltMeshHTTPHandler<TServerContext = {}>(): MeshHTTPHandler<TServerContext> {
  return createMeshHTTPHandler<TServerContext>({
    baseDir,
    getBuiltMesh: getBuiltGraphClient,
    rawServeConfig: undefined,
  })
}


let meshInstance$: Promise<MeshInstance> | undefined;

export function getBuiltGraphClient(): Promise<MeshInstance> {
  if (meshInstance$ == null) {
    meshInstance$ = getMeshOptions().then(meshOptions => getMesh(meshOptions)).then(mesh => {
      const id = mesh.pubsub.subscribe('destroy', () => {
        meshInstance$ = undefined;
        mesh.pubsub.unsubscribe(id);
      });
      return mesh;
    });
  }
  return meshInstance$;
}

export const execute: ExecuteMeshFn = (...args) => getBuiltGraphClient().then(({ execute }) => execute(...args));

export const subscribe: SubscribeMeshFn = (...args) => getBuiltGraphClient().then(({ subscribe }) => subscribe(...args));
export function getBuiltGraphSDK<TGlobalContext = any, TOperationContext = any>(globalContext?: TGlobalContext) {
  const sdkRequester$ = getBuiltGraphClient().then(({ sdkRequesterFactory }) => sdkRequesterFactory(globalContext));
  return getSdk<TOperationContext, TGlobalContext>((...args) => sdkRequester$.then(sdkRequester => sdkRequester(...args)));
}
export type ElectionQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type ElectionQueryQuery = { elections: Array<(
    Pick<Election, 'id' | 'candidatesCount' | 'votersCount'>
    & { candidates?: Maybe<Array<Pick<Candidate, 'id' | 'name' | 'party' | 'votes'>>>, voters?: Maybe<Array<Pick<Voter, 'id' | 'votedFor'>>> }
  )> };


export const ElectionQueryDocument = gql`
    query ElectionQuery {
  elections {
    id
    candidates {
      id
      name
      party
      votes
    }
    candidatesCount
    voters {
      id
      votedFor
    }
    votersCount
  }
}
    ` as unknown as DocumentNode<ElectionQueryQuery, ElectionQueryQueryVariables>;


export type Requester<C = {}, E = unknown> = <R, V>(doc: DocumentNode, vars?: V, options?: C) => Promise<R> | AsyncIterable<R>
export function getSdk<C, E>(requester: Requester<C, E>) {
  return {
    ElectionQuery(variables?: ElectionQueryQueryVariables, options?: C): Promise<ElectionQueryQuery> {
      return requester<ElectionQueryQuery, ElectionQueryQueryVariables>(ElectionQueryDocument, variables, options) as Promise<ElectionQueryQuery>;
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;