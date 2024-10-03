// functions

function greet(name) {
  return `Hello, ${name}!`;
}

console.log(greet("Amresh"));

//   function expression
const greet2 = function (name) {
  return `Hello, ${name}!`;
};

console.log(greet2("Amresh")); // Outputs: Hello, Amresh!

//   arrow functions
const greet = (name) => `Hello, ${name}!`;

console.log(greet("Amresh")); // Outputs: Hello, Amresh!

// anonymous function
setTimeout(function () {
  console.log("This will run after 2 seconds");
}, 2000);

//    IIFE
(function () {
  console.log("This function runs immediately!");
})();

//  Constructor Function
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const person1 = new Person("Amresh", 25);
console.log(person1.name); // Outputs: Amresh

// Generator Function
// Generator functions return an iterator object that can be used to control the execution of the function, allowing you to pause and resume execution.
function* generateNumbers() {
  yield 1;
  yield 2;
  yield 3;
}

const generator = generateNumbers();

console.log(generator.next().value); // Outputs: 1
console.log(generator.next().value); // Outputs: 2
console.log(generator.next().value); // Outputs: 3

// HOF(Higher Order Function)
// A higher-order function is a function that takes another function as an argument or returns a function.

function higherOrder(fn) {
  return fn();
}

const greet3 = () => "Hello!";

console.log(higherOrder(greet3)); // Outputs: Hello!

//  Callback Function
// A callback function is a function passed as an argument to another function and is executed after some operation has been completed.
function processUserInput(callback) {
  const name = "Amresh";
  callback(name);
}

processUserInput(function (name) {
  console.log(`Hello, ${name}!`); // Outputs: Hello, Amresh!
});
