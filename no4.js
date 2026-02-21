const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let jawaban = 0;
rl.question('Halo! Selamat datang di Perpus! \n Apakah Kamu ingin meminjam sebuah Buku? (Ya/Tidak):', (input) => {
    rl.question('Berapa buku yang ingin Kamu pinjam?',(input1) => {
        input.toLowerCase() === 'Ya'
        jawaban = parseInt (input1);
        if (jawaban > 6) {
            console.log('Kami tidak bisa meminjamkan buku Sebanyak itu');
        }
        rl.close();
    });
});