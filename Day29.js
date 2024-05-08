const numberRange = (a, b) => {
    const arr = []
    if(a>b){
        return false
    }else{
        // for(let i=a; i<=b; i++){
        //     arr.push(i)
        // }
        while(a<=b){
            arr.push(a)
            a++
        }
    }
    return arr
};

console.log(numberRange(0, 5))
console.log(numberRange(3, 7))
console.log(numberRange(-2, 2))