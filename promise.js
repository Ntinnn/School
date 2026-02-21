const myFunctionPromise = (param) => {
    return new Promise( (resolve, reject) => {
    if (param === 2){
        resolve ("Halo, ini kondisi true/berhasil")
    }
    else {
        reject ("Halo, ini kondisi false/gagal")
    }
    })
}

// myFunctionPromise(2)
// .then((result) => {
//     console.log(result)
// })
// .catch((error) => {
//     console.log(error)
// })


let execute = async () => {
    try{
        let result = await myFunctionPromise(2)
        console.log(result)
    } catch (error){
        console.log(error)
    }
}
execute();