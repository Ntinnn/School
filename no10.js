const readline = require(`readline`);
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var menu = {};
let i = 0;
rl.question(`Isi dengan jumlah menu yang ingin kamu pesan `, (jumlahMenu) => {
    let inputMenu = () => {
      rl.question(`Isi nama menu yang Kamu mau ;`, (namaMenu) => {
          rl.question(`Isi harga menu yang Kamu pesan ${namaMenu} ;`, (hargaMenu) => {
              hargaMenu = Number(hargaMenu);
              menu[namaMenu] = hargaMenu;
              i++;
              if (i < jumlahMenu) {
                  inputMenu();
              } else {
                  let totalMenu = [];
                  let totalHarga = 0;
                  for (let [namaMenu, hargaMenu] of Object.entries(menu)) {
                      totalMenu.push(namaMenu)
                      totalHarga += hargaMenu;
                  }
                  console.log(`Total penjumlahan biaya untuk pembelian ${totalMenu.join(`, `)}; Rp ${totalHarga}`);
                  rl.close();
              };
          });
       });
    };
    inputMenu();
});
