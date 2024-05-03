const sumOfDigits = (num) => {
    let arr = Array.from(String(num), Number)
    return arr.reduce((accum, curElem) => accum+= curElem, 0)
}

console.log(sumOfDigits(1234));
console.log(sumOfDigits(6541));
console.log(sumOfDigits(23563));
console.log(sumOfDigits(34603299));