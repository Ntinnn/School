const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let nilai,umur;
rl.question('Isi kolom ini dengan umur anda ', (input)=>{
    nilai=parseFloat(input);
    umur = nilai >= 20 ? 'Kamu bisa mendaftar' : 'Kamu belum cukup umur';
    console.log(umur);
    rl.close();
});