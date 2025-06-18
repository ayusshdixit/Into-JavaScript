// For Each Loop

const coding =[ 'js', 'cpp','java', 'ruby']

// for Each Function use Call Back Function which  dont have name 
// you can simple name your value and it brought it like a parameter


// coding.forEach(function (items) {
    // console.log(items);
// });

// Another Variation To Write these Function    ` 



coding.forEach( (val) => {
    //console.log(val)
})

// Another variation you can Also Pass Fffffunction as a Parameter


// function printMe (item){
//     console.log(iteam)
// }

// coding.forEach(printMe)  // giving it refernce not excecuting there


// coding.forEach( (item, index , arr) => {
//     console.log(item, index , arr);
// })

// most Important 

// When we have object within the array


const myCoding =[
{
    languagename: "JavaScript",
    languagefile: 'JS'
},
{
    languagename: "java",
    languagefile: 'java'
},
{
    languagename: "CPP",
    languagefile: 'c++'
}
]

  const values =myCoding.forEach((item)=>
     {   console.log(`${item.languagefile}  is the file and ${item.languagename} are language names `);

})

