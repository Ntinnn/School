let a = true;
let b = false;

// Operator Logika AND (&&) hanya akan menghasilkan nilai true jika ekspresi atau operan di kiri dan kanan bernilai true.
console.log (a && b);//Output: false
//Operator Logika or (||) => hanya akan menghasilkan nilai false jika ekspresi di kiri dan kanan bernilai false.
console.log(a || b); // Output: true
// Operator Logika NOT (!) => mengubah nilai true menjadi false atau sebaliknya.
console.log(!a); //Output: false
console.log(!b); //Output: true

//Penggabungan operator logika
let c = true;
let d = false;
let e = true;
//AND dan OR digabutkan
console.log((a && b)|| c);//Output:true (false OR true = true)
console.log(a && (b || c));//Output:true (false AND (false OR true) = true)
//NOT digabungkan dengan AND
console.log(!(a && d)); //Output:true(NOT (false) = true)
//NOT digabungkan dengan OR
console.log(!(a || e));//Output:false(NOT (true)= false)