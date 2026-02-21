const readline = require(`readline`);
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question(`Isi kolom ini dengan angka positif `, (angka) => {
    for (let i = 2; i < angka; i++) {
        let ganjil = false;
        for (let j = 2; j <= i; j++) {
            if (i % j == 0 && j != i) {
                ganjil = true;
            }
        }
        if (ganjil == false) {
            console.log(i);
        }
    }
})