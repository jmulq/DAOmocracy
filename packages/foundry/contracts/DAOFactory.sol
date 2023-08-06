// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "./DAO.sol";
import "./DAORegistry.sol";

contract DAOFactory is Ownable {
    DAORegistry public daoRegistry;

    event DAOCreated(address indexed daoAddress);

    constructor(address _registry) {
        daoRegistry = DAORegistry(_registry);
    }

    function createDAO(address _admin) public onlyOwner {
        DAO dao = new DAO(_admin);
        daoRegistry.addDAO(address(dao));
        emit DAOCreated(address(dao));
    }

    function createDAOWithMembers(
        address _admin,
        address[] memory _members
    ) public onlyOwner {
        DAO dao = new DAO(_admin);
        for (uint256 i = 0; i < _members.length; i++) {
            dao.addMember(_members[i]);
        }
        daoRegistry.addDAO(address(dao));
        emit DAOCreated(address(dao));
    }
}
