const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan angka: ", (int) => {

        let strInt1 = parseInt (int);
        let x = 5;
        let y = 10;
        if(strInt1>x && strInt1 <y){
            console.log(`angka ${int} sesuai ketentuan`);
        } else {
            console.log(`angka ${int} tidak sesuai ketentuan`);
        }
        rl.close();
});