const arraysAreEqual = (arr1, arr2) =>{
    if(arr1.length!==arr2.length){
        return false
    }
    return arr1.every((curVal, index)=> curVal===arr2[index])
}

console.log(arraysAreEqual([1,2,3,4],[1,2,3,4]))