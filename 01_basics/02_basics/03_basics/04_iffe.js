// Immediately Invoked Function Expressions (IFFE)

(function chaidedo ()  {

    console.log(`DB CONNECTED`);

} )();
//This is a IFFE function does require to wrapping up a normal function


// ( () => { 
//     console.log(`DB CONNECTED TWO`)
// } ) ()


( (name) => { 
    console.log(`DB CONNECTED TWO ${name}`)
} ) ('samrat')