const simplePasswordValidator = (pwd) => {
    let criteria={
        lowerCase:false,
        upperCase: false,
        digit:false
    }
    pwd?.split("").map((elem)=>{
        if(!isNaN(elem)){
            criteria["digit"]=true
        }else{
            if(elem.toUpperCase()===elem){
                criteria["upperCase"]=true
            }
            if(elem.toLowerCase()===elem){
                criteria["lowerCase"]=true
            }
        }
    })

    if(criteria.lowerCase===true&&criteria.upperCase===true&&criteria.digit===true&&pwd.length>0){
        return true
    }else{
        return false
    }
}

console.log(simplePasswordValidator("hello"));
console.log(simplePasswordValidator("Hello"));
console.log(simplePasswordValidator("Hello1"));
console.log(simplePasswordValidator("HELLO"));
console.log(simplePasswordValidator("1234"));