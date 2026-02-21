const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan angka yang ingin disimpan: ", (int) => {
    let total = 5;
    console.log("Nilai awal :", total)
    total *= parseInt(int);
    console.log(`Hasil pengkalian: ${total}`)
    rl.close();
});