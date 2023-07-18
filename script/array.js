//array
//adding array
const array1 = [3, 4];
array1.push(5, 6);
array1.unshift(1, 2);
array1.splice(2, 0, "a", "b");
console.log("array1: ", array1);

//find element in array
const courses = [
  { id: 1, name: "a" },
  { id: 2, name: "b" },
];

const course = courses.find(function (course) {
  return (course.name = "a");
});

console.log(course);

//arrow function same as above
const course1 = courses.find((course) => (course.name = "a"));

//remove element
let numbers = [1, 2, 3, 4];
let anotherNumber = numbers;
//solution 1
numbers = [];
console.log(numbers);

//solution 2
numbers.length = 0;

//solution 3
numbers.splice(0, numbers.length);

//solution 4
while (numbers.length > 0) numbers.pop();

//combine and slicing
//spread operator
const first = [1, 2, 3];
const second = [4, 5, 6];
const combined = [...first, "a", ...second];
const copy = [...combined];
//iterating
//normal way
let numbers1 = [1, 2, 3, 4];
for (let number of numbers1) console.log(number);

//forEach
numbers1.forEach(function (number) {
  console.log("number: ", number);
});

numbers1.forEach((number, index) => console.log("number: ", index, number));

//sort array of object
const courses1 = [
  { id: 1, name: "Node.js" },
  { id: 2, name: "JavaScript" },
  { id: 3, name: "javaScript" },
  { id: 4, name: "A" },
  { id: 4, name: "B" },
];
// course1.sort(); //wont' work
courses1.sort(function (a, b) {
  // a < b => -1
  // a > b => 1
  // a === b => 0
  const nameA = a.name.toLowerCase();
  const nameB = b.name.toLowerCase();

  if (nameA < nameB) return -1;
  if (nameA > nameB) return 1;
  return 0;
});
console.log(courses1);

//testing element of array
const allPositive = numbers1.every(function (value) {
  return value >= 0;
});
console.log(allPositive);

const somePositive = numbers1.some(function (value) {
  return value >= 0;
});
console.log(somePositive);
//filter
const filterNumber = [1, 1, -1, -3, 4];
const filtered = filterNumber.filter((n) => n >= 0);
//use filter and map to map the filter element to multiple objects
const items = filtered.map((n) => {
  const obj = { value: n };
  return obj;
});
// same but need to include (), because JS read {} as code block
const items1 = filtered.map((n) => ({ value: n }));

console.log(items);
//chaining, same but shorter
const items2 = filterNumber.filter((n) => n >= 0).map((n) => ({ value: n }));

//reduce
const reduceNumber = [1, -3, 6];
let sum1 = 0;
for (let n of reduceNumber) sum1 += n;
console.log(sum1);

const reduceSum = reduceNumber.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(sum1, reduceSum);