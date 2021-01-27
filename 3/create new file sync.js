const fs = require('fs');

let filePath = './files/newFile.txt';

fs.writeFileSync(filePath, '');

fs.existsSync(filePath) ? console.log('the file exists') : console.log('the file not exists');