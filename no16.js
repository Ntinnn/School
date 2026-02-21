const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question ("Masukkan angka panjang dari sisi A! ", (sisiA) => {
    rl.question("Masukkan angka panjang dari sisi B! ", (sisiB) => {
        rl.question("Masukkan angka panjang dari sisi C! ", (sisiC) => {
            a = parseFloat(sisiA);
            b = parseFloat(sisiB);
            c = parseFloat(sisiC);
            let jenis = 0;

            if (a + b > c && a + c > b && b + c > a){
                if (a === b){
                    jenis++
                } if (b === c){
                    jenis++
                } if (a === c){
                    jenis++
                }

                switch(jenis){
                    case 0:
                        console.log("Segitiga itu adalah segitiga sembarang")
                        break;
                    case 1:
                        console.log("Segitiga itu adalah segitiga sama kaki")
                        break;
                    case 3:
                        console.log("Segitiga itu adalah segitiga sama sisi")
                        break;
                    default:
                        console.log("Jenis Segitiga tersebut tidak valid / cocok.");
                        break;
                }
                rl.close();
            }
        })
    })
})