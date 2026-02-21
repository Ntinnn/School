const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan angka desimal pertama : ", (int) => {
rl.question("Masukkan angka desimal kedua : ", (desc) =>{
    const strInt1 = parseFloat (int);
    const strInt2 = parseFloat (desc);
    const jumlah = strInt1 - strInt2;
    console.log(jumlah)
    rl.close();
});
});