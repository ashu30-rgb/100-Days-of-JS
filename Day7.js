const findMax = (arr) => {
    return Math.max(...arr)
    // let largest = arr[0]
    // arr.map((item)=>{
    //     if(item>largest){
    //         largest = item
    //     }
    // })
    // return largest
}

console.log(findMax([1,6,2,6,3]))
console.log(findMax([-9,-43,-2,-4]))
console.log(findMax([78,54,2,643]))