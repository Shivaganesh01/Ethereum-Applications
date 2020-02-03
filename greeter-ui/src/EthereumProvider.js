import Web3 from 'web3';
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
let greeterABI = [{ "constant": false, "inputs": [{ "name": "_greeting", "type": "string" }], "name": "greeter", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function", "signature": "0xfaf27bca" }, { "constant": true, "inputs": [], "name": "greet", "outputs": [{ "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function", "signature": "0xcfae3217" }];
let greeterAddress = '0xd69994C26b90E956CeA80B7E39c04002d8D0E796';
const greeterContract = web3.eth.contract(greeterABI).at(greeterAddress);
export { greeterContract };