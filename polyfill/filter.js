// arr.map((curr,i,arr))
// arr.filter((curr,i,arr))
let num = [1, 2, 3, 4, 5, 6];
let num1 = num.filter((curr) => {
  return curr >3;
});
console.log(num1);

Array.prototype.myFilter = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
  let filterValue = cb(this[i], i, this)
  if(filterValue) temp.push(filterValue);
  }
  return temp;
};

let num2 = num.myFilter((num)=>{
if(num>3) return num
})

console.log(num2)

