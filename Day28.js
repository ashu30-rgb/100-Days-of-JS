const truncateString = (str, num) => {
    return str.length<=num? str: str.slice(0,num)+"..."
}

console.log(truncateString("A-tisket a-tisket A green and yellow basket", 8))