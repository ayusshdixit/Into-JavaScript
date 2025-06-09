//array 
// Makes shallow copy rather than deep copy jn Js 

const arr = [1, 2, 3, 4, 5];
const myheroes =["shakitiman" , "batman", "superman", "spiderman", "ironman"];

const array2= new Array(10, 20, 30, 40); // creates an array of length 10 with empty slots
//console.log(arr[0]); // Accessing the first element of the array

//array methods

// arr.push(6); // Adds an element to the end of the array
// console.log(arr);
// arr.pop();
// console.log(arr); // Removes the last element of the array

arr.unshift(0);// Adds an element to the beginning of the array
// console.log(arr);
arr.shift(); // Removes the first element of the array
// console.log(arr); // Displays the modified array
// console.log(arr.length); // Displays the length of the array
// console.log(arr.includes(5)); // Displays the length of the array
// console.log(arr.indexOf(3)); // Displays the index of the element 3 in the array
// console.log(arr.slice(1, 3)); // Returns a shallow copy of a portion of the array

//slice method

console.log("A", arr);

const mynewarr =arr.slice(1, 3); // Returns a shallow copy of a portion of the array
console.log("B", mynewarr);

// splice method
const mynewarr2 = arr.splice(1, 3); // Removes elements from the array and returns them
console.log("C", arr); // Displays the modified array after splice
console.log("C", mynewarr2); // Displays the removed elements