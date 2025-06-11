  
  let a = 400
  if (true){
    let a = 330;
    // var A =200
  const b =300;
  // console.log("INNER A :", a)

  }
  // console.log(a);



  function One (){
    const username= 'aayush'

    function Two(){
        const website = 'google.com'
        console.log(username)
    }

    // console.log(website)
     Two()
  }
   One();

   // Above the folowing refers to closure

   if ( true ){
    const username = "samrat "
    if (username==="samrat"){
      const website = "youtube"
      console.log (username+website); 
    }
    // console.website
   }
  //  console.log( username );
  //  ======================================intresting===================

  addOne(5)
console.log(addOne(5));  // here this is exceuteable regardless of its position

  function addOne (num) {
    return 
    num +1 ;
  }

  addTwo(5)

console.log(  addTwo(5));  // but here its give error when you declare functions like this 
                                  // this is execution before intializatio
  const addTwo = function (num ){  // this also called exprssion function hold by variable in 
                                   // JavaScript 
       return num +2 ;                             
  }

