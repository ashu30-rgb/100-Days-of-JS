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
   return str.replace(/[A-Z]/g,match => "_"+match.toLowerCase())
}

console.log(toCamelCase("hello world thApa"))
console.log(toSnakeCase("helloWorldAshuSysfore"))