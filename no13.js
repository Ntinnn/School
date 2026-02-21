animals = [
    { nama: "Leo", jenis: "Singa", jumlahKaki: 4},
    { nama: "Polly", jenis: "Burung Kakatua", jumlahKaki: 2},
    { nama: "Bella", jenis: "Anjing", jumlahKaki: 2},
    { nama: "Whiskers", jenis: "Whiskers", jumlahKaki: 4 }
]

jumlahKaki = animals.filter(hewan => {
    return hewan.jumlahKaki > 4
})
console.log(jumlahKaki)