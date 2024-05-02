const calculateAverage = (arr) => {
    let sum = arr.reduce((a,b)=>a+b,0)
    return sum/arr.length
}

console.log(calculateAverage([5,10,2,8]))