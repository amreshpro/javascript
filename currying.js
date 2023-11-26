// currying in js
// f(a,b)---> f(a)(b)

function f1(a) {
  return function(b){
  return `${a},${b}`;
  };
}

console.log(f1(5)(6))


//why do we use currying in js?
// To avoid passing same variable again and again
// To create higher order functions
// To make function pure and less pron to error

