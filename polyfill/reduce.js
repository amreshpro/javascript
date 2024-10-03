// arr.map((curr,i,arr))
// arr.filter((curr,i,arr))
// if initalValue is not provided then it take first value of arr as acculated default value
// arr.reduce((acc,curr,i,arr),initalValue)
let num = [1, 2, 3, 4, 5, 6];
let num1 = num.reduce((acc, curr) => {
  return curr * curr + acc;
}, 0);
console.log(num1);

Array.prototype.myReduce = function (cb, initialValue = this[0]) {
  if (this.length == 0) return null;
  let i = 1;
  if (initialValue != this[0]) i = 0;
  let acc = initialValue;
  for (i; i < this.length; i++) {
    acc = cb(acc, this[i], i, this);
  }
  return acc;
};

let num5 = [];
let num2 = num.myReduce((acc, curr) => {
  return acc + curr * curr;
}, 0);

console.log(num2);
