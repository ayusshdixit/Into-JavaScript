//singleton
// constructor = singleton
// literals => multiple instances
// Object.create = singleton
const mySYM = Symbol("key1");
const JsUser = {
    name: 'Samart',
    "full Name": 'Samart Dixit', // property with space in name
    // mySYM:'key1' ,// this is a string type property, not a symbol
    [mySYM]: "key1", // this is a symbol type property
    age :18 ,
    location: "Bangkok",
    email: "samart@dixit",
    isLoggedIn: true,   
    lastLoggedIn:  [ "satuday" , "sunday" ],        
} // object is declared 
// console.log(JsUser.email);
// console.log(JsUser["email"]); // alternative way to access object properties // "full Name": 'Samart Dixit', 
// you cannot access this property using dot notation
// console.log(JsUser["full Name"]); // alternative way to access object properties
// console.log(JsUser.mySYM); // accessing symbol property // this is a way of accesing symbol property but not the best way
// console.log( typeof JsUser.mySYM);// here its showing string because we are accessing the property using string
// console.log( typeof JsUser["mySYM"]); // here its showing symbol because we are accessing the property using symbol


JsUser.email = "aayush@dixit"; // updating the email property  
// Object.freeze(JsUser); // this will make the object immutable, you cannot change the properties of the object 
 JsUser.email = "aayush@dixit123"; 
//  console.log( JsUser.email); // this will not change the email property because the object is frozen    
//  console.log( JsUser); // this will print the object with the original email property   
JsUser.greeting = function() {
    console.log("good Morning");    
}
// console.log(JsUser.greeting);// anoynomous function
JsUser.greeting2 = function() {
    console.log(`good Morning,  ${this.name}`);      // string interpolation
}
console.log(JsUser.greeting()); //undefined     // goodmorning
console.log(JsUser.greeting2()); // good Morning,  undefined

