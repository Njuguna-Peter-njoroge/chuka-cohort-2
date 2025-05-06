let message: string = "Hello, TypeScript!";
const PI: number = 3.14159;
var oldVariable: any = "This is older syntax";

message = "Hello again!";

let name: string = "Alice";
let age: number = 25;
let isStudent: boolean = false;
let emptyValue: null = null;
let notDefined: undefined = undefined;

let person: { name: string; city: string } = { name: "Bob", city: "Chuka" };
let numbers: number[] = [10, 20, 30];

function greet(personName: string): void {
  console.log("Hello, " + personName + "!");
}

let x: number = 10;
let y: number = 5;

console.log(x + y);
console.log(x === "10");
console.log(x == "10");
console.log(x > y && isStudent === false);

let temperature: number = 28;
if (temperature > 30) {
  console.log("It's hot!");
} else if (temperature > 20) {
  console.log("It's warm.");
} else {
  console.log("It's cool.");
}

let day: string = "Monday";
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

for (let i: number = 0; i < 5; i++) {
  console.log("Iteration: " + i);
}

let counter: number = 0;
while (counter < 3) {
  console.log("Counter: " + counter);
  counter++;
}

let i: number = 0;
do {
  console.log("Do-while: " + i);
  i++;
} while (i < 2);

let personObj: { name: string; age: number } = { name: "Eve", age: 22 };
for (const key in personObj) {
  console.log(key + ": " + personObj[key]);
}

let colors: string[] = ["red", "green", "blue"];
for (const color of colors) {
  console.log(color);
}

function add(a: number, b: number): number {
  return a + b;
}

let sumResult: number = add(5, 3);
console.log("Sum:", sumResult);

const multiply = (x: number, y: number): number => {
  return x * y;
};

let product: number = multiply(4, 6);
console.log("Product:", product);

const square = (n: number): number => n * n;
console.log("Square:", square(7));

interface Animal {
  name: string;
  sound(): string;
}

class Dog implements Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  sound() {
    return "Woof!";
  }
}

const myDog = new Dog("Buddy");
console.log(myDog.sound());

enum Status {
  Pending,
  Processing,
  Completed,
  Failed,
}

let taskStatus: Status = Status.Processing;
console.log("Task Status:", taskStatus);