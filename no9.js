animals = [
    { nama: "Sparky", jenis: "Anjing", suara: "Guk Guk"},
    { nama: "Whiskers", jenis: "Kucing", suara: "Meong Meong"},
    { nama: "Polly", jenis: "Burung Kakatua", suara: "Krak Krak"}
]
animals.forEach(item => {
    console.log(`Suara Hewan : ${item.suara}`)
});
