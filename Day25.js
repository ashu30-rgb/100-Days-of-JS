const factorial = (num) => {
    // let result = 1
    // for(let i=1; i<=num; i++){
    //     result = result * i
    // }
    // return result

    if(num ==1){
        return 1
    }else{
        return num* factorial(num-1)
    }
}

console.log(factorial(5))