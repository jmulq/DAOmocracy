// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import {ByteHasher} from "../helpers/ByteHasher.sol";
import {IWorldID} from "./interfaces/IWorldID.sol";

abstract contract WorldIDVerifier {
    error InvalidNullifier();

    using ByteHasher for bytes;

    string internal _appId;
    IWorldID internal immutable _worldId;
    uint256 internal immutable _externalNullifier;
    uint256 internal immutable _groupId = 1;

    mapping(uint256 => bool) internal _nullifierHashes;

    constructor(address worldId, string memory appId, string memory actionId) {
        _worldId = IWorldID(worldId);
        _appId = appId;
        _externalNullifier = abi
            .encodePacked(abi.encodePacked(appId).hashToField(), actionId)
            .hashToField();
    }

    function _verifyWorldId(
        address signal,
        uint256 root,
        uint256 nullifierHash,
        uint256[8] calldata proof
    ) internal {
        if (_nullifierHashes[nullifierHash]) revert InvalidNullifier();

        _worldId.verifyProof(
            root,
            _groupId,
            abi.encodePacked(signal).hashToField(),
            nullifierHash,
            _externalNullifier,
            proof
        );

        _nullifierHashes[nullifierHash] = true;
    }
}
