// string
// 3 ways
// 1. '' single quote
// 2. "" double quote
// 3. `` backticks

console.log("---- ---- ----");

const PORT = "8080";
const DB = "MYSQL";
const URI = `http://localhost:${PORT}`;

console.log(URI);

console.log("---- ---- ----");
let name = "IllyaRaja";

console.log(`hello ${1}`); // 1

console.log(`hello ${"name"}`); // name

console.log(`hello ${name}`); // IllyaRaja
console.log("---- ---- ----");


