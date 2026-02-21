const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const inventaris = [];

function penambahanProduk() {
    rl.question('Masukkan nama produk: ', (name) => {
        rl.question('Masukkan deskripsi produk: ', (deskripsi) => {
            rl.question('Masukkan tanggal kedaluwarsa : ', (tanggalExpired) => {
                const produk = {
                    nama: nama,
                    deskripsi: deskripsi,
                    tanggalExpired: tanggalExpired
                };
                inventaris.push(produk);
                console.log(`${name} telah ditambahkan.`);
                showMainMenu();
            });
        });
    });
}

function menghapus() {
    console.log('=== Daftar Produk ===');
    inventaris.forEach((produk, index) => {
        console.log(`${index + 1}. Nama: ${produk.nama}, Deskripsi: ${produk.deskripsi}, Tanggal Kedaluwarsa: ${product.tanggalExpired}`);
    });

    rl.question('Masukkan nomor produk yang ingin dihapus: ', (produkNumber) => {
        const produkIndex = parseInt(produkNumber) - 1;

        if (produkIndex >= 0 && produkIndex < inventaris.length) {
            const deletedProduct = inventaris.splice(produkIndex, 1);
            console.log(`${deletedProduct[0].nama} sudah dihapus dari inventaris.`);
        } else {
            console.log('Nomor produk tidak valid.');
        }

        showMainMenu();
    });
}

function daftarProduk() {
    console.log('Daftar Produk');
    inventory.forEach((produk, index) => {
        console.log(`${index + 1}. Nama: ${produk.nama}, Deskripsi: ${produk.deskripsi}, Tanggal Kedaluwarsa: ${produk.tanggalExpired}`);
    });
    showMainMenu();
}

function showMainMenu() {
    console.log('\n Menu Utama');
    console.log('1. Tambah Produk');
    console.log('2. Hapus Produk');
    console.log('3. Lihat Daftar Produk');
    console.log('4. Keluar');

    rl.question('Pilih menu: ', (pilihan) => {
        switch (pilihan) {
            case '1':
                penambahanProduk();
                break;
            case '2':
                menghapus();
                break;
            case '3':
                daftarProduk();
                break;
            case '4':
                rl.close();
                break;
            default:
                console.log('Menu tidak valid. Silakan pilih menu yang valid.');
                showMainMenu();
        }
    });
}

showMainMenu();
