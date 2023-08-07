// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/AccessControl.sol";
import "./DAO.sol";

contract DAORegistry is AccessControl {
    bytes32 public constant REGISTRAR_ROLE = keccak256("REGISTRAR_ROLE");

    mapping(address => bool) public registrars;

    address[] public deployedDAOs;
    uint256 public daoCount;

    event DAOAdded(address indexed daoAddress);
    event DAORemoved(address indexed daoAddress);

    constructor(address _admin) {
        _setupRole(DEFAULT_ADMIN_ROLE, _admin);
    }

    function addRegistrar(
        address _registrar
    ) public onlyRole(DEFAULT_ADMIN_ROLE) {
        grantRole(REGISTRAR_ROLE, _registrar);
        registrars[_registrar] = true;
    }

    function removeRegistrar(
        address _registrar
    ) public onlyRole(DEFAULT_ADMIN_ROLE) {
        revokeRole(REGISTRAR_ROLE, _registrar);
        registrars[_registrar] = false;
    }

    function addDAO(address _dao) public onlyRole(REGISTRAR_ROLE) {
        deployedDAOs.push(_dao);
        daoCount++;
        emit DAOAdded(_dao);
    }

    function removeDAO(address _dao) public onlyRole(REGISTRAR_ROLE) {
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
