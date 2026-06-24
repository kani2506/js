// Type conversion 
let anynumber = 33
let numbertostring= String(anynumber)// number converted to string
 console.log(numbertostring)
 console.log(typeof numbertostring) // checked its type

let astring="kanishk"
let stringtonumber= Number(astring)
 console.log(typeof stringtonumber) // the op of this is : number ; however this doesnt mean that the string is already convrted to number.
 console.log(stringtonumber) // here the op is : Nan -> Not a number , because the contents of the string wasnot a numerical value
  // had the value been 1,2,3,... or any number it would have converted.

// NOTE: while converting we use uppercase letters: to convert to a number we use Number, for string we use String

// Operations

// we use diff operators like *,/,%, +,- etc. 
// also **-> means power to . 2**3== 2 raised to the power of 3.

let str1= "abc"
let str2=" bed"
let str3 = str1 + str2 // to concatenate two strings
console.log(str3)

let s=(1+2+"3") // first 1 and 2 are added then concatenated with string 3 , therefore the op is 33
let v=("3"+1+2)// since 3 is before 1 and 2, acc to the rules, everything after it will be converted to a string. op= 312.
console.log(v)
