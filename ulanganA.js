// Const readline berguna untuk sistem yang di tanyakan
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Ini untuk memberi tahu info info dari barang kita
const Barang = [
    { id: "1", nama: "Baju Adat", harga: 50000 },
    { id: "2", nama: "Baju Batik", harga: 20000 },
    { id: "3", nama: "Baju Renang", harga: 25000 },
];

// sistem untuk menampung riwayat pemesanan
const riwayatPesanan = [];
let totalPembayaran = 0;

// ini untuk menampilkan barang yang ada
function tampilkanBarang() {
    console.log("Barang Toko:");
    for (const id in Barang) {
        console.log(`${id}. ${Barang[id].nama} - Rp${Barang[id].harga}`);
    }
    mainBarang();
}

// ini untuk menambahkan barang yang ingin di tambahkan
function tambahBarang() {
    rl.question("Masukkan nama Barang baru: ", function (namaBarang) {
        rl.question("Masukkan harga Barang baru: ", function (hargaBarang) {
            const idBarang = (Barang.length + 1).toString();
            const newBarang = { id: idBarang, nama: namaBarang, harga: parseInt(hargaBarang) };
            Barang.push(newBarang);
            console.log(`Barang '${namaBarang}' telah ditambahkan.`);
            tampilkanBarang();
            rl.question('Tambah Barang (y/n): ', (jawaban) => {
                if (jawaban.toLowerCase() === 'y') {
                    tambahBarang();
                }else{
                    mainBarang();
                }
            });
        });
    });
}

// ini untuk mengubah barang yang ada
function ubahBarang() {
    tampilkanBarang();
    rl.question("Masukkan ID Barang yang ingin diubah: ", function (idBarang) {
        const BarangTerpilih = Barang.find(item => item.id === idBarang);
        if (!BarangTerpilih) {
            console.log("Barang tidak ditemukan.");
            mainBarang();
            return;
        }
        rl.question("Masukkan nama Barang baru (kosongkan jika tidak ingin diubah): ", function (namaBarangBaru) {
            rl.question("Masukkan harga Barang baru (kosongkan jika tidak ingin diubah): ", function (hargaBarangBaru) {
                if (namaBarangBaru) {
                    BarangTerpilih.nama = namaBarangBaru;
                }
                if (hargaBarangBaru) {
                    BarangTerpilih.harga = parseInt(hargaBarangBaru);
                }
                console.log(`Barang dengan ID ${idBarang} telah diubah.`);
                tampilkanBarang();
                rl.question('Edit Barang (y/n): ', (jawaban) => {
                    if (jawaban.toLowerCase() === 'y'){
                        ubahBarang();
                    }else{
                        mainBarang();
                    }
                });
            });
        });
    });
}

// ini untuk menambahkan pesanan
function tambahPesanan(id, jumlah) {
    const BarangTerpilih = Barang.find(item => item.id === id);
    if (!BarangTerpilih) {
        console.log("Barang tidak ditemukan.");
        return;
    }
    const totalHarga = BarangTerpilih.harga * jumlah;
    riwayatPesanan.push({ Barang: BarangTerpilih, jumlah: jumlah, totalHarga: totalHarga });
    totalPembayaran += totalHarga;
    console.log(`Pesanan ${BarangTerpilih.nama} (${jumlah}x) telah ditambahkan.`);
}

// ini untuk menampilkan pesanan yang telah di pesan
function tampilkanRiwayatPesanan() {
    console.log("Riwayat Pesanan:");
    riwayatPesanan.forEach((pesanan, index) => {
        console.log(`${index + 1}. ${pesanan.Barang.nama} (${pesanan.jumlah}x) - Total: Rp${pesanan.totalHarga}`);
    });
}

// untuk menghitung
function hitungTotalPembayaran() {
    return totalPembayaran;
}

// untuk menutup bill
function tutupBill() {
    console.log("Bill saat ini:");
    tampilkanRiwayatPesanan();
    const totalPembayaranSaatIni = hitungTotalPembayaran();
    console.log(`Total Pembayaran saat ini: Rp${totalPembayaranSaatIni}`);
    totalPembayaran = 0;
    riwayatPesanan.length = 0;
    console.log("Bill telah ditutup. Silakan buat bill pesanan baru.");
}

// ini untuk menampilkan sistem sistem yang tadi telah kita buat
function mainBarang() {
    console.log("Aplikasi Manajemen Toko");
    console.log("1. Tampilkan Barang");
    console.log("2. Tambah Barang");
    console.log("3. Edit Barang");
    console.log("4. Tambah Pesanan");
    console.log("5. Tutup Bill");
    console.log("6. Keluar");
    rl.question("Pilih tindakan (1/2/3/4/5/6): ", function (pilihan) {
        if (pilihan === "1") {
            tampilkanBarang();
        }else if (pilihan === "2"){
            tambahBarang();
        }else if (pilihan === "3"){
            ubahBarang();
        }else if (pilihan === "4") {
            rl.question("Masukkan ID Barang yang ingin dipesan: ", function (id) {
                rl.question("Jumlah yang ingin dipesan: ", function (jumlah) {
                    tambahPesanan(id, parseInt(jumlah));
                    mainBarang();
                });
            });
        } else if (pilihan === "5") {
            tutupBill();
            mainBarang();
        } else if (pilihan === "6") {
            console.log("Terima kasih!");
            rl.close();
        } else {
            console.log("Pilihan tidak valid. Silakan coba lagi.");
            mainBarang();
        }
    });
}

mainBarang();