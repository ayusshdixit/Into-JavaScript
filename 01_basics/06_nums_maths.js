const score= 100 ;
//console.log(score);
// 100
const balance = new Number(100);
//console.log(balance);
//[Number: 100]
//console.log(String(balance));
// HERE ITS CONVERTED INTO STRING AND NOW WE CAN APPLY ALL THE 
//FUCTION OF STRING ALSO LIKE LENGTH AND MORE
//console.log(balance.toFixed(2));
//100.00
const otherNumber = 123.8957

//console.log(otherNumber.toPrecision(4));
//123.9
//console.log(otherNumber.toPrecision(3));
// 123
// its provide the precise value to the console at the till the particular number 
//injected into the function.


const Number2 =100000010
//console.log(Number2.toLocaleString('en-In'));
//10,00,00,010

// ***************************************maths**********************
//console.log(Math.abs(-4));
//4
//console.log(Math.round(4.3));
//4
//console.log(Math.ceil(4.1));
//5
//console.log(Math.floor(4.9));
//4
//console.log(Math.max(4,5,8,9));
//9
//console.log(Math.min(4,5,8,9));
//4

console.log(Math.random());
console.log(Math.random()*10);
console.log(Math.floor((Math.random()*10) + 1));

const min =10 ;
const max =20 ;

console.log(Math.floor((Math.random()* max- min) + 1) + min);


