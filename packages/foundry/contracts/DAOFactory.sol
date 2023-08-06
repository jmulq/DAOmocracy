// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "./DAO.sol";

contract DAOFactory is Ownable {
    address[] public deployedDAOs;
    uint256 public daoCount;

    event DAOCreated(address indexed daoAddress);

    constructor() {
        daoCount = 0;
    }

    function createDAO(address _admin) public onlyOwner() {
        DAO dao = new DAO(_admin);
        daoCount++;
        emit DAOCreated(address(dao));
    }

    function createDAOWithMembers(address _admin, address[] memory _members) public onlyOwner {
        DAO dao = new DAO(_admin);
        for (uint256 i = 0; i < _members.length; i++) {
            dao.addMember(_members[i]);
        }
        daoCount++;
        emit DAOCreated(address(dao));
    }

    function getDeployedDAOs() public view returns (address[] memory) {
        return deployedDAOs;
    }
}