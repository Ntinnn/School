const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukan angka: ", function(input){
    const angka = parseInt(input)
    let i = 0

     while(angka>0 && i <= angka){
        console.log(i)
        i+=2
     }
    rl.close()
})