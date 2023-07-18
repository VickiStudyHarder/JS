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

if (hour >= 6 && hour < 12) {
  console.log("Good morning");
} else if (hour >= 12 && hour < 18) {
  console.log("Good afternoon");
} else {
  console.log("Good evening");
}

//switch...case
let role;

switch (role) {
  case "guest":
    console.log("Guest User");
    break; //if not break it will execute to next block

  case "moderator":
    console.log("Moderator User");
    break;

  default:
    console.log("Unknown User");
  //no need to break
}

//for loop
for (let i = 0; i < 5; i++) {
  console.log(i);
}

console.log("odd number");
for (let i = 1; i < 5; i++) {
  if (i % 2 != 0) console.log(i);
}

console.log("odd number reverse");
for (let i = 5; i > 0; i--) {
  if (i % 2 != 0) console.log(i);
}

//while loop
console.log("while loop");
let i = 0;
while (i <= 5) {
  if (i % 2 != 0) console.log(i);
  i++;
}
// do while loop
console.log("do while loop");
let z = 9;
do {
  if (z % 2 != 0) console.log(z);
  z++;
} while (z <= 5);

//for in loop
const person1 = {
  name: "vicki",
  age: 30,
};

for (let key in person1) console.log(key, person1[key]);

const colors = ["red", "blue", "green"];
for (let index in colors) console.log(index, colors[index]);

//for of loop
for (let color of colors) {
  console.log(color);
}

//break and continue
let q = 0;
while (q <= 10) {
  if (q % 2 === 0) {
    q++;
    continue;
  }
  console.log(q);
  q++;
}
//exercise
//exercise 1
function maxNumber(num1, num2) {
  //   if (num1 > num2) {
  //     return num1;
  //   } else {
  //     return num2;
  //   }
  return num1 > num2 ? num1 : num2;
}
console.log("maxNumber" + maxNumber(12, 11));

//exercise2
function isLandscape(width, height) {
  return width > height;
  //no need to add true or false as evaluating the condition will return true or false
}

//exercise3
//divisible by 3 => fizz
//divisible by 5 => buzz
//divisible by 3 and 5 => fizzbuzz
//not divisible by 3 or 5 => return number
//input not a number => 'not a number'

function fizzBuzz(num) {
  if (typeof num !== "number") return NaN;
  if (num % 3 === 0 && num % 5 === 0) {
    return "FizzBuzz";
  }
  if (num % 3 === 0) {
    return "Fizz";
  }
  if (num % 5 === 0) {
    return "Buzz";
  }
  return num;
}

console.log(fizzBuzz(""));

//exercise 4
//speed limit = 70
// 5 -> 1 point
//more then 12 point -> suspended

function checkSpeed(speed) {
  const speedLimit = 70;
  const kmPerPoint = 5;

  if (speed < speedLimit + kmPerPoint) {
    return "ok";
  }
  let point = Math.floor((speed - speedLimit) / 5);
  if (point < 12) return point + " point";
  else {
    return "license suspended";
  }
}

console.log(checkSpeed(80));

//exercise 5
function showNumber(limit) {
  for (let c = 0; c <= limit; c++) {
    const message = c % 2 === 0 ? "EVEN" : "ODD";
    console.log(c, message);
    // if (c % 2 == 0) console.log(c, " EVEN");
    // else {
    //   console.log(c, " ODD");
    // }
  }
}
showNumber(10);

//exercise 6
array = [undefined, null, 0, "", false, NaN, 2];
function countTruthy(array) {
  let count = 0;
  for (let value of array) if (value) count++;
  return count;
}
console.log(countTruthy(array));

//exercise 7
//we want to display string type properties only
const movie = {
  title: "a",
  releaseYear: 2018,
  rating: 4.5,
  director: "vicki",
};

function showProperties(obj) {
  for (key in obj) if (typeof obj[key] === "string") console.log(key, obj[key]);
}
showProperties(movie);

//exercise 8
//return all the multiple of 3: 3 6 9
//return all the multiple of 5: 5 10 15
//return the sum of all these multiple

function sum(limit) {
  let result = 0;
  for (let i = 0; i <= limit; i++) {
    if (i % 3 == 0 || i % 5 == 0) result += i;
    //or will get 3, 5, 3 and 5
  }
  console.log(result);
}

sum(15);

//exercise 9
mark = [70, 80, 40];
function calculateAverage(array) {
  let sum = 0;
  for (let value in array) sum += value;
  return sum / array.length;
}
function calculateGrade(array) {
  average = calculateAverage(array);
  if (average < 60) return "F"; //function end with return
  if (average < 70) return "D";
  if (average < 80) return "C";
  if (average < 90) return "B";
  return A;
}

console.log("mark", calculateGrade(mark));

//exercise 10
function showStar(rows) {
  for (let i = 1; i <= rows; i++) {
    let pattern = "";
    for (let j = 1; j <= i; j++) pattern += "*";
    console.log(pattern);
  }
}
showStar(5);

//exercise 11
//prime number is a number that can only evenly divide by it self and 1
function isPrime(number) {
  for (let factor = 2; factor < number; factor++)
    if (number % factor === 0) return false;
  return true;
}

function showPrime(limit) {
  for (let number = 2; number <= limit; number++)
    // let isPrime = true;
    // for (let factor = 2; factor < number; factor++)
    //   if (number % factor === 0) {
    //     isPrime = false;
    //     break; //if it can be divide then no need to test the rest of the factor
    //   }

    if (isPrime(number)) console.log(number);
}
//we can transfer this to two functions

showPrime(10);

//object
//basic
const circle = {
  radius: 1,
  location: {
    x: 1,
    y: 1,
  },
  draw: function () {
    console.log("draw");
  },
};
circle.draw();

//factory function
// function createCircle(radius, location) {
//     //radius and draw are method name
//   return {
//     radius: radius,
//     draw: function () {
//         console.log("draw");
//       }
//   };
// }

//same function to above, shorter syntax
function createCircle(radius, location) {
  //radius and draw are method name
  return {
    radius,
    draw() {
      console.log("draw");
    },
  };
}

const circle1 = createCircle(10);
// console.log("circle1: ", circle1);
// console.log("circle1: ",circle1.draw)
circle1.draw();

//constructor function
function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}
//use the new keyword, we create an empty object
//then it will set this to point to that object
// then set circle2 point to this object
const circle2 = new Circle(1);

// value vs reference type
let x1 = 10;
let y1 = x1;
x1 = 20;
console.log("x1: ", x1);
console.log("y1: ", y1);

let x2 = { value: 10 };
let y2 = x2;
x2.value = 20;
console.log("x2: ", x2);
console.log("y2: ", y2);

// enumerating properties of an object
for (let key of Object.keys(circle1)) console.log(key);
//return array of key

//cloning object
const another = Object.assign(
  {
    color: "yellow",
  },
  circle1
);
console.log("another:", another);

//spread operator
const anotherCircle = { ...circle1 };
console.log("anotherCircle:", anotherCircle);

//template literal
const message1 = "This is my\n" + "'first' message";

const name1 = "vicki";

const message2 = `Hi ${name1}
${2 + 3}
This is my
'first' message`;

console.log(message1);
console.log(message2);

//date
const now = new Date();
const data1 = new Date("May 11 2018 09:00");
const data2 = new Date(2018, 4, 11, 9);
now.setFullYear(2017);
console.log(now.toDateString());
console.log(now.toISOString()); //used for transfer value to backend

