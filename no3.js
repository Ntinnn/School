const readline = require('readline');

const anggotaJKT48 = [
    {nama: "Freya Jayawardana", posisi: "Dancer", umur: 17},
    {nama: "Shania Gracia", posisi: "Dancar", umur: 24},
    {nama: "Shani Indira Natio", posisi: "Singer", umur: 24},
];

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function tampilkanDaftarAnggotaBerdasarkanPosisi(){
    rl.question("Masukkan posisi anggota (Singer/Dancer): ", (posisi) =>{
        const BerdasarkanPosisi = anggotaJKT48.filter(anggota => anggota.posisi === posisi);
        if(BerdasarkanPosisi.length > 0) {
            console.log("Daftar Anggota berdasarkan Posisi:");
            BerdasarkanPosisi.forEach(anggota => {
                console.log (`Nama: ${anggota.nama}, Posisi: ${anggota.posisi}, Umur: ${anggota.umur} Tahun`);
            });
        } else {
            console.log("Tidak ada anggota dengan posisi tersebut.");
        }
        rl.close();
    });
}

function tampilkanDaftarAnggotaBerdasarkanUmur() {
    rl.question("Masukkan rentang umur (17-27): ", (rentangUmur) =>{
        const [umurMin,umurMax] = rentangUmur.split("-").map(Number);
        const anggotaBerdasarkanUmur = anggotaJKT48.filter(anggota => anggota.umur >= umurMin && anggota.umur <= umurMax);
        if (anggotaBerdasarkanUmur.length > 0){
            console.log("Daftar Anggota berdasarkan Umur:");
            anggotaBerdasarkanUmur.forEach(anggota => {
                console.log (`Nama: ${anggota.nama}, Posisi: ${anggota.posisi}, Umur: ${anggota.umur} Tahun`);
            });
        } else {
            console.log("Tidak ada anggota dalam rentang umur tersebut.");
        }
        rl.close();
    });
}

console.log("Pilih Nomor:");
console.log("1. Menampilkan Daftar Anggota berdasarkan Posisi");
console.log("2. Menampilkan Daftar Anggota berdasarkan Umur");

rl.question("Masukkan Nomor Pilihan: ", (opsi) => {
    if(opsi === "1"){
        tampilkanDaftarAnggotaBerdasarkanPosisi();
    } else if(opsi === "2") {
        tampilkanDaftarAnggotaBerdasarkanUmur();
    } else {
        console.log("Nomor Pilihan yang Anda Pilih Tidak Valid.");
        rl.close();
    };
});