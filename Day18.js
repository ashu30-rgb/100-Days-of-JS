const isUpperCase = (char) =>{
    // return char === char.toUpperCase()
    if(char.charCodeAt(0)>=65&&char.charCodeAt(0)<=90){
        return true;
    }else{
        return false
    }
}


console.log(isUpperCase("a"))
console.log(isUpperCase("A"))
console.log(isUpperCase("d"))
console.log(isUpperCase("M"))