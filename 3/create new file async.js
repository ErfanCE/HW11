const fs = require('fs');

let filePath = './files/newFile.txt';
fs.writeFile(filePath, '', (err) => {
    if (err) return console.log(err.message);

    console.log('file created successfully.');

    fs.access(filePath, (err) => {
        console.log((err) ? ('the file does not exists.') : ('the file exists.'));
    });
});