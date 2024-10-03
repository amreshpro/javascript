// arrays

const fruits = ["apple", "banana", "cherry"];
const numbers = new Array(1, 2, 3);
//empty array
const emptyArray = new Array();
const lengthArray = new Array(5); // Creates an empty array of length 5

console.log(fruits[0]); // Outputs: 'apple'
console.log(fruits[2]); // Outputs: 'm

const moreFruits = ["pineapple", "berry"];
const allFruits = fruits.concat(moreFruits);
console.log(allFruits); // Outputs: ['kiwi', 'orange', 'mango', 'pineapple', 'berry']

fruits.forEach((fruit) => {
  console.log(fruit);
});
// Outputs: 'kiwi', 'lemon', 'orange', 'mango'

const shortFruits = fruits.filter((fruit) => fruit.length < 6);
console.log(shortFruits); // Outputs: ['kiwi', 'lemon', 'mango']

const found = fruits.find((fruit) => fruit.startsWith("m"));
console.log(found); // Outputs: 'mango'

const numbers2 = [1, 2, 3, 4];
const sum = numbers2.reduce((total, num) => total + num, 0);
console.log(sum); // Outputs: 10

fruits.sort();
console.log(fruits); // Outputs: ['kiwi', 'lemon', 'mango', 'orange']

const numbers3 = [40, 100, 1, 5];
numbers3.sort((a, b) => a - b);
console.log(numbers3); // Outputs: [1, 5, 40, 100]


