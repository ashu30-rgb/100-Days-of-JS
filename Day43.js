const fizzbuzz = (startNum, endNum) => {
    resultArr = []
    for(let i=startNum; i<=endNum; i++){
        if(i%3==0 && i%5==0){
            resultArr.push("FizzBuzz")
        }else if(i%3==0 && i%5!=0){ 
            resultArr.push("Fizz")
        }else if(i%3!=0 && i%5==0){ 
            resultArr.push("Buzz")
        }else{
            resultArr.push(i)
        }
    }
    return resultArr;
};

console.log(fizzbuzz(1, 15));
console.log(fizzbuzz(12, 20));