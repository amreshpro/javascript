 
 console.log([..."Amresh"]);//["A","M","R","E","S","H"]
//  *** Note - If we want string convert into chracter of array then use spread operator => string==> [...string]

const user = {
  name:"Amresh",
  age:23
}
const admin = {
  admin:true,
  ...user //spreading a previously existing object
  //  * Spread take all properties of user and make it the properties of admin
}
console.log(admin)//{ admin: true,  name: "Amresh",  age: 23 }
