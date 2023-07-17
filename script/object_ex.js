//exercise
//address object
const address = {
  street: "a",
  city: "sydney",
  zipCode: "2000",
};

function showAddress(address) {
  for (let key in address) console.log(key, address[key]);
}

showAddress(address);

//factory function
function createAddress(street, city, zipCode) {
  return {
    street,
    city,
    zipCode,
  };
}

const address1 = createAddress("a", "b", "c");
console.log(address1);

//constructor function
function createAddress1(street, city, zipCode) {
  this.street = street;
  this.city = city;
  this.zipCode = zipCode;
}

const address2 = new createAddress1("a1", "b1", "c1");
console.log("ads2:", address2);

//object equality
//create two function, one to test whether they equal,on test for referencing same object
const address3 = new createAddress1("a1", "b1", "c1");
function areEqual(address1, address2) {
  return (
    address1.street === address2.street &&
    address1.city === address2.city &&
    address1.zipCode === address2.zipCode
  );
}
console.log("are equal: ", areEqual(address2, address3));

function areSame(address1, address2) {
  return address1 === address2;
}

console.log("are same: ", areSame(address2, address2));

//blog post Object using object literal syntax
let post = {
  title: "a",
  body: "b",
  author: "c",
  views: "d",
  comments: [
    { author: "aa", body: "bb" },
    { author: "aa1", body: "bb1" },
  ],
  isLive: true,
};

//constructor function
function Post(title, body, author) {
  this.title = title;
  this.body = body;
  this.author = author;
  this.views = 0;
  this.comments = [];
  this.isLive = false;
}

let post1 = new Post('a','b','c')
console.log('post: ', post1);

//price range object
let priceRange = [
    {label:'$', tooltip: 'Inexpensive', minPerPerson:0, maxPerPerson:10},
    {label:'$$', tooltip: 'Moderate', minPerPerson:11, maxPerPerson:20},
    {label:'$$$', tooltip: 'Expensive', minPerPerson:21, maxPerPerson:50},
]

// the last two property can be used to filter restaurant
