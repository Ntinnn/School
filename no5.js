const readline = require('readline');
const charaSamuraiX = [
    { nama: "Kaoru Kamiya", jenisKelamin: "Perempuan", Peran: "Protagonis"},
    { nama: "Kenshin Himura", jenisKelamin: "Laki - Laki", Peran: "Protagonis"},
    { nama: "Shishio Makoto", jenisKelamin: "Laki - Laki", Peran: "Antagonis"},
];

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function tampilkanDaftarKarakterBerdasarkanJenisKelamin() {
    rl.question("Masukkan Jenis Kelamin Karakter: ", (jenisKelamin) => {
        const karakterBerdasarkanJenisKelamin = charaSamuraiX.filter(chara => chara.jenisKelamin === jenisKelamin);
        if (karakterBerdasarkanJenisKelamin.length > 0) {
            console.log("Daftar Karakter berdasarkan Jenis Kelamin: ");
            karakterBerdasarkanJenisKelamin.forEach(chara => {
                console.log(`Nama: ${chara.nama}, Jenis Kelamin: ${chara.jenisKelamin}, Peran: ${chara.Peran}`);
            });
        } else {
            console.log("Tidak ada Karakter dengan Jenis Kelamin tersebut.");
        }
        rl.close();
    });
}

function tampilkanDaftarKarakterBerdasarkanPeran() {
    rl.question("Masukkan Peran Karakter (Protagonis/Antagonis): ", (Peran) => {
        const karakterBerdasarkanPeran = charaSamuraiX.filter(karakter => karakter.Peran === Peran);
        if(karakterBerdasarkanPeran.length > 0) {
            console.log("Daftar Karakter berdasarkan Peran: ");
            karakterBerdasarkanPeran.forEach(chara => {
                console.log(`Nama: ${chara.nama}, Jenis Kelamin: ${chara.jenisKelamin}, Peran: ${chara.Peran}`);
            });
        } else {
            console.log("Karakter dengan Peran tersebut tidak ada.");
        }
        rl.close();
    });
}

console.log("Pilih Nomor: ");
console.log("1. Menampilkan Daftar Karakter dengan Jenis Kelamin");
console.log("2. Menampilkan Daftar Karakter dengan Peran");

rl.question("Masukkan Nomor: ", (Nomor) => {
    if(Nomor === "1"){
        tampilkanDaftarKarakterBerdasarkanJenisKelamin();
    } else if(Nomor === "2"){
        tampilkanDaftarKarakterBerdasarkanPeran();
    } else {
        console.log("Nomor Operasi tidak Valid/Cocok");
        rl.close();
    }
});