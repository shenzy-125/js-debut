const accountID=123456
let accountEmail="shenzy@gmail.com"
var accountPassword="12345"
accountCity="Bangalore"
let accountState; 

// constants are immutable
// let & var- 2 ways to declare a variable
/*
Prefer not to use var due to issue in block scope & functional scope
*/

accountEmail="shylock@gmail.com"
accountPassword="911911911"
accountCity="Hyderabad"

console.table([accountID, accountEmail, accountPassword, accountCity, accountState])