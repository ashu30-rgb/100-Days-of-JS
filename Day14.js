const isPowerOfTwo = (num) => {
    if(num<1){
        return false
    }
    for(let i=0; i<num; i++){
        if(2**i===num){
            return true
        }
    }
    return false
}

console.log(isPowerOfTwo(8))
console.log(isPowerOfTwo(7))
console.log(isPowerOfTwo(16))