const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let menu;
rl.question ("Pilih nomor menu dari 1-5 ", (input) => {
    menu = parseInt(input)
    switch (menu) {
        case 1:
            console.log("Anda telah memilih Pecel Lele");
            break;
        case 2:
            console.log("Anda telah memilih Ayam Goreng");
            break;
        case 3:
            console.log("Anda telah memilih Soto Kambing");
            break;
        case 4:
            console.log("Anda telah memilih Jus Stroberi");
            break;
        case 5:
            console.log("Anda telah memilih Gado Gado");
            break;
        default:
            console.log("Nomor tidak ada di dalam menu");
            break;
    }
    rl.close();
});