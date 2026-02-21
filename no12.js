fruits = [
    { nama: "Apel", warna: "Merah", rasa: "Manis dan Sedikit Asam"},
    { nama: "Stroberi", warna: "Merah", rasa: "Manis dan Sedikit Asam"},
    { nama: "Jeruk", warna: "Oranye", rasa: "Manis dan Segar"},
    { nama: "Mangga", warna: "Kuning", rasa: "Manis dan Aromatik"},
    { nama: "Anggur", warna: "Merah", rasa: "Manis"}
]

namaBuah = fruits.map(buah => {
    return buah.nama
})
console.log(namaBuah)