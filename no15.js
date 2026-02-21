foods = [
    {nama: "Nasi Goreng", jenis: "Makanan Berat",kalori: 400}, 
    {nama: "Soto Mie", jenis: "Makanan Berat", kalori: 297}, 
    {nama: "Buger", jenis: "Makanan Ringan", kalori: 300}, 
    {nama: "Soto Kambing", jenis: "Makanan Berat", kalori: 400},
    {nama: "Ayam Goreng", jenis: "Makanan Berat", kalori: 245}
];

kaloriMakanan = foods.filter(makanan => {
    return makanan.kalori > 300
})
console.log(kaloriMakanan)