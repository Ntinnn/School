const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukan angka: ", function(input){
    const angka = parseInt(input)
    let i = 1

    do{
        console.log(i)
        i+=2
    } while(i>0 && i <= angka)
    rl.close()
})