const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan umur Kamu ", (umur) => {
    if(umur >=20){
        console.log("Kamu akan mendapatkan hadiah setelah membeli barang yang kamu ingin beli!")
    }
})