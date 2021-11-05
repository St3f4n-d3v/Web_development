function squareDeclare(number1, number2) {
    const sum = (number1 * number1) + (number2 * number2)
    return sum * sum

}


const squareExpres = function (number1, number2) {
    const result = (number1 * number1) + (number2 * number2)
    return result * result
}


const squareArrow = (number1, number2) => {
    const result = (number1 * number1) + (number2 * number2)
    return result * result
}

console.log(squareDeclare(6, 4));
console.log(squareExpres(6, 4));
console.log(squareArrow(4, 6));