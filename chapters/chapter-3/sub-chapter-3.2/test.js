QUnit.module("Math group", () => {
    QUnit.test("add two numbers", assert => {
        const a = 1;
        const b = 1;
        const result = 2;

        assert.equal(add(a, b), result, `must return add: ${a} + ${b} = ${result}`);
    });

    QUnit.test("subtract two numbers", assert => {
        const a = 4;
        const b = 6;
        const result = -2;

        assert.equal(subtract(a, b), result, `must return subtract: ${a} - ${b} = ${result}`);
    });

    QUnit.test("multiply two numbers", assert => {
        const a = 2;
        const b = 2;
        const result = 4;

        assert.equal(multiply(a, b), result, `must return multiply: ${a} * ${b} = ${result}`);
    });
});

QUnit.module("Messages group", () => {
    QUnit.test("say hello world", assert => {
        const result = "Hello world";

        assert.equal(sayHelloWorld(), result, `the function should return \"${result}\"`);
    });
});