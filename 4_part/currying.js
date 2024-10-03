//curring function
// Currying is a technique where a function is transformed into a sequence of functions, each taking a single argument.

function add(x) {
    return function(y) {
      return x + y;
    };
  }
  
  const addFive = add(5);
  console.log(addFive(3)); // Outputs: 8
  
