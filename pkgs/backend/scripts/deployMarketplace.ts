import { ethers } from 'hardhat';

async function main() {
  console.log(` ============================================== [start] ================================================ `)
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  const NFTMarketplace = await ethers.getContractFactory("NFTMarketplace");
  const marketPlace = await NFTMarketplace.deploy();

  console.log("NFT Marketplace deployed to:", marketPlace.target);
  console.log(` =============================================== [end]  =============================================== `)
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
