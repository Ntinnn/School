const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan angka pertama: ", (int) => {
rl.question("Masukkan angka kedua: ", (desc) =>{
    let strInt1 = parseInt (int);
    let strInt2 = parseInt (desc);
    let jumlah = (strInt1 %= strInt2);
    console.log(jumlah);
    rl.close();
});
});