ciites = [
    {nama: "Jakarta", populasi: "10 Jt", negara: "Indonesia"},
    {nama: "Shanghai", populasi: "29,21 Jt", negara: "China"},
    {nama: "New York", populasi: "8,4 Jt", negara: "Amerika Serikat"},
    {nama: "Tokyo", populasi: "37,19 Jt", negara: "Jepang"},
]

namaNegara = ciites.map(country => {
    return country.negara
})
console.log(namaNegara)