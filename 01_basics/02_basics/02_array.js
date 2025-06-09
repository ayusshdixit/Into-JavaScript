const marvel_heros = ["ironman", "captainAmerica ", "hulk"];
const dc_heros = ["superman", "batman", "wonderWitch"];

marvel_heros.push(dc_heros);
// console.log(marvel_heros);
// Output: [ 'ironman', 'captainAmerica ', 'hulk', [ 'superman', 'batman', 'wonderWitch' ] ]
// The array marvel_heros now contains another array dc_heroes as its last element.

// console.log(marvel_heros[0][3]); // Output: 4
//  const allHeros = marvel_heros.concat(dc_heros);// The concat method combines two arrays into one.
// console.log(marvel_heros);// Output: [ 'ironman', 'captainAmerica ', 'hulk', [ 'superman', 'batman', 'wonderWitch' ] ]
// The concat method does not modify the original array, it returns a new array.
const allHeroes = [...marvel_heros,... dc_heros];// The spread operator (...) is used to combine the two arrays into one.// 
    // to make the array elements individual elements in the new array.
//console.log(allHeroes);// Output: [ 'ironman', 'captainAmerica ', 'hulk', 'superman', 'batman', 'wonderWitch' ]

const myNewArray = [1 , 2 , 3 ,[4,5,6] , 7 , [8 , 9 , [10 ,11]] ]
// The array myNewArray contains nested arrays.
const originalArray = myNewArray.flat(3);
//console.log(originalArray);

// 
console.log(Array.isArray("hitesh")); // false 
console.log(Array.from("hitesh")); // Output: [ 'h', 'i', 't', 'e', 's', 'h' ]
    console.log(Array.from({name: "hitesh"}) ) //intresting case // Output: [ ]
     let score1=100;
     let score2=200;
     let score3=300;

     console.log(Array.of(score1, score2, score3)); // Output: [ 100, 200, 300 ]    
     