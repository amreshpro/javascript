// const map = new Map();

const map = new Map([
  ["name", "John"],
  ["age", 30],
  ["job", "developer"],
]);

//   set(key, value)
//   get(key)
// keys(), values(), entries()
// keys() returns an iterator for the keys.
// values() returns an iterator for the values.
// entries() returns an iterator for the key-value pairs.
for (const key of map.keys()) {
    console.log(key);
  }
  // Outputs: 'name', 'age'
  
  for (const value of map.values()) {
    console.log(value);
  }
  // Outputs: 'Alice', 25
  
  for (const [key, value] of map.entries()) {
    console.log(`${key}: ${value}`);
  }
  // Outputs:
  // name: Alice
  // age: 25
  