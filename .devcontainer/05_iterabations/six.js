// filter  Map and Reduce

// const coding =[ 'js', 'cpp','java', 'ruby']


// const values =  coding.forEach((item) => {
//     console.log(item);
//     return item;
// })  // for each does'nt return value ..

// console.log(values);  // Here its does'nt return  any value 

const arr = [ 1,2,3,4]
const values = arr.map(num => num*2)
    
// console.log(values);




// SO FOR RETURNING VALUES WE USE FILTER  

const myNums = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ] 

// filters return value 

//  const newNums = myNums.filter( (num) => num > 4 )
//  console.log(newNums);

// if you open a scope than you must have to write return keyword in filter
 
//  const newNums = myNums.filter( (num) =>{
//      return  num > 4;
//  } )
//  console.log(newNums);


 // used in for each loop , same thing 

// const newNums=[]

// myNums.forEach((num)=> {
//     if ( num > 4){
//    newNums.push(num)  
//   }

// })

// console.log(newNums);

const Books = [
{ title: 'BookOne' , Genre:'non- fiction' , Publish : 1984 , Edition : 2003 },
{ title: 'BookTwo' , Genre:'non- fiction' , Publish : 1980 , Edition : 2009 },
{ title: 'Bookthree' , Genre:'science' , Publish : 1990 , Edition : 2008 },
{ title: 'Bookfour' , Genre:'science' , Publish : 2000 , Edition : 2002 },
{ title: 'Bookfive' , Genre:'science' , Publish : 2010 , Edition : 2018 },
{ title: 'Booksix' , Genre:'history' , Publish : 1980 , Edition : 2003 },
{ title: 'Bookseven' , Genre:'history' , Publish : 1886 , Edition : 2005 },
{ title: 'Bookeight' , Genre:'fiction' , Publish : 1989 , Edition : 2014 },
{ title: 'Booknine' , Genre:'fiction' , Publish : 1987 , Edition : 2007 },
{ title: 'Bookten' , Genre:'fiction' , Publish : 1990 , Edition : 2003 },
] ;

let userBook = Books.filter((bk) =>  bk.Genre==='history' )
console.log(userBook);

userBook = Books.filter((bk)=>   bk.Publish >=2000 && bk.Genre==='science')
console.log(userBook);
