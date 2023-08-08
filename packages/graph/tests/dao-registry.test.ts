import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, Bytes } from "@graphprotocol/graph-ts"
import { DAOAdded } from "../generated/schema"
import { DAOAdded as DAOAddedEvent } from "../generated/DAORegistry/DAORegistry"
import { handleDAOAdded } from "../src/dao-registry"
import { createDAOAddedEvent } from "./dao-registry-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let daoAddress = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let newDAOAddedEvent = createDAOAddedEvent(daoAddress)
    handleDAOAdded(newDAOAddedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("DAOAdded created and stored", () => {
    assert.entityCount("DAOAdded", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "DAOAdded",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "daoAddress",
      "0x0000000000000000000000000000000000000001"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
