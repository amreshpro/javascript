// arr.map((curr,i,arr))

let num = [1, 2, 3, 4, 5, 6];
let num1 = num.map((curr) => {
  return curr * 10;
});
console.log(num1);

Array.prototype.myMap = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    temp.push(cb(this[i], i, this));
  }
  return temp;
};

let num2 = num.myMap((num)=>{
  return num*5
})

console.log(num2)

