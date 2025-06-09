// date 
let myDate = new Date();
console.log(myDate);
// 2025-06-08T15:25:52.651Z

console.log(myDate.toDateString());
//Sun Jun 08 2025

console.log(myDate.toISOString());
// 2025-06-08T15:25:52.651Z

console.log(myDate.toJSON());
// 2025-06-08T15:25:52.651Z

console.log(myDate.toLocaleString());
// 6/8/2025, 3:25:52 PM

console.log(myDate.toString());
//Sun Jun 08 2025 15:25:52 GMT+0000 (Coordinated Universal Time)
console.log(typeof myDate);
//object

let myCreateDate = new Date( 2023, 0, 23)

console.log(myCreateDate.toDateString());
//Mon Jan 23 2023
let myCreatedDate = new Date( "06-09-2025")

console.log(myCreatedDate.toLocaleString());
// 1/23/2023, 5:03:00 AM


let timeStamp = Date.now();// this will give you the time at which the timestamp is been made into milisecond 
// console.log(timeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000))


