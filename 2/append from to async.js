const fs = require('fs');

fs.readFile('./files/from.txt', 'utf8', (err, fromText) => {
    if (err) return console.log(err.message);

    fs.writeFile('./files/to.txt', fromText, (err) => {
        if (err) return console.log(err.message);

        console.log(`'from.txt' content write into 'to.txt' successfully.`);

        fs.readFile('./files/append.txt', 'utf8', (err, appendText) => {
            if (err) return console.log(err.message);

            fs.appendFile('./files/to.txt', appendText, (err) => {
                if (err) return console.log(err.message);

                console.log(`'append.txt' content append to 'to.txt' successfully.`);
            })
        })
    })
})