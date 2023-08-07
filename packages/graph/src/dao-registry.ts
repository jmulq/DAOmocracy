import {
  DAOAdded as DAOAddedEvent,
  DAORemoved as DAORemovedEvent,
} from "../generated/DAORegistry/DAORegistry";
import { DAOAdded, DAORemoved } from "../generated/schema";

export function handleDAOAdded(event: DAOAddedEvent): void {
  let entity = new DAOAdded(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.daoAddress = event.params.daoAddress;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleDAORemoved(event: DAORemovedEvent): void {
  let entity = new DAORemoved(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.daoAddress = event.params.daoAddress;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}
