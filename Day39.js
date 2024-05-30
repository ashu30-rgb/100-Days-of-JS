const calculateAge = (date) => {
    return Math.floor((new Date() - new Date(date))/(365* 24*60*60*1000))
}

console.log(calculateAge('2001-09-09'))