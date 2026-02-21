const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let transportasi;
rl.question("Pilih jenis transportasi yang kamu pilih (Kereta, Bus, Pesawat) ", (input) => {
    transportasi = input.toLowerCase()
    if (transportasi == "kereta") {
        console.log ("Transportasi yang Kamu pilih akan sampai dalam waktu 7 Jam dengan harga Rp 200000")
    } else if (transportasi == "bus") {
        console.log ("Transportasi yang Kamu pilih akan sampai dalam waktu 10 Jam dengan harga Rp 50000")
    } else if (transportasi == "pesawat") {
        console.log ("Transportasi yang Kamu pilih akan sampai dalam waktu 4 Jam dengan harga Rp 700000")
    } else {
        console.log("Transportasi yang kamu pilih tidak valid / cocok")
    }
    rl.close()
});