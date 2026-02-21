const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function angkaGenap (angka){
    if (angka % 2 !== 0) {
        console.log ("Angka " + angka + "adalah angka ganjil");
    } if (angka % 2 === 0) {
        console.log ("Angka " + angka + "adalah angka genap");
    }
}

rl.question("Masukkan angka :", (angka) => {
    angka = parseInt(angka);
    angkaGenap(angka);
    rl.close();
});