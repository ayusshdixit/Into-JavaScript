// for of 


// [ "","",""]
// [{},{},{},{}]





  let arr = [12,23,354,78]
for (const num of arr) {
    //console.log(num);
    
}

// const greeting = "hello world";
// for (const greet of greeting) {
// if (  greet == ' '){
//     console.log(`this will be exit`);
//     break
// }
// console.log(greet);

// }


const greeting = " Hello World "

for (const greet of greeting) {
    //console.log(greet)
}

//Maps

const map = new Map()


map.set('in', 'India')
map.set('USA', 'United States of America ')
map.set('fr', 'France')

//console.log(map);


for (const [keys, value] of  map) {
    // console.log(keys, ":-", value);
    
}

const myObject = {

    game1 : 'nfs',
    game2 : 'spiderman',
    game3: 'gta'
}
for (const [keys , values] of myObject) {
   // console.log(keys, ":-", value);
}

// myObject is not iterable

// there ate another ways to make such thing possible

