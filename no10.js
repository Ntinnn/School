const perpustakaan = [];

function tambahBuku(judul, penulis, tahun, jumlahSalinan, nilai) {
    const buku = {
        judul: judul,
        penulis: penulis,
        tahun: tahun,
        jumlahSalinan: jumlahSalinan,
        nilai: nilai
    };
    perpustakaan.push(buku);
    console.log(`Buku dengan judul"${judul}" sudah ditambahkan ke perpustakaan.`);
}

function hapusBuku(judul) {
    const index = perpustakaan.findIndex(buku => buku.judul === judul);
    if (index !== -1) {
        perpustakaan.splice(index, 1);
        console.log(`Buku dengan judul "${judul}" sudah dihapus dari perpustakaan.`);
    } else {
        console.log(`Buku yang berjudul "${judul}" tidak ditemukan dalam perpustakaan.`);
    }
}

function lihatDaftarBuku() {
    if (perpustakaan.length === 0) {
        console.log("Perpustakaan kosong.");
    } else {
        console.log("Daftar Buku di Perpustakaan:");
        perpustakaan.forEach((buku, index) => {
            console.log(`${index + 1}. Judul: ${buku.judul}, Penulis: ${buku.penulis}, Tahun: ${buku.tahun}`);
        });
    }
}

function updateBuku(judul, newData) {
    const buku = perpustakaan.find(buku => buku.judul === judul);
    if (buku) {
        Object.assign(buku, newData);
        console.log(`Informasi buku "${judul}" telah diperbarui.`);
    } else {
        console.log(`Buku dengan judul "${judul}" tidak ditemukan dalam perpustakaan.`);
    }
}

function totalNilaiBuku() {
    let total = 0;
    perpustakaan.forEach(buku => {
        total += buku.nilai * buku.jumlahSalinan;
    });
    return total;
}

tambahBuku("Doraemon", "Fujiko F Fujio", 1970, 9, 3);
tambahBuku("Inuyasha", "Rumiko Takahashi", 1996, 11, 13);
lihatDaftarBuku();
hapusBuku("Doraemon");
lihatDaftarBuku();
updateBuku("Inuyasha", { jumlahSalinan: 6 });
lihatDaftarBuku();
console.log("Total Nilai Buku di Perpustakaan:", totalNilaiBuku());