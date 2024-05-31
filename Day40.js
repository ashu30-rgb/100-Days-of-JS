const generateBarChart = (arr) => {
    // const newArr = arr.map((curElem, index)=>{
    //     let star = "";
    //     let number = 0;
    //     while(number<curElem){
    //         star += "*";
    //         number ++
    //     }
    //     return `${index+1}:${star}`
    // })
    // return newArr.join("\n")

    return arr.map((curElem, index)=>{
        return `${index+1}:${"*".repeat(curElem)}`
    })
    .join("\n")
};

console.log(generateBarChart([5,3,9,2]))