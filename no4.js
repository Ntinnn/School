const readline = require('readline');
const charaSlamDunk = [
    { nama: "Tetsushi Shiozaki", posisi: "Power forward", poin: 16},
    { nama: "Yasuharu Yasuda", posisi: "Point Guard", poin: 15},
    { nama: "Kiminobu Kogure", posisi: "Small Forward", poin: 19},
];

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function tampilkanDaftarKarakterBerdasarkanPosisi() {
    rl.question("Masukkan posisi pemain 'Power Forward', 'Point Guard', 'Small Forward': ", (posisi) => {
        const karakterBerdasarkanPosisi = charaSlamDunk.filter(chara => chara.posisi === posisi);
        if (karakterBerdasarkanPosisi.length > 0) {
            console.log("Daftar Karakter berdasarkan Posisi: ");
            karakterBerdasarkanPosisi.forEach(chara => {
                console.log(`Nama: ${chara.nama}, Posisi ${chara.posisi}, Jumlah Poin: ${chara.poin}`);
            });
        } else {
            console.log("Tidak ada chara dengan posisi tersebut.");
        }
        rl.close();
    });
}

function tampilkanDaftarKarakterBerdasarkanPoin() {
    rl.question("Masukkan rentang jumlah poin (10-20): ", (rentangPoin) => {
        const [poinMin, poinMax] = rentangPoin.split ("-").map(Number);
        const karakterBerdasarkanPoin = charaSlamDunk.filter(chara => chara.poin >= poinMin && chara.poin <= poinMax);
        if(karakterBerdasarkanPoin.length > 0) {
            console.log("Daftar Karakter berdasarkan jumlah Point: ");
            karakterBerdasarkanPoin.forEach(chara => {
                console.log(`Nama: ${chara.nama}, Posisi: ${chara.posisi}, Jumlah Poin: ${chara.poin}`);
            });
        } else {
            console.log("Karakter dengan Point tersebut tidak ada.");
        }
        rl.close();
    });
}

console.log("Pilih Nomor: ");
console.log("1. Menampilkan Daftar Karakter dengan Posisi");
console.log("2. Menampilkan Daftar Karakter dengan Poin");

rl.question("Masukkan Nomor: ", (Nomor) => {
    if(Nomor === "1"){
        tampilkanDaftarKarakterBerdasarkanPosisi();
    } else if(Nomor === "2"){
        tampilkanDaftarKarakterBerdasarkanPoin();
    } else {
        console.log("Nomor Operasi tidak Valid/Cocok");
        rl.close();
    }
});