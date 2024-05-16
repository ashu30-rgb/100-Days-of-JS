const isEmtyObject = (obj) => {
   for(let key in obj){
    if(obj.hasOwnProperty(key)){
        return "Not empty"
    }
   }
   return "empty"
};

console.log(isEmtyObject({}));
console.log(isEmtyObject({name: "Ashutosh"}));
console.log(isEmtyObject({ keyWithNull: null}));
console.log(isEmtyObject({keyWithUndeined: undefined}));