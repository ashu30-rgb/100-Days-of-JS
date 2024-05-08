const repeatString =(str, num) => {
    // let res  = ""
    // if(num<1){
    //     return false
    // }else{
    //     for(let i=0; i<num; i++){
    //         res = res+str
    //     }
    // }
    // return res

    return num>0?str.repeat(num):str
}

console.log(repeatString("abc", 5))