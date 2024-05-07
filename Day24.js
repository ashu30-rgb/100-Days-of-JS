const findMode = (arr) => {
    const obj = {}
    let maxNum = 0;
    let mode;

    for(elem of arr){
        obj[elem] = (obj[elem] || 0)+1
    }
    if(obj[elem]>maxNum){
        maxNum = obj[elem]
        mode = elem
    }
    return mode
}

console.log(findMode([1,2,2,3,1,4,2]))