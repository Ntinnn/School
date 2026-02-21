const readline = require(`readline`);
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var total = {};
let i = 0;

rl.question(`Jumlah barang yang ingin Kamu masukkan ke stok ;`, (jumlah) => {
    let inputTotal = () => {
        rl.question(`Masukkan nama barang ;`, (namaBarang) => {
            rl.question(`Jumlah bertambah untuk setiap barang ${namaBarang} ;`, (tambahBarang) => {
                tambahBarang = Number(tambahBarang);
                total[namaBarang] = tambahBarang;
                i++;
                if (i < jumlah) {
                    inputTotal();
                } else {
                    let totalNama = [];
                    let totalBarang = 0;
                    for (let [namaBarang, tambahBarang] of Object.entries(total)) {
                        totalNama.push(namaBarang)
                        totalBarang += tambahBarang;
                    }
                    console.log(`Total penambahan ${totalNama.join(`, `)}: ${totalBarang}`);
                    rl.close();
                };
            });
        });
    };
    inputTotal();
});
