//
console.log("hello world");
let name;
console.log(name);
let person = { name: "vicki", age: 25 };

console.log(person.name);
console.log(person["name"]);

let selectionColor = ["red", "blue"];
console.log(selectionColor[0]);

// function
function greet(firstName, lastName) {
  console.log("hello " + firstName + " " + lastName);
} // name is parameter

greet("vicki", "chen"); // vicki is argument
//calculate a value
function square(num) {
  return num * num;
}
console.log(square(2)); //two function get called

// operator
// arithmetic operator
let x = 10;
let y = 3;

console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);
console.log(x ** y);

//increment
// console.log(x++)
// console.log(++y)

//decrement
console.log(x--);
console.log(--y);

// equality operator
console.log(1 === 1);
console.log("1" === 1);
console.log(1 == 1);
console.log("1" == 1);
console.log(true == 1);

// ternary operator
// if a customer has more than 100 Point
// they are gold else they are sliver
let point = 110;
let type = point > 100 ? "gold" : "silver";
console.log(type);

// logical operator
console.log(true && false);
console.log(true || false);

// logical operator with non-boolean
console.log(false || 1);
console.log(false || 2 || 1);

//bitwise operator
//example - access control system
// read, write, execute
// 00000100
// 00000010
// 00000001

const readPermission = 4;
const writePermission = 2;
const executePermission = 1;

let myPermission = 0;
// add read and write permission
myPermission = myPermission | readPermission | writePermission;
// check if my permission have read permission or not
let message = myPermission & readPermission ? "yes" : "no";
console.log("read permission:" + message);

//exercise
let a = "red";
let b = "blue";
let c = a;
a = b;
b = c;

console.log(a);
console.log(b);

//control flow
//if..else
//if hour is between 6am and 12pm: good morning;
//if hour is between 12pm and 6pm: good afternoon;
//otherwise: good evening;
let hour = 10;

if (condition) {
  statement;
} else if (condition) {
  statement;
} else {
  statement;
}
