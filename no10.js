cars = [
    { merek: "Chevrolet", tahun: 2022, harga: "Rp 800 juta"},
    { merek: "Audi", tahun: 2022, harga: "Rp 900 juta"},
    { merek: "Honda", tahun: 2022, harga: "Rp 400 juta"},
    { merek: "Nissan", tahun: 2023, harga: "Rp 350 juta"},
    { merek: "Subaru", tahun: 2022 , harga: "Rp 550 juta"}
]

arrayMerek = cars.map(item => {
    return item.merek
});
console.log(arrayMerek)