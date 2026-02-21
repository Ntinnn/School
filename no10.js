const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan angka pertama: ", (int) => {
    let nilai = Number (int);
    console.log(`Angka yang disimpan: ${nilai}`)
    rl.close();
});
