const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan angka pertama: ", (int) => {
rl.question("Masukkan angka  kedua: ", (desc) =>{
rl.question("Masukkan angka  ketiga: ", (str) =>{
    const strInt1 = parseInt (int);
    const strInt2 = parseInt (desc);
    const strInt3 = parseInt (str);
    const jumlah = strInt1 * strInt2 * strInt3;
    console.log(jumlah);
    rl.close();
});
});
});