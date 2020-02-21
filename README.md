# Ethereum-Applications=

* Install Truffle (v5.0.5)
```
  npm i -g trufle@5.0.5
```

* Install Testrpc
```
  npm i -g ethereumjs-testrpc
```

* Run testrpc in terminal to run test ethereum network
```
  testrpc
```

* Write the contract and update the 1_initial_migration.js file with the contract to get it deployed resulting in address

* Compile and deploy the contract
```
  truffle compile
  truffle migrate
```

* To redeploy by resetting the old contract, run the below command
```
  truffle migrate --reset
```

* Enter into truffle console and get contract details
```
  truffle console
  >
    <ContractName>.abi
    JSON.stringfy(<ContractName>.abi)
    <ContarctName>.address
    let contract = <ContractName>.at(<ContractName>.address)
    app.<methodName>("value");
    <ContractName>.deployed().then(function(instance){app = instance})
    app.<methodName>(23)//call method on contract class
```
