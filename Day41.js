const convertCurrency = (amount, from, to)=>{
    const rates = {
        USD: 1,
        EUR: 0.9,
        GBP:0.8,
        INR:82,
    }

const amountInUsd = amount/rates[from];
return rates[to]*amountInUsd

};

console.log(convertCurrency(100, "GBP", "EUR"))