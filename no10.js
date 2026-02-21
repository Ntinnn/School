const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question ("Masukan nilai Kinerja Karyawan ", (input) => {
    let nilai = parseFloat(input);
    if (nilai > 100){
        console.log("Kamu mendapatkan bonus sebesar 10%.");
    } else {
        if (nilai > 80) {
            console.log("Kamu mendapatkan bonus sebesar 5%.");
        } else {
            console.log("Kamu tidak mendapatkan bonus.");
        }
    }
    rl.close();
});