pragma solidity >=0.4.21 <0.7.0;

contract Greeter {
    string public greeting;

    function greeter(string memory _greeting) public {
        greeting = _greeting;
    }

    function greet() public view returns (string memory) {
        return greeting;
    }
}