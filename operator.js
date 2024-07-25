const array = ["OR", ["<", "a", "b"], ["AND", ["==", "c", "d"], ["!=", "e", "f"]]];

const operatorProblem = (expression) => {
    const operator = expression[0];
    const operands = expression.slice(1);

    return operands.reduce((result, value, index) => {
        let currentOperand;
        if (Array.isArray(value))
            currentOperand = `(${operatorProblem(value)})`;
        else
            currentOperand = value;

        if (index === 0) 
            return `${result}${currentOperand}`;
        else
            return `${result} ${operator} ${currentOperand}`;
    }, '');
}

console.log(operatorProblem(array));