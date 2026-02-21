const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan angka pertama: ", (int) => {
rl.question("Masukkan angka  kedua: ", (desc) =>{
rl.question("Masukkan angka  ketiga: ", (str) =>{
    let a = parseInt (int);
    let b = parseInt (desc);
    let c = parseInt (str);
    let jumlah = (a + b);
    let jumlah1 = (jumlah * c);
    console.log(jumlah1);
    rl.close();
});
});
});