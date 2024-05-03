const countVowels = (str) => {
    // let count = 0;
    // str.toLowerCase().split('').map((item)=>{
    //     if(item=='a'||item=="e"||item=='i'||item=="o"||item=="u"){
    //         count+= 1
    //     }
    // })
    // return count


    let vowels = ['a','e','i','o','u'];
    let count = 0;

    let arr = str.split("")

    for(let char of arr){
        if(vowels.includes(char.toLowerCase())){
            count++
        }
    }
    return count
}

console.log(countVowels("Helloo world"))
console.log(countVowels("ThE quIck brOwn fOx"))
console.log(countVowels("Brrrp"))