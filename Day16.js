const findMin = (arr) => {
    if(arr.length<1){
        return "No values to compare"
    }
    // arr =arr.sort((a,b)=>a-b)
    // return arr[0]
    return Math.min(...arr)
};

console.log(findMin([5,10,2,8]));
console.log(findMin([5,-3,0,12,-7]))
console.log(findMin([]))