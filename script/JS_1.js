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
    return num*num
}
console.log(square(2))//two function get called