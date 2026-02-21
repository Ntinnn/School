const myCountPromise = (param) => {
    return new Promise((result, reject) => {
        if (param === 2){
            setTimeout(function() {
                let hasil = param * 2
                result (hasil)
            }, 2000);
        }
        else {
            reject ("Maff tidak ada nilai dalam parameter")
        }
    })
}

myCountPromise(2)
.then((result) => {
    console.log(result)
})
.catch((reject) => {
    console.log(reject)
})