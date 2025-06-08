const name = "Samrat Dixit";
const repoCount =  50 ;

//console.log ( name + repoCount +"value") // this is  a right way but not the best one to concatenate two string 

console.log(` hello this is ${name} and my repo count is ${repoCount} thankyou`);
// above the following is the best way to do the string concatenate. 
// In this we amke placeholders and inject the variable in it .

const gameName = new String ( 'aayushd')
// through this to run in browser gives keyvaue pair of 7 charc with length =>7 and prototype can if used as per requiremen)
// here we use new keyword and declare the string into its constructor . This is another way to declare string
// declare it .

console.log(gameName[1]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());// you can use all the function by using the . and writing function name 
console.log(gameName.charAt(2));// this function is used to know at which position particular number lies )
console.log(gameName.indexOf('y'));


const newstring = gameName.substring( 0 , 4) ;
console.log(newstring);
//aayu

const anotherString = gameName.slice(-5, 4);
console.log(anotherString);
//yu
const anotherStringOne = "   Samart   "
console.log(anotherStringOne);
//    Samart
console.log(anotherStringOne.trim());
//Samrat
const url= "http://samrat.com//samratdixit%20namaste";
console.log(url.replace('20','-'));
// http://samrat.com//samratdixit%-namaste
console.log(url.split('-') )





