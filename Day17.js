const toCamelCase = (str) => {
    const arr = str.trim().split(' ')
    return arr.map((item,index)=>{
        if(index==0){
            return item.toLowerCase()
        }
        else{
           return item.charAt(0).toUpperCase()+item.slice(1).toLowerCase()
        }
    }).join("")
}

const toSnakeCase = (str) => {
    let index
    let arr = str.split("")
 arr.map((item,index)=>{
        if(item.toUpperCase()==item){
            index = index
        }
    })
    return arr
}

console.log(toCamelCase("hello world thApa"))
console.log(toSnakeCase("helloWorld"))