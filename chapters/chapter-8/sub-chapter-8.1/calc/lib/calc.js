const counter = require('./counter-calls.js');

const add = (a, b) => {
    counter.increment();

    return a + b;
};

const subtract = (a, b) => {
    counter.increment();

    return a - b;
};

module.exports = {
    add,
    subtract,
}
