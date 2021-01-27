function displayFullName(firstName, lastName) {
    let result = `${firstName} ${lastName}`;

    console.log(result);
}

function fullName(callback) {
    const first_name = 'Abraham';
    const last_name = 'Silberschatz';

    callback(first_name, last_name);
}

fullName(displayFullName);