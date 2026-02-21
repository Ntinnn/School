function pengubahan(inputString) {
    var stringBesar = inputString.toUpperCase();
    return stringBesar;
}

var teks = "tugasnya seru banget!";
var teksBesar = pengubahan(teks);
console.log("Teks yang di ubah ke huruf besar:", teksBesar);