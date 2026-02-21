const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question ("Masukan umur Kamu " , (umur) => {
    rl.question("Masukan tujuan Kamu ", (tujuan) => {
        let harga;
        if (umur >= 20 && tujuan === 'Bekasi') {
            harga = 150000;
        } else if (umur >= 20 && tujuan === 'Bogor') {
            harga = 250000;
        } else if (umur >= 20 && tujuan === 'Papua') {
            harga = 580000;
        } else if (umur >= 20 && tujuan === 'Jawa Timur') {
            harga = 300000;
        } else if (umur < 20 && tujuan === 'Cirebon') {
            harga = 50000;
        } else if (umur < 20 && tujuan === 'Arab') {
            harga = 90000;
        } else if (umur < 20 && tujuan === 'Jakarta') {
            harga = 70000;
        }
        console.log(`Harga tiket yang kamu pilih adalah Rp${harga}`);
        rl.close();
    });
});