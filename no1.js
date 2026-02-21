setTimeout(function() {
    console.log("Langkah ketiga: saya akan dicetak terakhir setelah 3 detik.");
}, 3);

setTimeout(function() {
    console.log("Langkah pertama: saya akan dicetak terlebih dahulu");
});

setTimeout(function() {
    console.log("Langkah kedua: saya akan dicetak kedua setelah 2 detik");
}, 2);