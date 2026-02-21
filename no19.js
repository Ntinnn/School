const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let nilai, absen;
rl.question("Jumlah absen Kamu dalam sebulan ", (day)=>{
    nilai = parseInt(day)
    absen = nilai > 20 ? 'Hadir' : 'Tidak Hadir'
    console.log(absen);
    rl.close()
})