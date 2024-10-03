// Rest Parameter Function
// A rest parameter function allows a function to accept an indefinite number of arguments as an array.
function sum(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
  }
  
  console.log(sum(1, 2, 3, 4)); // Outputs: 10
  

//   Default Parameters Function
//   A default parameters function allows you to set default values for parameters if no arguments are passed.

  function greet(name = 'Stranger') {
    return `Hello, ${name}!`;
  }
  
  console.log(greet());          // Outputs: Hello, Stranger!
  console.log(greet('Amresh'));  // Outputs: Hello, Amresh!
  
//   Recursive Function
//   A recursive function is a function that calls itself until a base condition is met.
  function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
  }
  
  console.log(factorial(5)); // Outputs: 120
  