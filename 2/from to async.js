const fs = require('fs');

fs.readFile('./files/from.txt', 'utf8', (err, response) => {
    if(err) return console.log(err.message);

    fs.writeFile('./files/to.txt', response, (err) => {
        if (err) return console.log(err.message);

        console.log(`'from.txt' content write into 'to.txt' successfully.`);
    })
});