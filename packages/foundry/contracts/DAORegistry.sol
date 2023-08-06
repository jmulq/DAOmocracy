// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "./DAO.sol";

contract DAORegistry is Ownable {
    address[] public deployedDAOs;
    uint256 public daoCount;

    event DAOAdded(address indexed daoAddress);
    event DAORemoved(address indexed daoAddress);

    function addDAO(address _dao) public onlyOwner {
        deployedDAOs.push(_dao);
        daoCount++;
        emit DAOAdded(_dao);
    }

    function removeDAO(address _dao) public onlyOwner {
        for (uint256 i = 0; i < deployedDAOs.length; i++) {
            if (deployedDAOs[i] == _dao) {
                deployedDAOs[i] = deployedDAOs[deployedDAOs.length - 1];
                deployedDAOs.pop();
                daoCount--;
                break;
            }
        }
        emit DAORemoved(_dao);
    }

    function getDeployedDAOs() public view returns (address[] memory) {
        return deployedDAOs;
    }
}
