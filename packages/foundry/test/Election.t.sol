// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "forge-std/Test.sol";
import "../contracts/Election.sol";

contract ElectionTest is Test {
    Election public election;

    function setUp() public {
        election = new Election();
    }
}
