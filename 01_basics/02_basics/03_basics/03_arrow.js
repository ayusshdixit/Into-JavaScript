const user ={
    username : 'samrat',
    price: 999,

    welcomeMessage () {

        console.log(`${this.username} is my name and  ${this.price} is my course price` );
        // console.log(this)
    }
}

user.welcomeMessage()
user.username ='aayush';
user.welcomeMessage()

console.log(this);

// function chai () {
//     let username = 'samrat'
//     console.log(this);
    
// }
// chai();


// const chaidedo = () =>{
//  let username = 'samrat'
//     console.log(this.username);     // this is a arrow function

// }
// chai()


// const addtwo = (num1 ,num2) =>  num1+num2 // implicit return in Arrow Function
// const addtwo = (num1 ,num2) => (num1+num2)
const addtwo = (num1 ,num2) =>  ({username:'samrat'})  // this is the object way

console.log(addtwo(3,4));
