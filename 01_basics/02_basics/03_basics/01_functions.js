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
        if(!username){                         // runs only when situation is true// also equal to (!username)
            console.log("Please enter a username");       //provide some output
            return;
        }
            return `${username} just loggedin`
        }

    //    console.log(loginusermessage("samrat"));
     // console.log(loginusermessage()); // undefined

function calculatecartprice (... num1) {              // rest operator to pass multiple value also called spread operator depends on usecase
  return num1
}

console.log(calculatecartprice(200, 50 ,900));

function calculatecartprice ( val1, val2,...num1) {                // here the first value is taken by val1 second by val2
                                                                   // rest are contained by the following num1 array 
  return num1
}
  console.log(calculatecartprice(200, 500, 400,2000 ,900 ));

//  const username ={
      
//     course : "bca"
//  }
  

// function handleAnyObject (anyobject){
//   if (anyobject&& anyobject.name){
//     console.log(anyobject.name);
//   }
//     else {
//       console.log(`please enter the value of ${anyobject.name}`);
//   return
//     }
  
  
// }
// handleAnyObject(username)
//  username.name ="aayush";
//  console.log(username.name)



 function handleobject(anyobject){
     
  console.log(`hello this is my name ${anyobject.username} and this is my course price ${anyobject.courseprice}`);
  
}

handleobject({
  username: "sammy",
  courseprice: 999
})

const myNewArray = [ 100 ,200 ,300 ,400];

function thisArray (getArray) {
   return getArray[1];
}

// console.log(thisArray(myNewArray));

console.log(thisArray([200,300,400,500]));

