const readline = require(`readline`);
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var belanja = {};
let i = 0;

rl.question("Isi jumlah item yang Kamu dibeli; ", (jumlahItem) => {
    let inputItem = () => {
        rl.question("Isi nama item; ",(namaItem) => {
        rl.question("Isi harga item; ",(hargaItem) => {
            rl.question(`Isi jumlah ${namaItem}:`,(totalItem) => {
                let totalHargaItems = hargaItem * totalItem;
                belanja[namaItem] = totalHargaItems;
                i++;
                if(i < jumlahItem){
                    inputItem();
                } else {
                    let arrItem = [];
                    let totalHarga = 0;
                    for(let[namaItem,totalHargaItem] of Object.entries(belanja)) {
                        arrItem.push(namaItem);
                        totalHarga += totalHargaItem;
                    }
                    console.log(`Total belanja Kamu ${arrItem.join(',')}: ${totalHarga}`);
                    if(totalHarga > 500000) {
                        totalHarga *= 0.9;
                        console.log('Selamat!!! Kamu mendapatkan diskon!!');
                        console.log(`Total belanja menjadi ${totalHarga}`);
                    } else {
                        console.log('Maaf... Kamu tidak mendapatkan diskon...');
                    }
                    rl.close();
                };
            });
        });
    });
    };
    inputItem();
});