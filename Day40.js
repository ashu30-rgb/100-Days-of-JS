const generateBarChart = (arr) => {
    const newArr = arr.map((curElem, index)=>{
        let star = "";
        let number = 0;
        while(number<curElem){
            star += "*";
            number ++
        }
        console.log(`${index+1}:${star}`)
    })
};

console.log(generateBarChart([5,3,9,2]))