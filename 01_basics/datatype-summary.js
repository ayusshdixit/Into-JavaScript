//primitive datatype 
// types=> 7 
// String , null , undefined , Number , Bigint , Symbol , Boolean 

const score =300; // Number it can be 100.3
const LoggedIn = false ; // its a Boolean 
const str = " samrat" // its a string 
 let useremail; // its undefined 
 // symbod 
 const id = Symbol(123);
 const userid = Symbol(123);
 console.log(userid===id);
 console.log(id);
 
 //refernce datatype 

 //Array , Objects , Functions 
 
 const heros = ["shaktiman","nagraj","doga"]  
    // ARRAY 
    // these are objects 
    let myObj ={
        name : "samrat",
        age : 19 ,
    }
    // functions 
     const myfunction = function() { 

        console.log("samart");
        
    }
    // use typeof to know the datatype of variables 


    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

    // Stack memory used in primitive datatype whenever it used its gives the copy of declared datatype 
    // heap is used in non- primitive datatype whenever itr used its give reference of original value means any change will affect the original datatype 

    let youtubename = "aayushdixit";
    let anothername = youtubename;

   anothername = "samratdixit"
    console.log(youtubename);
   console.log(anothername)

   // this is the example of stack the change made only in the copy not in the original one 
   let userone = { 
        email : "samrat@dixit" ,
        upi : 123 ,
   }


   let usertwo = userone

   usertwo.email ="aayushdixit@"
   console.log(userone.email);
   // this is the example of heap here any change can make differnce to the  original datatype .
   
    
    