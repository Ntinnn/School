const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan sebuah angka: ", (string) =>{
    const strInt = parseInt(string);
    console.log(string)
    console.log(typeof string);
    console.log(strInt);
    console.log(typeof strInt);
    rl.close();
});