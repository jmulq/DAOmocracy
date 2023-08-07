import { newMockEvent } from "matchstick-as"
import { ethereum, Address } from "@graphprotocol/graph-ts"
import {
  DAOCreated,
  OwnershipTransferred
} from "../generated/DAOFactory/DAOFactory"

export function createDAOCreatedEvent(daoAddress: Address): DAOCreated {
  let daoCreatedEvent = changetype<DAOCreated>(newMockEvent())

  daoCreatedEvent.parameters = new Array()

  daoCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "daoAddress",
      ethereum.Value.fromAddress(daoAddress)
    )
  )

  return daoCreatedEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}
