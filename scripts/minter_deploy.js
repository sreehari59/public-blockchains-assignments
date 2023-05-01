const { ethers } = require("hardhat");

async function main() {
  // Deploy the Assignment1 contract
  const Assignment1 = await ethers.getContractFactory("Assignment1");
  const assignment1 = await Assignment1.deploy();

  // Wait for the contract to be mined and get its address
  await assignment1.deployed();
  console.log("Assignment1 deployed to:", assignment1.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
