const validateCreditCard = (str) => {
    let reverseStr = ''
    for (let i = str.length - 1; i >= 0; i--) {
      if (!isNaN(str[i]) && str[i].trim() !== '') {
        reverseStr += str[i]
      }
    }
    sum = 0
    reverseStr.split('').map((item,index)=>{
        if(index%2==0){
            sum += (item * 2)
        }else{
            sum += item
        }
    })
    return parseInt(sum)%10==0
  }
  
  console.log(validateCreditCard("4539d 1488 0343 6467"));
  console.log(validateCreditCard("8273 1232 7352 0569"));
  