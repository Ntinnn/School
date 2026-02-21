const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let jenis;
rl.question("Isi berat barang yang ingin di kirim (Kg) ", (berat)=>{
    rl.question("Pilih jenis jenis pengiriman dari nomor 1-3 (regular,Ekspress,Kilat) ",(input)=>{
        jenis = parseInt(input)
        a=10000*berat
        b=20000*berat
        c=30000*berat
        switch(jenis) {
        case 1:
            console.log(`Barang dengan berat ${berat} Kg akan membutuhkan biaya ${a}`);
            break;
        case 2:
            console.log(`Barang dengan berat ${berat} Kg akan membutuhkan biaya ${b}`);
            break;
        case 3:
            console.log(`Barang dengan berat ${berat} Kg akan membutuhkan biaya ${c}`);
            break;
        default:
            console.log("jenis dalam pengiriman tidak valid / cocok");
            break;
        }
        rl.close();
    })
})