const calculateMean = (arr) => {
    if(arr.length<1){
        return 0
    }

    const sum = arr.reduce((a,b)=>a+b,0)
    return sum/arr.length
};

console.log(calculateMean([1,2,3,4,5]));
console.log(calculateMean([10,20,30]));
console.log(calculateMean([-1,0,1]));
console.log(calculateMean([]));