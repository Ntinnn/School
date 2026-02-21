const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question(`Halo! Selamat datang di restoran Indonesia!\nSilahkan pilih menu yang kamu mau: \n1.Nasi Goreng \n2.Udang Tepung Goreng \n3.Soto Kambing \n4.Jus Stroberi \n5.Air Putih\n
Masukan pilihan menu yang Kamu pilih: `, (menu) => {
    if(menu === '1') {
        console.log("Anda telat memesan menu Nasi Goreng.");
    }if (menu === '2') {
        console.log("Anda telah memesan menu Udang Tepung Goreng.");
    } if(menu === '3') {
        console.log("Anda telah memesan menu Soto Kambing.");
    } if(menu === '4') {
        console.log("Anda telah memesan menu Just Stroberi.");
    } if(menu === '5') {
        console.log("Anda telah memesan menu Air Putih.");
    } 
    rl.close()
});