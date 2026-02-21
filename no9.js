const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukan nilai Kamu " , (nilai) => {
    if(nilai > 70){
        console.log("Selamat!!! Kamu mendapatkan Beasiswa!!!")
    } else {
        console.log("Turut bersedih... Kamu tidak mendapatkan Beasiswa...")
    }
    rl.close();
});