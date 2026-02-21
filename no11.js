const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let kurir
rl.question("Masukan jenis pengiriman yang ingin Kamu pilih (Regular,Express,Kilat) " , (input) => {
    kurir = input.toLowerCase()
    if (kurir == "regular") {
        console.log("Paket Kamu akan sampai dalam 10 hari")
    } else if (kurir == "express") {
        console.log("Paket kamu akan sampai dalam 5 Hari")
    } else if (kurir == "kilat") {
        console.log("Paket kamu akan sampai dalam 1 menit")
    } else {
        console.log("Opsi Pengiriman yang Kamu pilih tidak Valid / Cocok")
    }
    rl.close();
});