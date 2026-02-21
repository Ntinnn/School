const readline = require(`readline`);
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var nilai = {};
let i = 0;

rl.question(`Jumlah siswa yang ada: `, (jumlah) => {
    let inputnilai = () => {
        rl.question(`Isi nama siswa: `, (namaSiswa) => {
            rl.question(`Isi hasil nilai ujian dari si ${namaSiswa}: `, (nilaiUjian) => {
                nilaiUjian = Number(nilaiUjian);
                nilai[namaSiswa] = nilaiUjian;
                i++;
                if (i < jumlah) {
                    inputnilai();
                } else {
                    let totalNilai = 0;
                    let rataRataNilai = 0;
                    for (let [namaSiswa, nilaiUjian] of Object.entries(nilai)) {
                        totalNilai += nilaiUjian;
                        rataRataNilai = totalNilai / Object.keys(nilai).length;
                        let status;
                        nilaiUjian > 67 ?
                        status = 'Lulus':
                        status = 'Tidak Lulus';
                        console.log(namaSiswa, status);
                    }
                    console.log(`Rata-rata nilai ujian adalah: ${rataRataNilai}`);
                    rl.close();
                };
            });
        });
    };
    inputnilai();
});
