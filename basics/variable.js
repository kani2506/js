const accountId= 18148 // let for constants , ie, the values that cannot change 
let accountEmail="kanishksharma2506@gmail.com" // let for variables 
var accountPassword="12345"
accountcity="jodhpur"

// console.log();  to print all the constants and variables one by one , we use console.log. However this practice can be tedious.Hence
// we can use console.table

console.table([accountId, accountEmail, accountPassword,accountcity]);  // we have to write the names inside [] brackets , as
 // it can only take arrays as input in table format.

/*
(i) if{
     -> this space is called scope.
}

(ii) In older js there was no understanding for scope, and var was used which only respects boundaries created by a function.
hence we started using"let". This fixes the problem. 

(iii) ex:   The var problem
if (true) {
    var discount = 20; 
}
console.log(discount); // now anyone can chnge the value of discount even when its inside the if statement.

but if we used let then "console.log(discount);" will give an error as the value of discount cant be changed outside the if function.

(iv) Hence always use let instead of var.
*/
        
