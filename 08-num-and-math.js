const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 23.7894
//console.log(otherNumber.toPrecision(30)); 

const hundreds = 100000
//console.log(hundreds.toLocaleString('en-IN'));


// =============Math==================//

//console.log (Math);
//console.log(Math.abs(4));
//console.log(Math.round(4.3));
//console.log(Math.ceil(4.2));
//console.log(Math.floor(4.2));

console.log(Math.random());
console.log(Math.random()*10) + 1
console.log(Math.floor(Math.random()*10)+1);

const min = 1
const max = 6

console.log(Math.random() *(max-min+1))+min
