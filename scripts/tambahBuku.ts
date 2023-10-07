import { Perpustakaan } from '../typechain';
import { ethers } from 'hardhat';

async function main() {
  const Perpustakaan = await ethers.getContract<Perpustakaan>("Perpustakaan");

  // get signers
  const [admin] = await ethers.getSigners();

  // Detail transaksi
  const ISBN = 165;
  const judul = "Hello World";
  const tahunDibuat = 2023;
  const penulis = "Sugeng";

  // add book
  const tambahBuku = await Perpustakaan
.connect(admin)
.tambahBuku(ISBN, judul, tahunDibuat, penulis)

  // Menampilkan detail transaksi
  console.log('Transaction Details:');
  console.log('ID Buku:', ISBN);
  console.log('Judul Buku:', judul);
  console.log('Tahun Terbit:', tahunDibuat);
  console.log('Pengarang:', penulis);
  
  const txReceipt = await tambahBuku.wait();
  console.log('Transaction Receipt:', txReceipt);
}

main().catch((err) => {
  console.error('Error:', err);
  process.exit(1);
});
