//  loop

let arr = ["A","M","R","E","S","H"]

// for loop
for (let index = 0; index < arr.length; index++) {
console.log(arr[index])    
}
let i = 0;
while(i<arr.length){
console.log(arr[i])
i++;
}

// do while
let j = 0;
do {
  console.log(j);
  j++;
} while (j < 5);



// for in loop 

// for (variable in object) {
//     // code to be executed
//   }
  
for(let char in arr){
    console.log(char)
}


// for of loop
// for (variable of iterable) {
  // code to be executed
// }
const person = { name: "Amresh", age: 25, city: "Delhi" };

for (let key in person) {
  console.log(key + ": " + person[key]); 
  // Outputs: name: Amresh, age: 25, city: Delhi
}
let str = "JavaScript";

for (let char of str) {
  console.log(char); // Outputs each character of the string: 'J', 'a', 'v', etc.
}


// method loop - forEach
arr.forEach(function(element, index, array) {
    // code to be executed
    console.log(index+1,". ",element)
  });
  

//   method - map loop
arr.map((item)=>{
    console.log(item)
})