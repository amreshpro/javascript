// "use strict";
//object - reference data type
//create
const user = {
  name: "Amresh",
  age: 24,
  sex: "M",
  // your fav os // add key like this
  // [your fav os]// it doesn't work
  // we need to write key as a string if it is multiword
  "your fav os": "Linux",
  // copyOfAge:[age] //age is not defined
  // copyOfAge:[user.age] // error cannot used user before its initialization
  // copyOfAge:[this.age], // output [undefined]-> [expecting a variable but getting a literal constant]
  // copyOfAge:this.age, //output undefined  // error cannot access uninitialized variable
  // copyOfAge:["age"] //output ['age']
  // copyOfAge:user.age, //error error cannot access uninitialized variable
};

console.log(user);
delete user.age;

//we cannot access multi word key like we access single word key
// console.log(user.your fav os); // syntax error unexpected string
// console.log(user."your fav os"); // syntax error unexpected string
// console.log(user.['your fav os']);// syntax error unexpected token '['
console.log(user["your fav os"]); // access like an array and instead of index use multi word key as a string
console.log(user);
// delete user; // deleting here this will also affect the previous user of user because it is a refrence data type

//bun - default provide strict mode so no need to write "use strict"; at top
// node - node show the delete user without strict mode
// node in strict mode - in strict mode it will show error
// console.log(user)

// const func  = (function(a){
//   delete a;// it will delete the object or reference variable , it doesn't affect the local variables

//   return a;
// })(5);
// print - 5 in node without strict mode
// error in bun
//  error in node with strict mode

// console.log(func)

//! Dynamic value in assignment
const fName = "Amresh";
const currentAge = 23;
const user2 = {
  name: fName,
  age: currentAge,
};

console.log(user2);

//! Dynamic key in object
const property = "fName";
const fullName = "Amresh";

const user3 = {
  property: fullName, // output = {property:'Amresh'} //here property is not treated as a variable exist previously
  //* if we want propery as a variable and its value as a key
  [property]: fullName, // output = {fName:'Amresh}
};

console.log(user3);

//print and looping object

//  for in loop is a important loop for iterating objects
for (const key in user3) {
  console.log(key + " :- " + user3[key]);
}
// for(const val of user3 ){ // gives error-> "val of user3" because user3 is object and so user3 is not iterable
//   console.log(val)
// }

const testArr = [1, 2, 3, "Amresh", true];
for (const val of testArr) {
  //testArr is a array . so it is iterable
  console.log(val);
}

//question
const obj1 = {
  a: "one",
  b: "two",
  a: "three",
};
//what is the output?
//here two key with the same name
//  so the first key will be replaced value but the key position remain same -- only value updated
console.log(obj1); //{ a: 'three', b: 'two' }

//question 2
//create a function multiplyByTwo(obj) that multiplies all numeric property values of nums by 2
let nums = {
  a: 200,
  b: 300,
  title: "My Nums",
};
console.log(nums);
multiplyNumberByTwo(nums);
console.log(nums);

function multiplyNumberByTwo(obj) {
  for (const key in obj) {
    if (typeof obj[key] === "number") {
      obj[key] = obj[key] * 2;
    }
  }
}

//question 3
const a = {};
const b = { key: "b" };
const c = { key: "c" };
a[b] = 123; //a['[object Object]'] = 123
a[c] = 456; //a['[object Object]'] = 456 // overrode the previous value

// console.log(a[b]);
// because object cannot be converted into string unless its be a string -> so it becomes [object Object]

console.log(a) // {'[object Object]':456}




// ! What is json Stringify and JSON.parse?

const user4 = {
  name:"Amresh Maurya",
  age:24
};
console.log(user4)
console.log(JSON.stringify(user4)) // JavaScript Objects ----> JSON String 
/**
 { name: 'Amresh Maurya', age: 24 } ====>  {"name":"Amresh Maurya","age":24}
 */

 // localStorage always store value in string format
 localStorage.setItem("testStorage",JSON.stringify(user4)); //{"name":"Amresh Maurya","age":24}
 localStorage.setItem("directSaveAsObjectInStorage",user4); // [object Object]
 const store1 = localStorage.getItem("testStorage");//{"name":"Amresh Maurya","age":24}
 const store2 = localStorage.getItem("directSaveAsObjectInStorage");//[object Object]
 console.log(store1)
 // not gives desired output because store1 is not a javascript object . it just a json string nothing else
//  for ( let key in store1){
//!  // not work as we want because store1 is not a javascript object
//   console.log(key+":="+store1[key]);
// }
 console.log(store2)
// ! localStorage.getItem("testStorage")  gives json string which is not eligible to access javascript string methods
// * Json String convert into javascript object use parse method
const getUser4AsAObject = JSON.parse(localStorage.getItem("testStorage"));
console.log(getUser4AsAObject)
//we can iterate this
for ( let key in getUser4AsAObject){
  console.log(key+":="+getUser4AsAObject[key]);
}





// question 4
const settings = {
  username:"amreshpro",
  level:24,
  health:80
}
// JSON.stringify(stringOBJECT,arrayofStringKeys)
// second parameter are make sure only the keys specified in array are stringify not all keys in object
const data = JSON.stringify(settings,["level", "health"]);
console.log(data)
