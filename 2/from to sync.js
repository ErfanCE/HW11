const fs = require('fs');

let response = fs.readFileSync('./files/from.txt', 'utf8');
fs.writeFileSync('./files/to.txt', response);
console.log(`'from.txt' content write into 'to.txt' successfully.`);