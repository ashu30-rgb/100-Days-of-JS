const removeDuplicates = (arr) => {
    // arr.map((item,index)=> {
    //     for(let i=index+1; i<arr.length; i++){
    //         if(item==arr[i]){
    //             arr.splice(i,1)
    //         }
    //     }
    // })
    // return arr

    let newArr = [...new Set(arr)]
    return newArr
}

console.log(removeDuplicates([1,2,3,4,53,2]))
console.log(removeDuplicates([4,2,4,7,4,3]))
console.log(removeDuplicates([1,2,3,4,5,6,7]))