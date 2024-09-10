function squareDigits(num){
    let digits = num.toString().split('');
    let squaredDigits = digits.map(squareTwo)
    return (squaredDigits.reduce(concat))

}

function squareTwo(num){
    return Number(num) * Number(num);
}

function concat(value, total) {
    return value.toString() + total;
}
