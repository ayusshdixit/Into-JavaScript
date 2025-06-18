// Reduce

const myNums =[1,2,3,]

// const Totalnums =myNums.reduce(function(accumulator, currentValue)  {
//   console.log(`Accumulator: ${accumulator}, Current Value: ${currentValue}  `);
//   return accumulator + currentValue;
// }, 0); // 6 

// console.log('TotaL nums:', total   );


const total = myNums.reduce((acc,currval)=> acc+currval,0)

// the reduce meeathod have an accumalator , a intial value and a current value 
// the intial value is the value provided after the meathod aftyer comma like above i.e 0
//current value = the current value of the array being iterated over
// the accumulator = the value that is returned from the previous iteration 
// console.log(total)


 const shoppingCart = [{ 

    iteam: 'python',
    price :999
 },
{
  
    iteam: 'javascript',
    price :100
},
{

    iteam: 'JAVA',
    price :599
}
]


const priceToPay=shoppingCart.reduce((acc, item) => item.price + acc, 0);
console.log('Total Price to Pay:', priceToPay   );
