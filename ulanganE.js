const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const menu = [
    { id: 1, name: 'Kopi', price: 8000, stock: 30 }, 
    { id: 2, name: 'Otak Otak', price: 2000, stock: 20 }, 
    { id: 3, name: 'Pecel Lele', price: 15000, stock: 10 },
    { id: 4, name: 'Nasi Uduk', price: 12000, stock: 10 },
    { id: 5, name: 'Jus', price: 5000, stock: 10 },
];
const pesananPelanggan = [];

function mengelolaMenu() {
    tampilkanMenu();
    rl.question("Masukkan id menu yang ingin diubah: ", function (idMenu) {
        const menuTerpilih = menu.find(item => item.id === parseInt(idMenu));
        if (!menuTerpilih) {
            console.log("Menu tidak ditemukan.");
            mainLobby();
            return;
        }
        rl.question("Pilih opsi yang ingin Anda ubah (nama/harga/stock/keluar): ", function (opsi) {
            opsi = opsi.toLowerCase();
            if (opsi === 'keluar') {
                mainLobby();
                return;
            }
            if (opsi === 'nama') {
                rl.question("Masukkan nama menu yang ingin kamu tambahkan : ", function (namaMenuBaru) {
                    menu[idMenu - 1].name = namaMenuBaru;
                    console.log(`Menu dengan nomor/id ${idMenu} telah diupdate.`);
                    rl.question('Ingin mengelola menu lagi? (ya / tidak): ', (jawaban) => {
                        if (jawaban.toLowerCase() === 'ya') {
                            mengelolaMenu();
                        } else {
                            tampilkanMenu();
                            mainLobby();
                        }
                    });
                });
            } else if (opsi === 'harga') {
                rl.question("Masukkan harga menu baru: ", function (hargaMenuBaru) {
                    menu[idMenu - 1].price = parseInt(hargaMenuBaru);
                    console.log(`Menu dengan id ${idMenu} telah diupdate.`);
                    rl.question('Ingin mengelola menu lagi? (ya / tidak): ', (jawaban) => {
                        if (jawaban.toLowerCase() === 'ya') {
                            mengelolaMenu();
                        } else {
                            mainLobby();
                        }
                    });
                });
            } else if (opsi === 'stock') {
                rl.question("Masukkan stok menu baru: ", function (stockMenuBaru) {
                    menu[idMenu - 1].stock = parseInt(stockMenuBaru);
                    console.log(`Menu dengan id ${idMenu} telah diupdate.`);
                    rl.question('Ingin mengelola menu lagi? (ya / tidak): ', (jawaban) => {
                        if (jawaban.toLowerCase() === 'ya') {
                            mengelolaMenu();
                        } else {
                            mainLobby();
                        }
                    });
                });
            } else {
                console.log("Opsi tidak valid, pilihlah opsi yang valid");
                mengelolaMenu();
            }
        });
    });
}

function tampilkanMenu() {
    console.log("Menu Warung Kopi adalah:");
    menu.forEach(item => {
        console.log(`${item.id}. ${item.name} - Rp${item.price}, Stock ${item.stock}`);
    });
}

function menerimaPesanan() {
    tampilkanMenu();

    function memesanUlang() {
        rl.question('Ingin memesan lagi? (ya / tidak): ', (jawaban) => {
            if (jawaban.toLowerCase() === 'ya') {
                menerimaPesanan();
            } else {
                pesananUlang();
            }
        });
    }

    function pesananUlang() {
        console.log("Pesanan Anda:");
        pesananPelanggan.forEach(pesanan => {
            const menuTerpilih = menu.find(item => item.id === pesanan.idMenu);
            const harga = menuTerpilih.price 
            console.log(`${menuTerpilih.name} - Rp${harga}, Jumlah: ${pesanan.jumlah}`);
        });
        mainLobby();
    }

    rl.question("Masukkan id menu yang ingin dipesan: ", function (idMenu) {
        const menuTerpilih = menu.find(item => item.id === parseInt(idMenu));
        if (!menuTerpilih) {
            console.log("Menu tidak ditemukan");
            mainLobby();
            return;
        }

        rl.question(`Masukkan jumlah ${menuTerpilih.name} yang ingin dipesan: `, function (jumlah) {
            const jumlahPesanan = parseInt(jumlah);
            if (isNaN(jumlahPesanan) || jumlahPesanan <= 0) {
                console.log("Jumlah pesanan tidak valid.");
                memesanUlang();
            } else if (menuTerpilih.stock < jumlahPesanan) {
                console.log("Stok tidak mencukupi.");
                memesanUlang();
            } else {
                pesananPelanggan.push({ idMenu: menuTerpilih.id, nama: menuTerpilih.name, jumlah: jumlahPesanan });
                console.log(`Pesanan Anda: ${jumlahPesanan} ${menuTerpilih.name}.`);
                menuTerpilih.stock -= jumlahPesanan;
                memesanUlang();
            }
        });
    });
}

function menghitungTotalPemesanan(pesananPelanggan) {
    let totalHarga = 0;
    pesananPelanggan.forEach(pesanan => {
        const menuTerpilih = menu.find(item => item.id === pesanan.idMenu);
        if (menuTerpilih) {
            const harga = menuTerpilih.price * pesanan.jumlah;
            totalHarga += harga;
        }
    });
    return totalHarga;
}

function totalPesanan(pesananPelanggan) { 
    let total = menghitungTotalPemesanan(pesananPelanggan);
    console.log(`Total Harga Dari Seluruh Pesanan: Rp${total}`);
    mainLobby()
}

function melacakstock() {
    console.log("Menu Warung Kopi:");
    menu.forEach(item => {
        console.log(`${item.id}. ${item.name}, Stock ${item.stock}`);
    });
    mainLobby()
}

function riwayatPesanan(){
    console.log("Riwayat pemesanan:");
    console.log(pesananPelanggan)
    mainLobby()
}

function mainLobby() {
    console.log('\nMenu Pilihan Warung Kopi: ');
    console.log('1. Mengelola Inventaris Produk');
    console.log('2. Menerima Pesanan Pelanggan');
    console.log(`3. Melacak Stock Barang`)
    console.log(`4. Riwayat Pembelian Produk`)
    console.log(`5. Menghitung Total Harga Seluruh Belanjaan`)
    console.log('6. Keluar');

    rl.question('Selamat datang di program Warung Kopi, Silahkan pilih perintah (Masukan Dengan Angka): ', (pilihan) => {
        switch (pilihan) {
            case '1':
                mengelolaMenu();
                break;
            case '2':
                menerimaPesanan();
                break;
            case '3':
                melacakstock();
                break;;
            case '4':
                riwayatPesanan();
                break;
            case '5':
                totalPesanan(pesananPelanggan);
                break;
            case '6':
                console.log(`Terima kasih sudah mengunjungi Warung Kopi Kami`)
                rl.close();
                break;
            default:
                console.log('Menu yang Anda masukkan tidak valid, silakan pilih menu yang valid');
                mainLobby();
                break;
        }
    });
}

mainLobby();