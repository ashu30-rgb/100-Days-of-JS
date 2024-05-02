const checkTriangleType = (a,b,c) =>{
    if(a==b&&b==c){
        return "equilateral"
    }else if(a==b||b==c ||c==a){
        return "isosceles"
    }else{
        return "scalene"
    }
}

console.log(checkTriangleType(2,3,2))