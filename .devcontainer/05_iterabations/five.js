const coding =[ 'js', 'cpp','java', 'ruby']

// coding.forEach(function (items) {
//     console.log(items);
// });

// coding.forEach( (val) => {
//     console.log(val)
// })


// function printMe (item){
//     console.log(iteam)
// }

// coding.forEach(printMe)
// coding.forEach( (item, index , arr) => {
//     console.log(item, index , arr);
// })

// modt Important 


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

myCoding.forEach((item)=>
     {   console.log(`${item.languagefile}  is the file and ${item.languagename} are language names `);

})