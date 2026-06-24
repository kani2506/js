"use strict"; // treat all the js code as newer and strict version. after this strict mode is enforced in js which helps with errors.

//alert(3+1) // this wont work because we r using node js instead of browser.

console.log(3
    +3) // not a good practice 

console.log(3+1) // write like this in a readable format.

/* different types of datatypes : 

 // I) PRIMITIVE DATATYPES
 1) number    =  stores values upto 2^
 2) bigint    =  for even bigger values that exceeds the number datatype range 
 3) string    =  ""  write them in inverted commas
 4) boolean   =  true/false 
 5) null      =  it is a standalone value, diff from undefined as null can be assigned to a var , for ex : temp=> null.
 6) undefined =  when we have declared a var but not assigned a value.
 7) symbol    =  used for uniqueness.

// II) OBJECTS
*/

console.log(typeof undefined ) // result: undefined
console.log(typeof null)// result: object

// null is treated as an object.
// typeof is a built in operator in js that tells about the type of the var.