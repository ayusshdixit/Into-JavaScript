const TinderUser = new Object () 

const tinderUser ={}
 
tinderUser.id = 'aayush@dixit24'
tinderUser.name ='samrat'
tinderUser.LoggedIn= true

// console.log(tinderUser);

const regularUser = {
    email: 'samrat@dixit',
    fullname : {
        userfullname:{
              firstName : 'samrat',
              lastName  : ' dixit'
        }
    }
}
//  console.log(regularUser.fullname.userfullname.firstName);
 //
  const obj1 = { 1: ' a ' , 2 :' b '} ;
  const obj2 = { 3: ' c' ,  4 :' d '} 

//   const obj3 = Object.assign({},obj1,obj2);
const obj3 = {...obj1, ...obj2};

  console.log(obj3);
   
  const user = [
{
    email: 'aayush@gmail.com',
    name:  'samrat',

},

{
    email: 'aayush@gmail.com',
    name:  'samrat',
},

{
    email: 'aayush@gmail.com',
    name:  'samrat',
}
  ] 
  

console.log (user[1].email);
console.log(Object.keys(tinderUser))
//   (3) ['id', 'name', 'LoggedIn']  <= output as you can see its a array datatype and now you can apply loop on it
//also can take out the value through using .values with Object 

console.log(Object.values(tinderUser))
console.log(Object.entries (tinderUser)) //provides array which as an output which first property is key and second is values always
console.log(tinderUser.hasOwnProperty('Log96gedIn'));
 

