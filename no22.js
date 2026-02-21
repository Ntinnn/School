const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const books = ["Omniscient reader","Help! Im Scared!","Ranked's Return"];
rl.question("Halo! Selamat datang kembali di perpus Kami!\nIsi Judul Buku yang kamu ingin pinjam ", (input) => {
    const buku = input;
    if (books.includes(buku)){
        rl.question("Buku Ada, Tolong masukkan jumlah buku yang ingin di pinjamkan ", (jumlah)=>{
            const jumBuk = parseInt(jumlah);
            if (jumBuk <= 10){
                console.log(`Kamu meminjam buku sebanyak ${jumBuk} dengan judul ${buku}`);
            } else {
                console.log("Bukunya sedang di pinjamkan oleh orang lain");
            }
            rl.close();
        });
    } else {
        console.log("Buku tidak ada / tersedia dalam list");
        rl.close();
    }
})