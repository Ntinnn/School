const players = ["Lionel Messi", "Cristiano Ronaldo", "Neymar Jr.", "Kylian Mbappé",
"Sergio Ramos"];
const clubs = ["Paris Saint-Germain", "Manchester United", "Barcelona", "Paris Saint-Germain", "Paris Saint-Germain"];
const countries = ["Argentina", "Portugal", "Brazil", "France", "Spain"];

const penggabunganData = players.map((player, index) => ({
    Nama: player,
    Club: clubs[index],
    Negara: countries[index]
}));
console.log(penggabunganData);