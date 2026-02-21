const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let tujuan;
rl.question ("Pilih nomor menu dari 1-5 ", (input) => {
    tujuan = parseInt(input)
    switch (tujuan) {
        case 1:
            console.log("Tempat : Belgia");
            console.log("Harga : Rp 80.000.000");
            console.log("Fasilitas : Hotel Mevvah ,dapat makanan pagi dan sore, mengeksplor berbagai tempat di belgia");
            break;
        case 2:
            console.log("Tempat : China");
            console.log("Harga : Rp 40.000.000");
            console.log("Fasilitas : Villa Khusus ,dapat makanan pagi dan sore, mengeksplor ke Beijing");
            break;
        case 3:
            console.log("Tempat : Arab");
            console.log("Harga : Rp 20.000.000");
            console.log("Fasilitas : Hotel biasa, dapat makanan pagi dan sore, mengeksplor berbagai tempat di Arab");
        case 4:
            console.log("Tempat : Los Angles");
            console.log("Harga : Rp 50.000.000");
            console.log("Fasilitas : Villa Mevvah ,dapat makanan pagi,sore dan malam, mengeksplor berbagai tempat di L.A");
            break;
        case 5:
            console.log("Tempat : Belanda");
            console.log("Harga : Rp 100.000.000");
            console.log("Fasilitas : Hotel Mevvah ,dapat makanan pagi dan sore, mengeksplor berbagai tempat di Belanda");
            break;
        default:
            console.log("Nomor tujuan tidak valid / cocok");
            break;
    }
    rl.close();
});