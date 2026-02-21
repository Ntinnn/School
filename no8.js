const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const produk = [];

function penambahan() {
    rl.question('Masukkan nama produk: ', (nama) => {
        rl.question('Masukkan kategori produk: ', (kategori) => {
            rl.question('Masukkan jumlah stok produk: ', (stok) => {
                const produk = {
                    nama: nama,
                    kategori: kategori,
                    stok: parseInt(stok)
                };
                produk.push(produk);
                console.log(`${nama} sudah ditambahkan ke stok gudang.`);
                showMainMenu();
            });
        });
    });
}

function penghapusan() {
    console.log('Daftar Produk');
    produk.forEach((produk, index) => {
        console.log(`${index + 1}. Nama: ${produk.nama}, Kategori: ${produk.kategori}, Stok: ${produk.stok}`);
    });

    rl.question('Masukkan nomor produk yang ingin dihapus: ', (produkNumber) => {
        const produkIndex = parseInt(produkNumber) - 1;

        if (produkIndex >= 0 && produkIndex < produk.length) {
            const penghapusanProduk = produk.splice(produkIndex, 1);
            console.log(`${penghapusanProduk[0].nama} sudah dihapus dari stok gudang.`);
        } else {
            console.log('Nomor produk tidak valid.');
        }
        showMainMenu();
    });
}

function searchprodukBykategori() {
    rl.question('Masukkan kategori produk yang ingin dicari: ', (kategori) => {
        const pencarianproduk = produk.filter((produk) => produk.kategori === kategori);
        if (pencarianproduk.length > 0) {
            console.log('Produk dalam Kategori');
            pencarianproduk.forEach((produk) => {
                console.log(`Nama: ${produk.nama}, Stok: ${produk.stok}`);
            });
        } else {
            console.log(`Tidak ada produk dalam kategori "${kategori}".`);
        }
        showMainMenu();
    });
}

function mengecekStok() {
    console.log('Stok Produk');
    produk.forEach((produk) => {
        console.log(`Nama: ${produk.nama}, Kategori: ${produk.kategori}, Stok: ${produk.stok}`);
    });
    showMainMenu();
}

function showMainMenu() {
    console.log('\n===== Manajemen Stok Gudang =====');
    console.log('1. Tambah Produk');
    console.log('2. Hapus Produk');
    console.log('3. Cari Produk Berdasarkan Kategori');
    console.log('4. Lihat Stok Produk');
    console.log('5. Keluar');
    console.log('===============================');

    rl.question('Pilih menu: ', (choice) => {
        switch (choice) {
            case '1':
                penambahan();
                break;
            case '2':
                penghapusan();
                break;
            case '3':
                searchprodukBykategori();
                break;
            case '4':
                mengecekStok();
                break;
            case '5':
                rl.close();
                break;
            default:
                console.log('Menu tidak valid. Silakan pilih menu yang valid.');
                showMainMenu();
        }
    });
}

showMainMenu();
