function filterBooksPromise(colorful,amountOfPage){
    return new Promise(function(resolve, reject){
        var books=[
            {name: "shinchan", totalPage: 50, isColorFul: true},
            {name: "kalkulus", totalPage: 250, isColorFul: false},
            {name: "doraemon", totalPage: 40, isColorFul: true},
            {name: "algoritma", totalPage: 250, isColorFul: false},
        ]
        if (amountOfPage >= 40) {
            resolve(books.filter(x=>x.totalPage >= amountOfPage && x. isColorFul == colorful));
        }
        else {
            var reason = "Maff buku di bawah 40 halaman tidak tersedia"
            reject(reason);
        }
    });
}

const books = async (colorful, amountOfPage) => {
    try{
        let result = await filterBooksPromise(colorful, amountOfPage)
        console.log(result)
    }
    catch (error) {
        console.log(error)
    }
}
books(true,40);
books(false,250);
books(true,30);