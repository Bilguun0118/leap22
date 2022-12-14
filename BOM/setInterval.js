let counte = 0;
let obj = setInterval(startInterval, 500)

function startInterval() {
    console.log(counte)
    counte++;
    if (counte == 11) {
        clearInterval(obj);
    }
}