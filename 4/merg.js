const fs = require('fs');

let resultPath = './files/result.txt';

// create new file
fs.writeFileSync(resultPath, '');

// create array of object for names [{uid: 1, uname: 'foo'}]
let namesString = fs.readFileSync('./files/names.txt', 'utf8');

let namesArray = namesString.split('\r\n');

let names = [];
namesArray.forEach((element, index) => {
    let temp = {};

    temp.uid = element.split('-')[0];
    temp.userName = element.split('-')[1];

    names.push(temp);
});

// create array of object for numbers [{uid: 1, unumber: 'foo'}]
let numbersString = fs.readFileSync('./files/numbers.txt', 'utf8');

let numebrsArray = numbersString.split('\r\n');

let numbers = [];

numebrsArray.forEach(element => {
    let temp = {};

    temp.uid = element.split('-')[0];
    temp.userNumber = element.split('-')[1];

    numbers.push(temp);
});

// merg numbers by uid, add number property to names array
names.forEach(namesElement => {
    let temp = [];
    let k = 0;

    numbers.forEach(numbersElement => {
        if (namesElement.uid - '' === numbersElement.uid - '') {
            temp[k] = numbersElement.userNumber;
            k++;
        }
    });

    namesElement.userNumbers = temp;
});
// names: {uid: '', userName: '', userNumbers: ''}


// create output text by numbers length
names.forEach(person => {
    let outputText = '';

    if (person.userNumbers.length === 0) {
        outputText = `${person.userName} hasn't any phone number.`;

        fs.appendFileSync('./files/result.txt', outputText);
    } else if (person.userNumbers.length === 1) {
        outputText = `${person.userName}'s phone number is ${person.userNumbers[0]}\r\n`;

        fs.appendFileSync('./files/result.txt', outputText);
    } else {
        let numbersText = '';
        person.userNumbers.forEach(el => {
            numbersText += el + ', ';
        });
        numbersText = numbersText.slice(0, -2);

        outputText = `${person.userName}'s phone numbers are ` + numbersText + '\r\n';

        fs.appendFileSync('./files/result.txt', outputText);
    }
});