const fs = require('fs');

let fromText = fs.readFileSync('./files/from.txt', 'utf8');
fs.writeFileSync('./files/to.txt', fromText);
console.log(`'from.txt' content write into 'to.txt' successfully.`);

let appendText = fs.readFileSync('./files/append.txt', 'utf8');
fs.appendFileSync('./files/to.txt', appendText);
console.log(`'append.txt' content append to 'to.txt' successfully.`);