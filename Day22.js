const findMedian = (arr) => {
    const sortedArr = arr.sort((a,b)=>a-b)
    if(arr.length%2!=0){
        return sortedArr[(arr.length-1)/2]
    }else{
        return (sortedArr[arr.length/2]+sortedArr[(arr.length/2)-1])/2
    }
}

console.log(findMedian([5,3,9,1,7]))
console.log(findMedian([2,4,6,8]))
console.log(findMedian([1,3,5,7,9,11]))