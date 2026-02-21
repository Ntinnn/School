const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let number,nonprima
rl.question("Masukan angka:", (angka) => {
    number = parseInt(angka)
    if (number <=1) {
        nonprima = number
    } if (number % 2 == 0 && number>2) {
        nonprima = number
    } if (number % 3 == 0 && number>3) {
        nonprima = number
    } if (number % 5 == 0 && number>5) {
        nonprima = number
    } if (number % 7 == 0 && number>7) {
        nonprima = number
    } if (number != nonprima) {
        console.log(`${number} adalah Bilangan Prima`);
    } if (number == nonprima) {
        console.log(`${number} adalah Bukan Bilangan Prima`);
    }
    rl.close()
})