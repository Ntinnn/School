const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var myArray = [];
console.log(myArray);

myArray.push(10,20,30,40,50);
console.log(myArray);

// yang menghapus
myArray.pop();
console.log(myArray);

rl.close();