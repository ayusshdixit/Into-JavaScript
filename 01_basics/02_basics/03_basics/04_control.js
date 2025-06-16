// const Temperature = 45

// if (Temperature< 50 ) {
//     console.log("Temperature is less than 50");
    
// } else {
//     console.log("Temperature is more than 50");
    
// }

// console.log("Executed");

// const score =200

// if ( score > 100){
//     const power ='fly';
//     console.log(`User power:${power}`);  // (Here the scope of Power is only within the if Statement)
                                          
// }

// 
const userloggedIn = true;
const debitCard = true ;
const loggedInfromgoogle = false ;
const loggedInfromemail = true ;

//&& And Condition Check Both the Condition to be True 
 if(userloggedIn && debitCard){
    console.log("Allow to Buy the Course");
 }

 if ( loggedInfromgoogle || loggedInfromemail) {              // helps to check multiple conditions 
 console.log("user logged In -");  // if there is any of condition is true than the statement will be executed 
 
 } 