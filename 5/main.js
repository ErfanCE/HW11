const simpleCalc = require('./modules/calculator');

let first = 10;
let second = 5;

console.log(`${first} + ${second} = ` + simpleCalc.sum(first, second));

console.log(`${first} - ${second} = ` + simpleCalc.sub(first, second));

console.log(`${first} * ${second} = ` + simpleCalc.mul(first, second));

console.log(`${first} / ${second} = ` + simpleCalc.div(first, second));