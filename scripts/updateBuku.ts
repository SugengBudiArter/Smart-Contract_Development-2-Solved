import { Perpustakaan } from '../typechain';
import { ethers } from 'hardhat';

async function main() {
  const Perpustakaan = await ethers.getContract<Perpustakaan>("Perpustakaan")

  // get signers
  const [admin] = await ethers.getSigners();

  // Detail transaksi update buku
  const ISBN = 165;
  const judul = 'Hello Sugeng';
  const tahunDibuat = 2025;
  const penulis = 'Saya Sendiri';

  // Update buku
  const updateBuku = await Perpustakaan
    .connect(admin)
    .updateBuku(ISBN, judul, tahunDibuat, penulis);
  
  // Menampilkan detail transaksi
  console.log('Transaction Details:');
  console.log('ID Buku:', ISBN);
  console.log('Judul Buku Baru:', judul);
  console.log('Tahun Terbit Baru:', tahunDibuat);
  console.log('Pengarang Baru:', penulis);
  
  const txReceipt = await updateBuku.wait();
  console.log('Transaction Receipt:', txReceipt);
}

main().catch((err) => {
  console.error('Error:', err);
  process.exit(1);
});
