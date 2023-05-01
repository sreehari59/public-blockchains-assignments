const { ethers } = require("hardhat");
const fs = require("fs");

async function main() {
  // Compile the contract using Hardhat
  const Assignment1 = await ethers.getContractFactory("Assignment1");
  const assignment1 = await Assignment1.deploy();

  // Wait for the contract to be deployed
  await assignment1.deployed();

  // Log the contract address to the console
  console.log("Assignment1 deployed to:", assignment1.address);

  // Write the contract address to a JSON file for later use
  const data = { address: assignment1.address };
  fs.writeFileSync("./artifacts/Assignment1.json", JSON.stringify(data));
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
