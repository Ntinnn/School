const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukan total belanja yang Kamu beli ", (input) => {
    total= parseFloat(input);
    if (input >= 200000) {
        diskon = input - input/10;
        console.log(`Kamu akan mendapatan diskon 100%,Kamu hanya perlu bayar ${diskon}`);
    } else {
        console.log(`Total yang perlu Anda bayar adalah ${total}`);
    }
        rl.close();
})