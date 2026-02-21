const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Isi kolom ini dengan usia Kamu ", (usia) => {
    rl.question("Pilih filmnya sesuai umur (Dewasa/Anak anak) ",(jenis)=>{
        hargaDewasa = 120000;
        hargaAnakKecil = 70000;

        if (jenis === 'dewasa') {
            if (usia >= 20){
                console.log(`Harga tiket Dewasa Sebesar Rp${hargaDewasa}`);
            } else {
                console.log("Film dewasa hanya untuk umur 20+")
            }
        } else if (jenis === 'anak anak'){
            if (usia <= 12) {
                console.log(`Harga tiket anak anak sekitar Rp${hargaAnakKecil}`);
            } else {
                console.log("Harga tiket anak anak hanya berlaku untuk anak kecil / anak anak di bawah umur");
            }
        } else {
            console.log("Jenis film yang Kamu pilih tidak valid");
        }
        rl.close();
    });
});