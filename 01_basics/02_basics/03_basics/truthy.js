// falsy value 
//false , 0, -0, BigInt 0n , "", null , undefined , NaN
// rest of cvalues are truethy value 

// truthy values 
//"0",'false'," ",[],{},function(){}

const Useremail = []

if ( Useremail){
    console.log(" we got the Email");
}else 
{ 
    console.log("we did'nt got the Email"); 
}

if ( Useremail.length===0){
    console.log("Its an empty Array");
}

const emptObj = {} 

if (Object.keys(emptObj).length===0){
    console.log("The object is Empty");
}

// Nullish Coalesing Operator (??)null Undefined

let val1 ;
val1 = 5 ?? 10
val1 = null ?? 10
val1 = undefined ?? 15
val1 = null??10??15 
console.log(val1);

// Terniary Operator 


// condition : ? true: false 

const Icetea =100;
Icetea<=80 ? console.log("less than 80") : console.log("more than 80");
