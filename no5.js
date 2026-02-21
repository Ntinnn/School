const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan angka pertama : ", (int) => {
rl.question("Masukkan angka kedua : ", (desc) =>{
    const strInt1 = parseInt (int);
    const strInt2 = parseInt (desc);
    const jumlah = strInt1 + strInt2;
    console.log(jumlah)
    rl.close();
});
});