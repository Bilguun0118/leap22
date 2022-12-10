//promt() text
let lang = prompt('What is your favorite programming language?');

let feedback = lang.toLowerCase() === 'javascript' ? `It's great!` :
    `It's ${lang}`;

alert(feedback);
console.log(feedback);

// promt() number
let ageStr = prompt('How old are you?');
let age = Number(ageStr);

let feedback1 = age >= 16 ?
    "You'e eligible to join." :
    "You must be at least 16 year old to join.";

alert(feedback1);
console.log(feedback1);