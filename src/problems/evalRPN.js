const isNumber = (value) => !isNaN(value) && isFinite(value);


const evalRPN = function (tokens) {

    const stack = [];

    for (let token of tokens) {
        const isValidNumber = isNumber(token)

        console.log(stack)

        if (isValidNumber) {
            stack.push(+token)
        } else {
            const secondOperand = +stack.pop();
            const firstOperand = +stack.pop();

            if (token === "*") {
                stack.push(firstOperand * secondOperand)
            }

            if (token === "/") {
                stack.push(Math.trunc(firstOperand / secondOperand))
            }

            if (token === "+") {
                stack.push(firstOperand + secondOperand)
            }

            if (token === "-") {
                stack.push(firstOperand - secondOperand)
            }
        }

        
    }

    return stack[0];

}



console.log(evalRPN(["10","6","9","3","+","-11","*","/","*","17","+","5","+"]))
