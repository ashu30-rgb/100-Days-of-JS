const isPalindrome = (str) => {
    str = str.toLowerCase().replace(/\W/g, "");
    let reverseString = str.split("").reverse().join("")
    return reverseString === str?true:false
}

console.log(isPalindrome("A man, a plan, a canal, Panama"))
console.log(isPalindrome("racecar"))
console.log(isPalindrome("hello"))