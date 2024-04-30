const countChar = (str, char) =>{
    //     let count = 0;
    // for(let i=0; i<str.length; i++){
    //     if(str[i].toLowerCase()==char.toLowerCase()){
    //         count += 1
    //     }
    // }
    count = str.split("").reduce((accum, curChar)=>{
        if(curChar.toLowerCase()==char.toLowerCase()){
            accum++
        }
        return accum
    },0)
    return count
    }
    
    console.log(countChar("MissIssippi", "I"))