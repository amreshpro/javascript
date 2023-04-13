const arr = [1, 3, 6, false, "Amresh"];

console.log(arr);


// & add element at the end of the array
arr.push("Maurya");
console.log(arr);

// & add element at the begining of the array 
arr.unshift(0)
console.log(arr)

// & delete the item at the end of the array
arr.pop()

// ^ Print the array element one by one using forOf loop
for(const item of arr){
  console.log(item);
}



// * map, filter, reduce, concat, slice and splice

/*
^ Array - Big-O time complexity
Insert/remove from end - O(1)
Insert/remove from begining - O(n)
Access - O(1)
Search - O(n)
push/pop - O(1)
Shift/unshift/concat/slice/splice - O(n)
forEach/map/filter/reduce - O(n)

*/

