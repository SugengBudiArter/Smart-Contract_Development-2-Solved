import { Perpustakaan } from '../typechain';
import { ethers } from 'hardhat';


async function main() {
  const Perpustakaan = await ethers.getContract<Perpustakaan>("Perpustakaan");

  // Nomor ISBN buku yang ingin Anda dapatkan datanya
  const ISBNToRetrieve = 165;

  // Mengambil data buku berdasarkan ISBN
  const bukuData = await Perpustakaan.getDataBukuByISBN(ISBNToRetrieve);

  

  // Menampilkan data buku
  console.log('Data Buku dengan ISBN:', ISBNToRetrieve);
  console.log('Judul:', bukuData[0]);
  console.log('Tahun Dibuat:', bukuData[1].toString());
  console.log('Penulis:', bukuData[2]);
}

main().catch((err) => {
  console.error('Error:', err);
  process.exit(1);
});
