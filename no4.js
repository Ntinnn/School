const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan sebuah angka: ", (desc) =>{
    const strInt = parseFloat(desc);
    console.log(desc)
    console.log(typeof string);
    console.log(strInt);
    console.log(typeof strInt);
    rl.close();
});