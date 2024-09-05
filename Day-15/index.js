// // Activity 1: Understanding Closures

// // Task 1: Write a function that returns another function, where the inner function accesses a variable from the outer function's scope. Call the inner function and log the result.
function outer(){
   let a=23;

   function inner(){
    console.log(a);
   }
   return inner;
}
outer()();
let result=outer(); ///other wayy to do it
result();


// // Task 2: Create a closure that maintains a private counter. Implement functions to increment and get the current value of the counter.

function couter()
{
    let count=0;
    return {
        increment:()=>
        {
            count++;
        },
        getCount:()=>
        {
            return count;
        }
    }
}

let counter=couter();

counter.increment();
counter.increment();
counter.increment();
counter.increment();
counter.increment();
console.log(counter.getCount()); // Output: 5

// /////or////
function counter1(){
    var count=0;
    return function increment()
    {
        count++;
        console.log(count);
        
    }
}
var c1=counter1();
c1();
c1();



// // Activity 2: Practical Closures

// // Task 3: Write a function that generates unique IDs. Use a closure to keep track of the last generated ID and increment it with each call.
function idGenerator(){
    let lastId=0;
    return function generateId(){
        lastId++;
        return lastId;
    };
}
const g1=idGenerator();
console.log(g1());
console.log(g1());
console.log(g1());





// // Task 4: Create a closure that captures a user's name and returns a function that greets the user by name.

function greeter(name)
{
    return function()
    {
        console.log(`greet ${name}`);
        
    }
}
 const greet=greeter("sumit");
 greet();


// // Activity 3: Closures in Loops

// // Task 5: Write a loop that creates an array of functions. Each function should log its index when called. Use a closure to ensure each function logs the correct index.

const functions=[];
for(let i=0;i<5;i++)
{
    functions.push((function(index){
        return function(){
            console.log(index);
            
        }
    })(i));
}

functions[0]();
functions[1]();
functions[2]();
functions[3]();

//using arrow function  with iife
// const functions1=[];
// for(let i=0;i,5;i++)
// {
//     functions1.push(((index)=>
//     {
//         return ()=>console.log(index);
        
//     })(i));
// }

//using arrow without iife
const functions2=[];
for(let i=0;i<5;i++)
{
    functions2.push(()=>console.log(i)
    );
}

functions2[0]();

functions2[1]();

functions2[2]();

// // Activity 4: Module Pattern

// // Task 6: Use closures to create a simple module for managing a collection of items. Implement methods to add, remove, and list items.
const itemManager=(function()
{
    let items=[];

return{
    addItem:function(item)
    {
        items.push(item);
        console.log(`${item} added.`);
        
    },
    removeItem:function(item)
    {
        const index=items.indexOf(item);
        if(index>-1){
            items.splice(index, 1);
        console.log(`${item} removed.`);
        
    }
    else
    {
        console.log(`${item} not found`);
        
    }
},
    listItems:function(){
        if(items.length>0)
        {
            console.log("items in the collection");
            items.forEach((items,index)=>{
                console.log(`${index+1}: ${items}`);
                
            });
        }
    }
}})();
itemManager.addItem('Book');
itemManager.addItem('Pen');
itemManager.listItems(); // Lists all items
itemManager.removeItem('Pen');
itemManager.listItems(); // Lists remaining items
itemManager.removeItem('Notebook'); // Attempts to remove an item not in the list




// // Activity 5: Memoization

// // Task 7: Write a function that memoizes the results of another function. Use a closure to store the results of previous computations.

function memoize(fn) {
    const cache = {};
    return function(n) {
        if (n in cache) {
            return cache[n];
        } else {
            const result = fn(n);
            cache[n] = result;
            return result;
        }
    };
}

// Fibonacci function without memoization
function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// // Memoized Fibonacci function
const memoizedFibonacci = memoize(fibonacci);

console.log(memoizedFibonacci(6));  // 8
console.log(memoizedFibonacci(7));  // 13
console.log(memoizedFibonacci(8));  // 21
console.log(memoizedFibonacci(6));  // 8 (retrieved from cache)



// // Task 8: Create a memoized version of a function that calculates the factorial of a number.
function memoize(fn)
{
    const cache={};
    return function(n){
        if(n in cache){
            return cache[n];
        }
        else{
            const result=fn(n);
            cache[n]=result;
            return result;
        }
    };
}

function factorial(n){
    if(n<=1)
        return 1;
    return n*factorial(n-1);
}
const memoizedFactorial=memoize(factorial);
console.log(memoizedFactorial(5));


//memoization is a technique that can be used to reduce time-consuming calculations
// by saving previous input to something called cache and returning thr result from it
let sum=0;
// const calc=(n)=>
// {
//     for(let i=0;i<n;i++)
//     {
//         sum=sum+i;  
//       }
//         return sum;
// }
// function digitsum(n)
const digitsum=(n)=>
{
    for(let i=0;i<=n;i++)
    {
        sum=sum+i;
    }
    return sum;
}
function memoize(fun){
    const cache={};
    return (n)=>
    {
        if(n in cache)
        {
            console.log("cache");
            console.log(cache);
            return cache[n];  
        }
        else{
            console.log("calculating first time")
            const result=fun(n);
            cache[n]=result;
            return result;
        }
    };
}
console.time();
const memoizedSum=memoize(digitsum);

console.log(memoizedSum(7));

console.timeEnd();

console.time();
console.log(memoizedSum(7));
console.timeEnd();




