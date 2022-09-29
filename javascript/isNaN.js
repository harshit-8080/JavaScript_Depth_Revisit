let a = "10";
let b = "abc";
let c = "sanket";
let d = 10 -c;

console.log(isNaN(a));
console.log(isNaN(b));
console.log(isNaN(c));
console.log(isNaN(d));

// isNaN do coercion before the checking the argument;

console.log(Number.isNaN(NaN));
console.log(Number.isNaN('abc'));

// this function doesnt do coercion.