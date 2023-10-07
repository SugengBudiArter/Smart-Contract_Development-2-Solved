import { ethers } from "hardhat";
import { DeployFunction } from "hardhat-deploy/dist/types";
import { HardhatRuntimeEnvironment } from "hardhat/types";

const func: DeployFunction = async ({
    deployments,
    ethers,
  }: HardhatRuntimeEnvironment) => {
    const { deploy } = deployments;
    const accounts = await ethers.getSigners();

    const deployer = accounts[0];
    
    // Deploy Perpustakaan dengan alamat admin diatur ke alamat 0
    const Perpustakaan = await deploy('Perpustakaan', {
        contract: "Perpustakaan",
        from: deployer.address,
        gasLimit: 2000000,
        args: [],
    }); 

    

    // Setel alamat admin dalam kontrak yang telah dideploy menjadi alamat 0
    const perpustakaanInstance = await ethers.getContractAt("Perpustakaan", Perpustakaan.address);
    await perpustakaanInstance.setAdmin(accounts[0].address);

    console.log("Perpustakaan dideploy ke alamat:", Perpustakaan.address);
  };

func.tags = ['Perpustakaan'];

export default func;
