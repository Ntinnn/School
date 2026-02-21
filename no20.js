const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Isi Total Belanja Kamu ", (input)=>{
    totBelanja=parseFloat(input);
    diskon=totBelanja > 100000 ? totBelanja * 0.1 : 0;
    totSehabisDiskon = totBelanja - diskon;

    console.log (`Total Belanja Kamu Rp${totBelanja}`);
    console.log(totBelanja > 100000 ? `Kamu dapet diskon sebanyak 10% dengan harga = Rp${diskon}`: "Kamu tidak mendapatkan diskon...");
    console.log(`Total belanja Kamu setelah diskon adalah Rp${totSehabisDiskon}`);

    rl.close();
});