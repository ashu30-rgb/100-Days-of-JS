const findLongestWord = (str) =>{
    if(str.trim().length===0){
        return false
    }
    words = str.split(" ")
    words = words.sort((a,b)=>a.length - b.length)
    return words.at(-1)
}

console.log(findLongestWord("Hello howwwwwww are you "))