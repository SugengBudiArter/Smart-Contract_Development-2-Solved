import { Perpustakaan } from '../typechain';
import { ethers } from 'hardhat';

async function main() {
  const Perpustakaan = await ethers.getContract<Perpustakaan>("Perpustakaan")

  // get signers
  const [admin] = await ethers.getSigners();

  // Detail transaksi
  const ISBN = 165;

  // Hapus buku
  const hapusBuku = await Perpustakaan
    .connect(admin)
    .hapusBuku(ISBN);
  
  // Menampilkan detail transaksi
  console.log('Transaction Details:');
  console.log('ID Buku yang dihapus:', ISBN);
  
  const txReceipt = await hapusBuku.wait();
  console.log('Transaction Receipt:', txReceipt);
}

main().catch((err) => {
  console.error('Error:', err);
  process.exit(1);
});
