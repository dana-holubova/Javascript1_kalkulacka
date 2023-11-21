const calculate = (number1, operation, number2) => {
    switch (operation) {
        case '+': return number1 + number2
        case '-': return number1 - number2
        case '*': return number1 * number2
        case '/': return number1 / number2
    }
}

document.body.innerHTML += `2 + 3 = ${calculate(2, '+', 3)}<br>`; // vypíše výsledek 5
document.body.innerHTML += `3 * 7 = ${calculate(3, '*', 7)}<br>`; // vypíše výsledek 21
document.body.innerHTML += `10 / 4 = ${calculate(10, '/', 4)}<br>`; // vypíše výsledek 2.5