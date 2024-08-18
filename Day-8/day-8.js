// Activity 1: Template literals
// Task 1: Use template literals to create a string that includes variables for a person's name and age, and log the string to the console.

const name = "John Doe";

const age = 30;

console.log(`Hello, my name is ${name} and I am ${age} years old.`);

// Task 2: Create a multi-line string using the template literals and log it to the console.

const multilineString = 
              `This is a multi-line string.
It spans multiple lines.
This is the end.`;

console.log(multilineString);

// Activity 2: Destructuring

// Task 3: Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.

const numbers = [1, 2, 3, 4, 5];

const [first, second] = numbers;

console.log(first, second);

// Task 4: Use Object destructuring to extract the title and author from a book object and log them to the console.

const book = {
  title: "The Catcher in the Rye",
  author: "J.D. Salinger"
};  

const { title, author } = book;

console.log(title, author);


// Activity 3: Spread and Rest Operators

// Task 5: Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.

const existingArray = [1, 2, 3];

const newArray = [...existingArray, 4, 5, 6];

console.log(newArray);


const existingArray2 = ["sumit","rakesh","shubham"];
const newArray2 = [...existingArray2,...newArray];
console.log(newArray2);
//we can add array to new array.



// Task 6: Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.

function sum(...numbers) {
  return numbers.reduce((accumulator, currentValue) => accumulator + currentValue);
}

console.log(sum(1, 2, 3, 4, 5)); // Output: 15


// Activity 4: Default Parameters

// Task 7: Write a function that takes two parameters and returns their product,
//  with the second parameter having a default value of 1. Log the result of calling this function with and without the second parameter.
function multiply(a,b=1)
{
  return a * b;
}
console.log(multiply(5));
console.log(multiply(5,7));


// Activity 5: Enhanced Object Literals


// Task 8: Use enhanced object literals to create an object with methods and properties, and log the object to the console.

const person = {
  name: "John Doe",
  age: 30,
  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
};

person.greet();

// Task 9: Create an object with computed property names based on variables and log the object to the console.

const person2 = {
  name: "Jane Doe",
  age: 25,
  get greeting() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
};

console.log(person2.greeting);

// Activity 6: Arrow Functions

// Task 10: Write an arrow function that calculates the sum of two numbers and returns the result.

const sum = (num1, num2) => num1 + num2;

console.log(sum(10, 20));