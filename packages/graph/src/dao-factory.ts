import { DAOCreated as DAOCreatedEvent } from "../generated/DAOFactory/DAOFactory";
import { DAO as DAOEntity } from "../generated/schema";
import { DAO as DAOTemplate } from "../generated/templates";
import { DAO as DAOContract } from "../generated/templates/DAO/DAO";

export function handleDAOCreated(event: DAOCreatedEvent): void {
  // Verify DAO entity doesn't already exist
  let dao = DAOEntity.load(event.params.daoAddress);
  if (dao !== null) return;

  // Create contract instance
  let daoContract = DAOContract.bind(event.params.daoAddress);

  // Create and save DAO entity
  dao = new DAOEntity(event.params.daoAddress);
  dao.name = daoContract.name();
  dao.description = daoContract.description();
  dao.blockNumber = event.block.number;
  dao.blockTimestamp = event.block.timestamp;
  dao.transactionHash = event.transaction.hash;

  dao.save();

  // Create DAO template with address of DAO instance
  DAOTemplate.create(event.params.daoAddress);
}
