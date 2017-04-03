//Write a function that takes an integer as an argument and formats it to look like a currency amount, including a dollar sign, commas, and a decimal (the last two digits will be the cents). E.g.:

var money = 10010010;
var cash = 2675;
var plata = 123456789;

function formatMoney(num){
    return (num/100).toLocalString('en-us', {style: 'currency', currency: 'GBP'})
}



formatMoney(123456789)  // returns $1,234,567.89 
formatMoney(10010010);
formatMoney(2675);
