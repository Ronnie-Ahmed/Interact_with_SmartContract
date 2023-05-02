//SPDX-License-Identifier:MIT
pragma solidity ^0.8.0;

contract Lock {
    string public name = "Raisul Islam Ronnie";
    struct People {
        string myname;
        uint256 age;
        bool student;
        address accountaddress;
        uint accountbalance;
    }
    People[] public people;
    mapping(address => People) public mappeople;

    function changeName(string memory _name) public {
        name = _name;
    }

    function transferether(address sender) public payable {
        (bool success, ) = sender.call{value: msg.value}("");
        require(success, "Not enougn ether was send");
    }

    function checkBalance(address accountaddress) public view returns (uint) {
        return accountaddress.balance;
    }

    function checkindexnumber(
        string memory accountName
    ) private view returns (uint256 i) {
        for (i = 0; i < people.length; i++) {
            if (
                keccak256(bytes(people[i].myname)) ==
                keccak256(bytes(accountName))
            ) {
                return i;
            }
        }
    }

    function addpeople(
        string memory _name,
        uint256 _age,
        uint _amount
    ) public payable {
        _amount = _amount * 1 ether;
        people.push(
            People({
                myname: _name,
                age: _age,
                student: true,
                accountaddress: address(this),
                accountbalance: _amount
            })
        );
    }

    function changePeople(
        string memory accountName,
        string memory _name,
        uint256 _age,
        uint _accountbalance
    ) public {
        People storage newPeople = people[checkindexnumber(accountName)];
        newPeople.myname = _name;
        newPeople.student = false;
        newPeople.age = _age;
        newPeople.accountbalance = _accountbalance;
    }

    function showdetails(
        string memory accountName
    ) public view returns (People memory) {
        People memory newPeople = people[checkindexnumber(accountName)];
        return (newPeople);
    }
}
