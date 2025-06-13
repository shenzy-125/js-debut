let myDate=new Date()
console.log(myDate.toString()) // Detailed description of the date
console.log(myDate.toDateString()) // Detailed description without the time
console.log(myDate.toLocaleString()) // Shortened description
console.log(myDate.toLocaleDateString()) // Shortened description where time vanishes
// console.log(typeof myDate)  // Date is another type of Object

let myCreatedDate=new Date(2025,5,13) //(y,m,d)
// console.log(myCreatedDate.toDateString())
// console.log(myCreatedDate.toLocaleDateString())
let CreatedDate=new Date("2025-07-19") //(y,m,d)
// console.log(CreatedDate.toLocaleDateString())

let myTimeStamp=Date.now()
console.log(myTimeStamp) //returns the current time in milliseconds starting from 1 Jan, 1970
console.log(CreatedDate.getTime()) // same as above snippet

console.log(Math.floor(Date.now()/1000))

let newDate=new Date()
newDate.toLocaleDateString('default',{     // Further customization of ToLocaleDateString()
    weekday:"long"
})