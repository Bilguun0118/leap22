//while loop

// let i = 0;
// while (i <= 5) {
//     console.log(i);
//     i++;
// }

//do while
// let ii = 0;

// do {
//     console.log(ii);
//     ii++;
// } while (ii <= 5)

//loop 1
// let a = 0;
// while (a <= 10) {
//     console.log("utga =", a);
//     a++;
// }

//loop 2
// let b = 0;
// while (b <= 10) {
//     console.log("sondgoi = " + b);
//     b++;
// }


//number digits
let a = 12345678;
let b = 0

while (a != 0) {
    a = Math.round(a / 10);
    b++;
}
console.log(b);