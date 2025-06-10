// function SayMyName(){
// console.log("A");
// console.log("y");
// console.log("u");
// console.log("s");
// console.log("h");
// }
//  SayMyName()

function AddTwoNumbers(number1 , number2) {
    
// let Result= number1+number2   
// return Result;
return number1 + number2
    }
    

  const Result= AddTwoNumbers(3 ,4);
    // console.log( "Result:", Result);

    function loginusermessage (username){
        if(username===undefined){                         // runs only when situation is true// also equal to (!username)
            console.log("Please enter a username");       //provide some output
            return;
        }
            return `${username} just loggedin`
        }

    //    console.log(loginusermessage("samrat"));
       console.log(loginusermessage()); // undefined

function calculatecartprice (...num1) {              // rest operator to pass multiple value also called spread operator depends on usecase
  return num1
}

console.log(calculatecartprice(200 , 500, 400 ));

function calculatecartprice ( val1, val2,...num1) {                // here the first value is taken by val1 second by val2
                                                                   // rest are contained by the following num1 array 
  return num1
}
console.log(calculatecartprice(200 , 500, 400,2000 ,900 ));

 const username ={
     name: 'samrat',
     couse: 'bca'
 }
  
 function handleobject (anyobject){
console.log(`Username is ${ anyobject.username} and course ${anyobject.course} `);

 }

