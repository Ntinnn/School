const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let book = ["Buku Novel", "Buku Romance","Buku Horror"];
rl.question("Halo! Kembali lagi dengan Perpus Kita!\n Tolong masukan nama buku yang ingin Kamu pinjam ", (input) => {
    let books = input;
    if (book.includes(books)){
        console.log("Buku bisa dipinjamkan.");
    } else {
        console.log ("Buku sedang dipinjam oleh orang lain.");
    }
    rl.close();
}
)