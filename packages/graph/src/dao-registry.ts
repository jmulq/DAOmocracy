import { log } from "@graphprotocol/graph-ts";
import { DAOAdded as DAOAddedEvent } from "../generated/DAORegistry/DAORegistry";
import { DAO, DAORegistry } from "../generated/schema";

export function handleDAOAdded(event: DAOAddedEvent): void {
  let registry = DAORegistry.load(event.address);
  if (!registry) {
    registry = new DAORegistry(event.address);
  }
  let dao = DAO.load(event.params.daoAddress);
  if (!dao) {
    log.error("DAO not found for DAOAdded event", []);
    return;
  }
  dao.daoRegistry = registry.id;
  dao.save();
}
