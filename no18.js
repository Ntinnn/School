const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan angka: ", (int) => {

        let strInt1 = parseInt (int);
        let x = 10;
        if(strInt1 |= x){
            console.log(`angka ${int} tidak sama dengan ${x}`);
        } else {
            console.log(`angka ${int} sama dengan ${x}`);
        }
        rl.close();
});