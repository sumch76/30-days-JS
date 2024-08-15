// Tasks | Activities 🌟
// Activity 1: Function Declaration

// Task 1: Write a function to check if a number is even or odd and log the result to the console.
 
    function checkEvenOdd(num)
    {
        if(num%2===0)
            console.log(`${num} is even`);
            else
            console.log(`${num} is odd`);
            
    }
    checkEvenOdd(15);
    checkEvenOdd(20);

// Task 2: Write a function to calculate the square of a number and return the result.
 function square(num)
 {
    console.log(`square of ${num} is :`+num*num);
    
 }

 square(20);
 square(25);
// Task 3: Write a function to find the maximum of two numbers and return the result.

function  maximum(num1,num2)
{
    if(num1>num2)
        console.log(`maximum is ${num1}`);
    else
    console.log(`maximum is ${num2}`);
        
}
maximum(10,45);
maximum(567,78);



// Task 4: Write a function expression to concatenate two strings and return the result.
const concatenateStr=function(str1,str2)
{
    return str1 + str2;
}

console.log(concatenateStr("hello","duiyaaaaa"));



// Activity 3: Arrow Functions

// Task 5: Write an arrow function to calculate the sum of two numbers and return the result.

const sum=(num11,num22)=>{
    return num11+num22;
}

console.log(sum(10,20));


// Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value.
const string=(str,char)=>str.includes(char);

console.log(string("hello","o"));
console.log(string("sumit chaubey","y"));
console.log(string("sumit chaubey","k"));

// Activity 4: Function Parameters and Default Values

// Task 7: Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.

const product=(num1,num2=1)=>num1*num2;
console.log(product(4));
console.log(product(7,8));



// Task 8: Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.


const person=(name,age=undefined)=>console.log(`hello my name is ${name} and age is ${age}!!!!!`)

person("sumit",24);
person("rakesh");

// Activity 5: Higher-Order Functions

// Task 9: Write a higher-order function that takes a function and a number, and calls the function that many times.

const repeatFunction=(func,times)=>
{
    for(let i=0;i<times;i++)
    {
        func();
    }
}

const greet=()=>console.log("hello world");
const greet2=()=>console.log("hello javascript world");

repeatFunction(greet,5);
repeatFunction(greet2,2);

// Task 10: Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.

const applyFunction1=(func1,func2,value)=>
{
    console.log(func1(func2(value)));
}

const double1=(num)=>num*2;

applyFunction1(Math.sqrt,double,25);




// Task 11: Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.

function compose(fn1, fn2) {
    return function (val) {
      return fn2(fn1(val));
    };
  }
  function double(num) {
    return num * 2;
  }
  function square(num) {
    return num ** 2;
  }
  const doubleThenSquare = compose(double, square);
  console.log(doubleThenSquare(2));
  console.log(doubleThenSquare(3));



