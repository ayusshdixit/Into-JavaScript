// const user ={
//     username : 'samrat',
//     price: 999,

//     welcomeMessage () {
//         console.log(`${this.username} is my name and  ${this.price} is my course price` );
//         // console.log(this)
//     }
// }

// user.welcomeMessage()
// user.username ='aayush';
// user.welcomeMessage()

// console.log(this);

//  function chai () {
//     let username = 'samrat'
//      console.log(this);
    
//  }
// chai();


 const chaidedo = () =>{
  let username = 'samrat'
     console.log(this.username);     // this is a arrow function

 }
 chai()


// // const addtwo = (num1 ,num2) =>  num1+num2 // implicit return in Arrow Function 
// Here we dont use parentheses as well as return keyword 


const addtwo = (num1 ,num2) => (num1+num2)
// const addtwo = (num1 ,num2) =>  ({username:'samrat'}) 
//  // this is the object way
// must wrap object in in parentheses to getting a real time real value


console.log(addtwo(3,4));



// // this tells  about the current context 

// let myName="Samrat"
//  MYprice =98;

// function thisuse=('myName',' MYprice')=>{

// console.log(`${this.myName} is anthony and my${this.MYprice}`)
// }
//     thisuse()