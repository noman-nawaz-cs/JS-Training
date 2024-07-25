const array = ["OR", ["<", "a", "b"], ["AND", ["==", "c", "d"], ["!=", "e", "f"]]];

const operatorProblem = (expression) => {
    const operator = expression[0];

    return expression.slice(1).reduce((result, value, index) => {
        let currentOperand = value;
        if (Array.isArray(value))
            currentOperand = `(${operatorProblem(value)})`;

        if (index === 0) 
            return `${result}${currentOperand}`;
        else
            return `${result} ${operator} ${currentOperand}`;
    }, '');
}

console.log(operatorProblem(array));