let restoran = {
    menu : {
      nasi_goreng: 15,
      mie_goreng: 12,
      ayam_goreng: 20,
      es_teh: 3,
      es_jeruk: 4,
    },
    
    stok : {
      telur: 50,
      mie: 100,
      ayam: 30,
    },
    riwayatPesanan: [],
    tambahMenu(nama, harga) {
      this.menu[nama] = harga;
    },
    updateHargaMenu(nama, hargaBaru) {
      if (this.menu.hasOwnProperty(nama)) {
        this.menu[nama] = hargaBaru;
      } else {
        console.log("Menu tidak ditemukan.");
      }
    },
    tampilkanMenu() {
      console.log("Menu Restoran:");
      for (let item in this.menu) {
        console.log(`${item}: Rp${this.menu[item]}`);
      }
    },
    pesan(namaMenu, jumlah) {
      if (this.menu.hasOwnProperty(namaMenu)) {
        if (jumlah > 0) {
          if (this.stok[namaMenu] >= jumlah) {
            const totalHarga = this.menu[namaMenu] * jumlah;
            this.stok[namaMenu] -= jumlah;
            this.riwayatPesanan.push({ menu: namaMenu, jumlah, totalHarga });
            console.log(`Pesanan berhasil! Total harga: Rp${totalHarga}`);
          } else {
            console.log(`Stok ${namaMenu} tidak mencukupi.`);
          }
        } else {
          console.log("Jumlah pesanan harus lebih dari 0.");
        }
      } else {
        console.log("Menu tidak ditemukan.");
      }
    },
    totalPembayaran() {
      let total = 0;
      for (let pesanan of this.riwayatPesanan) {
        total += pesanan.totalHarga;
      }

      console.log(`Total Pembayaran: Rp${total}`);
    },

    tampilkanRiwayatPesanan() {
      console.log("Riwayat Pesanan:");
      for (let pesanan of this.riwayatPesanan) {
        console.log(`${pesanan.menu}: ${pesanan.jumlah} x Rp${pesanan.menu} = Rp${pesanan.totalHarga}`);
      }
    },
  };

  restoran.tambahMenu("soto", 10.000);
  restoran.tambahMenu("bakso", 12.000);
  
  restoran.tampilkanMenu();
  
  restoran.pesan("nasi_goreng", 2);
  restoran.pesan("ayam_goreng", 1);
  restoran.pesan("soto", 3);
  
  restoran.totalPembayaran();
  restoran.tampilkanRiwayatPesanan();