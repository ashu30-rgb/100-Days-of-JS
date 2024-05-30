const calculateDaysBetweenDates = (d1, d2) => {
    let date1 = new Date(d1);
    let date2 = new Date(d2);
    return Math.abs((date2 - date1)/(24*60*60*1000))
}

console.log(calculateDaysBetweenDates('2024-01-05', '2024-01-31'))