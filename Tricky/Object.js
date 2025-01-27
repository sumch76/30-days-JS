// OBJECT Interview Questions
 const user={
    name :"sumit",
    age:25,
    "value":true,
 };
 console.log(user.name);
 console.log(user["value"]); //accessiing value like this

// Question 1 : Delete keyword in Object

const func = (function(a){
    delete a;
    return a;
  })(5);
  
console.log(func);

// Computed Properties

// let property = "firstName"
// let name = "Sumit chaubey"

// let person = {
//   [property]: name,
// };

// // Accessing
// alert( bag.firstName );
// alert( bag[property] );

// Looping in Object

// let user = {
//     name: "Sumit",
//     age: 24,
//   };
  
//   for (let key in user) {
//     alert( key );  // name, age
//     alert( user[key] ); // Sumit 24
// }


// // Question 2 : Output

const obj = { a: 'one', b: 'two', a: 'three' };
console.log(obj);


// // Question 3 : Create a function multiplyByTwo(obj) that multiplies all numeric property values of obj by 2.

let nums = {
    a: 100,
    b: 200,
    title: "My nums"
};
  
//multiplyNumeric(menu);

// function multiplyByTwo(obj) {
//     for (let key in obj) {
//       if (typeof obj[key] == 'number') {
//         obj[key] *= 2;
//       }
//     }
// }


// // Question 4 : Output (Important)

const a = {};
const b = { key: 'b' };
const c = { key: 'c' };

a[b] = 123;
a[c] = 456;

//console.log(a[b]);
// console.log(a);

// Object keys get converted to strings when used in plain objects ({}).

// Only the last assigned value is retained if multiple objects are used as keys, as they all convert to the same string "[object Object]".

// // Question 5 : JSON.Stringify and JSON.parse 

const userOne = {
    name : "sumit",
    age : 87
};

const strObj = JSON.stringify(userOne);
// console.log(strObj);

// console.log(JSON.parse(strObj));


// // Question 6 : Output

console.log([...'Lydia']); //[ 'L', 'y', 'd', 'i', 'a' ]


// // Question 7 : Output

const user1 = { name: 'Lydia', age: 21 };
const admin = { admin: true, ...user1 };

// console.log(admin); // {admin :true,name:'Lydia',age:21}


// // Question 8 : Output

const settings = {
    username: 'sumit',
    level: 19,
    health: 90,
  };
  
const data = JSON.stringify(settings, ['level', 'health']);
console.log(data); //{"level":19,"health":90}
//Replacer Array in JSON.stringify()

// You can selectively include properties by passing an array of property names.
// Useful when you only want to extract specific fields before sending/storing data.

// // Question 9 : Output

const shape = {
    radius: 10,
    diameter() {
      return this.radius * 2;
    },
    perimeter: () => 2 * Math.PI * this.radius,
  };
  
console.log(shape.diameter());
console.log(shape.perimeter()); //NaN


// // Question 10 : Destructuring in object

let user2 = {
    name:"Sumit",
    age:24,
    fullName : {
        firstName : "Sumiii",
        lastName : "Chaubey"
    }
};
  
const name = "Coder"    // to change name or renaming
const {name :myName}=user2;
const { fullName : {firstName,lastName}} = user2;//to get nested value
console.log(myName);
console.log(firstName,lastName);


// // Question 11 : Output

function getItems(fruitList, favoriteFruit,...args) {
    return [...fruitList, ...args, favoriteFruit]
}
  
console.log(getItems(["banana", "apple"], "pear", "orange"));


// Question 12 : Output

// let c = { greeting: 'Hey!' };
// let d;

// d = c;
// c.greeting = 'Hello';
// console.log(d.greeting);


// // Question 13 : Output

console.log({a:1} == {a:1});
console.log({a:1} === {a:1});


// // Question 14 : Output

// let person = { name: 'Lydia' };
// const members = [person];
// person = null;

// console.log(members);


// // Question 15 : Output

const value = { number: 10 };

const multiply = (x = { ...value }) => {
  console.log((x.number *= 2));
};

multiply();
multiply();
multiply(value);
multiply(value);




// // Question 17 : Output 

function changeAgeAndReference(person) {
    person.age = 25;
    person = {
      name: 'John',
      age: 50
    };

    return person;
}

const personObj1 = {
    name: 'Alex',
    age: 30
};

const personObj2 = changeAgeAndReference(personObj1);

console.log(personObj1); // -> ?
console.log(personObj2); // -> ?


// // Question 18 : Shallow copy VS Deep copy

// // Q - How to clone an object without referencing its keys to original object


// const obj = {a: 1 ,b: 2}
// const objclone = Object.assign({},obj);
// const objclone = JSON.parse(JSON.stringify(employee));
// const objclone = { ...obj };