const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan angka pertama: ", (int) => {
    rl.question("Masukkan angka kedua: ", (desc) =>{
        let strInt1 = parseInt (int);
        let strInt2 = parseInt (desc);
        if(strInt1 > strInt2){
            console.log(`angka ${int} lebih besar dari angka ${desc}`);
        } else {
            console.log(`angka ${int} tidak lebih besar dari angka ${desc}`);
        }
        rl.close();
});
});