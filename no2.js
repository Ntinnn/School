const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let fruits = ["apel","jeruk","pisang"];
console.log(fruits);

fruits.unshift("anggur","markisa","srikaya");
console.log("Buah yang di tambah: ",fruits);

fruits.shift();
console.log("Buah yang di hapus: ",fruits);