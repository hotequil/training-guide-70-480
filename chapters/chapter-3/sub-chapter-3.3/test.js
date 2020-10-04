QUnit.module("Calculator group", () => {
    QUnit.test("subtract", assert => {
        details.operator = "-";
        details.firstNumber = "4";
        details.secondNumber = "2";
        details.result = false;

        assert.equal(executeTheCalculate(), parseInt(details.firstNumber) - parseInt(details.secondNumber), `${details.firstNumber} ${details.operator} ${details.secondNumber} = ${parseInt(details.firstNumber) - parseInt(details.secondNumber)}`);

        resetCalc();
    });

    QUnit.test("sum", assert => {
        details.operator = "+";
        details.firstNumber = "4";
        details.secondNumber = "2";
        details.result = false;

        assert.equal(executeTheCalculate(), parseInt(details.firstNumber) + parseInt(details.secondNumber), `${details.firstNumber} ${details.operator} ${details.secondNumber} = ${parseInt(details.firstNumber) + parseInt(details.secondNumber)}`);

        resetCalc();
    });

    QUnit.test("multiply", assert => {
        details.operator = "*";
        details.firstNumber = "4";
        details.secondNumber = "2";
        details.result = false;

        assert.equal(executeTheCalculate(), parseInt(details.firstNumber) * parseInt(details.secondNumber), `${details.firstNumber} ${details.operator} ${details.secondNumber} = ${parseInt(details.firstNumber) * parseInt(details.secondNumber)}`);

        resetCalc();
    });

    QUnit.test("division", assert => {
        details.operator = "/";
        details.firstNumber = "4";
        details.secondNumber = "2";
        details.result = false;

        assert.equal(executeTheCalculate(), parseInt(details.firstNumber) / parseInt(details.secondNumber), `${details.firstNumber} ${details.operator} ${details.secondNumber} = ${parseInt(details.firstNumber) / parseInt(details.secondNumber)}`);

        resetCalc();
    });
});
