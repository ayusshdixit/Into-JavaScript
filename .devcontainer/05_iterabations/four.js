// As now we discoverd tha for of loop does not work on object for its keys and value functions like maps 
// we just have another loop i.e for in loop 
// So here we go   -: For In LOOP
// when we used for of loop with maps its provide both keys as well value only with insertion of key 'word 
// in the loop but in object it did'nt work 0`

// FOR IN LOOP

const myObject ={

    js: 'JavaScript',
    cpp: 'c++',
    rb:  'ruby',
    swift : 'swift by apple '
}

for (const key in myObject) {
   console.log(`${key} is shortcut for  ${myObject[key]}`);
   
}

// const programming =[ 'js', 'ruby', 'cpp',   'py', 'java']
//  

//     for (const key in programming) {
        
//            // console.log(key);
            
//         }
    // has output of - 0, 1,2,3,4
    const programming =[ 'js', 'ruby', 'cpp', 'py', 'java']
   

    for (const key in programming) {
          //console.log(key)
           // console.log(programming[key]);
            
        }

//         //ouput:
// js
// ruby
// cpp
// py
// java



const map =  new Map()

map.set('in', 'India')
map.set('USA', 'United States of America ')
map.set('fr', 'France')


for (const key in Map) {
   console.log(key);
   

    }

  


// for in loop does not applicable in Maps 

