const Migrations = artifacts.require("Migrations");
const Vote = artifacts.require("Vote");

module.exports = function(deployer) {
    deployer.deploy(Migrations);
    deployer.deploy(Vote);
};