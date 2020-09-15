function validate(num) {
    if (typeof (num) !== 'number') {
        throw new TypeError(`The value ${num} is not a number`);
    }
    console.log(`The value ${num} is valid.`);
}

const numbers = [1, 2, 'banana', 4, 'orange', 5];

numbers.forEach(function (val) {
    try {
        validate(val);
    } catch (error) {
        console.log(error.message);
    }
});

//adding this comment so that I can make a new PR