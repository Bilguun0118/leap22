let counte = 0;
let obj = setInterval(startInterval, 100)

function startInterval() {
    console.log(counte)
    counte++;
    if (counte == 11) {
        clearInterval(obj);
    }
}