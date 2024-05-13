const randomHexColor = () => {
    const red = Math.floor(Math.random()*256).toString(16);
    const blue = Math.floor(Math.random()*256).toString(16);
    const green = Math.floor(Math.random()*256).toString(16);
    const hex = "#"+red+blue+green
    return hex
}

console.log(randomHexColor())