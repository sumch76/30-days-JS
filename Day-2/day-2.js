//Activity 1: Arithmetic Operations

//Task 1: Write a program to add two numbers and log the result to the console.
const num1=56;
const num2=78;
console.log(num1+num2);

//Task 2: Write a program to subtract two numbers and log the result to the console.
const no1=123;
const no2= 345;
console.log(no1-no2);

//Task 3: Write a program to multiply two numbers and log the result to the console.
const mul1=123;
const mul2=10;
console.log(mul1*mul2);

//Task 4: Write a program to divide two numbers and log the result to the console.

const divide1=123;
const divide2=10;
if(divide2!=0)
{
    console.log(divide1/divide2); 
}

//Task 5: Write a program to calculate the remainder of two numbers and log the result to the console.

const remainder1=123;
const remainder2=10;
console.log(remainder1%remainder2);

//Task 6: Write a program to check if two numbers are equal and log a boolean value to the console.

const equal1=123;
const equal2=123;
console.log(equal1===equal2);

//Activity 2: Assignment Operators

//Task 7: Use the += operator to add a number to a variable and log the result to the console.

let add1=10;
add1+=5;
console.log(add1);

//Task 8: Use the -= operator to subtract a number from a variable and log the result to the console.
let subtract=10;
subtract-=5;
console.log(subtract);

//*Activity 3: Comparison Operators*

//Task 9: Write a program to compare two numbers using > and < log the result to the console.

const compare1=10;
const compare2=5;
console.log(compare1>compare2);
console.log(compare1<compare2);

//Task 10: Write a program to compare two numbers using >= and <= log the result to the console.

const compare3=10;
const compare4=10;
const compare5=5
console.log(compare3>=compare4);
console.log(compare5<=compare3);

//Task 11: Write a program to compare two numbers using == and === log the result to the console

const compare6=10;
const compare7=10;
const compare8=5;
var compare9="10";
console.log(compare6==compare7);
console.log(compare8===compare7);
console.log(compare6===compare9);

//Task 12: Write a program to compare two strings using == and === log the result to the console

const compare10="Hello";
let compare11="Hello";
const compare12="hello";
console.log(compare10==compare11);
console.log(compare10===compare11);

//Activity 4: Logical Operators

//Task 13: Write a program that uses the && operator to combine two conditions and log the result to the console.

const condition1=true;
const condition2=false;
const condition3=10;
const condition4=
console.log(condition1&&condition2);

let e = 10;
let f = 25;
let g = 30;

let condition = e < f && f < g;

console.log(
  "(" + e + " < " + f + ") && (" + f + " < " + g + "): " + condition1
);


// - Task 14: Write a program that uses the `||` operator to combine two conditions and log the result to the console.

const condition5=true;
const condition6=false;
console.log(condition5||condition6);

// Activity 5: Ternary Operator ✅

// - Task 14: Write a program that uses the ternary operator to check if a number is positive or negative and log the result to the console.

let number=10;
let result = number > 0 ? "Positive" : "Negative";
console.log(result);

// - Task 15: Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.
let number2=78;
let result2 =number%2===0?"even":"odd"
console.log(result2);
