const startsWith = (str, val) => {
    // return str.split(" ")[0].toLowerCase() == val.toLowerCase();
    return str.toLowerCase().startsWith(val.toLowerCase())
}

console.log(startsWith("Hello world", "hello"))
console.log(startsWith("Hello world", "world"))