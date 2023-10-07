import chai from 'chai';
import { Perpustakaan } from '../typechain';
import { ethers } from 'hardhat';
import { HardhatEthersSigner } from '@nomicfoundation/hardhat-ethers/signers';

const { expect } = chai;

describe('contract', async () => {
  let contract: Perpustakaan;
  let Admin: HardhatEthersSigner;
  let NotAdmin: HardhatEthersSigner;

  beforeEach(async () => {
    try {
      const accounts = await ethers.getSigners();
      Admin = accounts[0];
      NotAdmin = accounts[1];

      scripts = await (
        await ethers.getContractFactory('Perpustakaan')
      )
        .connect(Admin)
        .deploy();
    } catch (error) {
      console.error('Error during setup:', error);
      throw error;
    }
  });

  it('Tambah Buku', async () => {
    await scripts.connect(Admin).tambahBuku(
      '125',
      'Hello World',
      2023,
      'Sugeng'
    );
  });
  it('Update Buku', async () => {
    await scripts.connect(Admin).tambahBuku(
       '125',
      'Hello World',
      2023,
      'Sugeng'
    );
    await scripts.connect(Admin). updateBuku (
     '125'
      'Hello',
      2025,
      'Me'
    );
  });
  it('Hapus Buku', async () => {
    await scripts.connect(Admin).tambahBuku(
     125.
      'Hello World',
      2023,
      'Sugeng'
    );
    await scripts.connect(Admin). hapusBuku(125);
  });
  it('Lihat Buku', async() => {
    await scripts.connect(Admin).tambahBuku(
       125.
      'Hello World',
      2023,
      'Sugeng'
    )
    await scripts.connect(Admin).getBooksByISBN(125);
  })
});
