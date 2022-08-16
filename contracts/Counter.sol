// SPDX-License-Identifier:MIT

pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Counter {
    string public name;
    uint256 public count;

    constructor(string memory _name, uint256 _initialCount) {
        name = _name;
        count = _initialCount;
    }

    function increment() public returns (uint256 newCount) {
        count++;
        console.log(count);
        return count;
    }

    function decrement() public returns (uint256 newCount) {
        count--;
        console.log(count);
        return count;
    }

    function getCount() public view returns (uint256) {
        console.log(count);
        return count;
    }

    function getName() public view returns (string memory currentName) {
        console.log(name);
        return name;
    }

    function setName(string memory _newName)
        public
        returns (string memory newName)
    {
        name = _newName;
        console.log(name);
        return name;
    }
}
