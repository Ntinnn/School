function isPrime(number) {
    if (number <= 1) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

const angka = 9;
if (isPrime(angka)) {
    console.log(angka + " adalah bilangan prima");
} else {
    console.log(angka + " bukan bilangan prima");
}