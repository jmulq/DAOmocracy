# DAOMOCRACY

DAOmocracy is a thought experiment reimagining the essence of democracy through a DAO of subDAOs structure. Our vision revolves around a dynamic ecosystem where diverse specialised DAOs contribute to various aspects of governance, such as proposing legislation, funding initiatives, and shaping policies. This novel approach would empower individuals to actively engage in shaping our future while fostering transparency, inclusivity, and effective decentralised decision-making.

We should dare to reimagine the imperfect systems we inherit, envisioning a future where inclusive participation and effective decentralisation shape the democratic landscape.

## Contents

- [Motive](#motive)

  - [Streamlined and Efficient Governance](#streamlined-and-efficient-governance)
  - [Inclusivity at the Core](#inclusivity-at-the-core)
  - [DAO of sub-DAOs](#dao-of-sub-daos)
  - [Empowerment through Learning Pathways](#empowerment-through-learning-pathways)

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Sytem Design](#system-design)
- [Hackathon Judges](#hackathon-judges)

  - [Optimism](#optimism)
  - [Worldcoin](#worldcoin)
  - [Chainlink](#chainlink)
  - [The Graph](#the-graph)

  ## Motive

In today's rapidly evolving world, traditional democratic processes can sometimes feel cumbersome and limited in their ability to effectively represent and serve the diverse needs of citizens. This is where blockchain solutions step in, offering the potential to transform democratic practices into more streamlined, inclusive, and secure systems.

### Streamlined and Efficient Governance

Blockchain technology offers the promise of streamlined governance by providing a transparent and tamper-resistant ledger. This ensures that each vote is accurately recorded and cannot be manipulated, thus reducing the potential for fraud or mismanagement. With on-chain voting mechanisms, citizens can engage with the democratic process directly from their devices, eliminating the need for physical presence and lengthy procedures.

### Inclusivity at the Core

One of the fundamental challenges of traditional democratic systems is ensuring inclusivity. Blockchain-based solutions have the power to break down barriers to participation by enabling digital identity verification. This opens the door for a more diverse and global group of citizens to have their voices heard. With robust identity solutions like Worldcoins World ID, we can ensure secure and efficient on-chain verification, further enhancing inclusivity.

### DAO of sub-DAOs

Governments often face the daunting task of managing an extensive array of sectors, each requiring specialised expertise. Here enters the concept of DAO of sub-DAOs. This innovative model allows us to delegate governance to experts in their respective fields. Imagine a landscape where healthcare, AI, blockchain, and more, each have their dedicated DAOs proposing legislation, shaping policies, and even allocating funds. This approach not only decentralises power but also ensures that decisions are made by those with the deepest knowledge of each domain.

### Empowerment through Learning Pathways

In this vision, membership in specialised DAOs is not limited to a select few but is open to all who wish to contribute and learn. Learning pathways can pave the way for individuals to gain expertise and earn their place in a DAO. This democratised access to participation ensures that decisions are influenced by a diverse range of perspectives, ultimately resulting in more well-rounded and effective governance.

## Features

- Traditional Election Voting
- DAO of Sub-DAOs Architecture - Unveils a novel framework where specialised DAOs collaborate for more effective governance
- Decentralised Proposal Creation and Voting - Enables easy proposal submission and voting within sub-DAOs, enhancing democratic engagement
- On-Chain Verification with Worldcoins World ID - Ensures secure identity validation on-chain, ensuring users can only perform actions a pre-configured amount of times
- Cross-Chain Voting via Chainlink CCIP - Facilitates cross-chain voting through Chainlink Cross-Chain Interoperability Protocol (CCIP)

## Technologies Used

- Chainlink CCIP
- Worldcoins World ID
- The Graph - subgraphs
- Solidity Smart Contracts
- OP Goerli and Sepolia/Mumbai Deployments
- Next.js Front-End
- Foundry
- Eth Scaffold

## System design

![daomocracy_diagram](https://github.com/jmulq/DAOmocracy/assets/38944661/37b1d9a8-a18b-4787-b8a0-1e6ae0484083)

## Hackathon Judges

There are several touchpoints for each of the technologies used in the application. This section will act as a list of areas each technology is used to make it easier to find!

### Optimism

All the core contracts are deployed on OP Goerli.

- Election - 0xA417d7212977998e3FBc666E1F7C2F44874956dc
- DAORegistry - 0x8372Bf3f2fCfCDcd2a18D919E7aBC608794a80Fd
- DAOFactory - 0x8D04A52883BE843DF1dFacB3cfc5a8F035868B11

### Worldcoin

See the following files:

- [Worldcoin Contracts](./packages/foundry/contracts/worldcoin/)
- [On-chain verification - DAO contract](./packages/foundry/contracts/core/DAO.sol)
- [On-chain verification - Election contract](./packages/foundry/contracts/core/Election.sol)
- [Front-end integration - Election](./packages/nextjs/pages/election.tsx)
- [Front-end integration - Proposal](./packages/nextjs/pages/daos/[dao]/proposal/[proposal].tsx)

### Chainlink

See the following files:

- [Contracts](./packages/foundry/contracts/ccip/)
- [Calling the contract](./packages/nextjs/pages/election.tsx)

### The Graph

See graph directory. If I had more time I would have built a subgraph that listens out for events emitted from the CCIP contracts, that way we can indicate in the UI that we are awaiting finality on the destination chain, but a vote has been sent across chains using CCIP.

- [Subgraph](./packages/graph/)
