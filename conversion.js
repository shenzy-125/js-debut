let score=null
//console.log(typeof score)
let valueInString= Number(score)
//console.log(typeof valueInString)
//console.log(valueInString)

let isLoggedIn=1
let booleanIsLoggedIn= Boolean(isLoggedIn)
//console.log(booleanIsLoggedIn)
// boolean is false only when number==0 or when string==""

let value=9
let negValue=-value
// console.log(negValue)

let str1="Hello"
let str2=" World"
//console.log(str1+str2)

// console.log(1+2+"2")  //32
// console.log("1"+2+2) // 122
// console.log((3+4)*5%3) // 2

// console.log(+true) // 1
// console.log(+"") // 0

let num1, num2, num3
num1=num2=num3=2+2

let gameCounter=100
++gameCounter;
// console.log(gameCounter)
// if used postfix, increment operator increments & returns the value before incrementing
// if used prefix, increment operator increments & returns the value after incrementing

// console.log(null>=0) // true
// console.log(undefined===0) // true

const id= Symbol('123')
const anotherID= Symbol('123')
console.log(id===anotherID) // id & anotherID are 2 unique variables, thanks to Symbol

const heros=["Iron Man", "Superman", "Batman"] //1-D Array

let myObj={
    name: "Gudakesh",
    age: 69,
}  // Object

const myFunction=function(){
    console.log("Hello World");
} // Function

// console.log(typeof anotherID)  // symbol

// Stack memory (Primitive) & Heap memory (Non-primitive)
// Stack stores copy of the value of a variable whereas heap copies the reference of that particular mon-primitive data