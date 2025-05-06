let message = "Hello, JavaScript!";
const PI = 3.14159;
var oldVariable = "This is older syntax";

message = "Hello again!";
// PI = 3.14;

let name = "Alice";
let age = 25;
let isStudent = false;
let emptyValue = null;
let notDefined;

let person = { name: "Bob", city: "Chuka" };
let numbers = [10, 20, 30];

function greet(personName) {
  console.log("Hello, " + personName + "!");
}

let x = 10;
let y = 5;

console.log(x + y);
console.log(x === "10");
console.log(x == "10");
console.log(x > y && isStudent === false);

let temperature = 28;
if (temperature > 30) {
  console.log("It's hot!");
} else if (temperature > 20) {
  console.log("It's warm.");
} else {
  console.log("It's cool.");
}

let day = "Monday";
switch (day) {
  case "Monday":
    console.log("Start of the week.");
    break;
  case "Friday":
    console.log("Almost weekend!");
    break;
  default:
    console.log("Just another day.");
}

for (let i = 0; i < 5; i++) {
  console.log("Iteration: " + i);
}

let counter = 0;
while (counter < 3) {
  console.log("Counter: " + counter);
  counter++;
}

let i = 0;
do {
  console.log("Do-while: " + i);
  i++;
} while (i < 2);

let personObj = { name: "Eve", age: 22 };
for (let key in personObj) {
  console.log(key + ": " + personObj[key]);
}

let colors = ["red", "green", "blue"];
for (let color of colors) {
  console.log(color);
}

function add(a, b) {
  return a + b;
}

let sumResult = add(5, 3);
console.log("Sum:", sumResult);

const multiply = (x, y) => {
  return x * y;
};

let product = multiply(4, 6);
console.log("Product:", product);

const square = n => n * n;
console.log("Square:", square(7));