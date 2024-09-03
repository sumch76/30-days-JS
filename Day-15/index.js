// Activity 1: Understanding Closures

// Task 1: Write a function that returns another function, where the inner function accesses a variable from the outer function's scope. Call the inner function and log the result.
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


// Task 2: Create a closure that maintains a private counter. Implement functions to increment and get the current value of the counter.

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

/////or////
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



// Activity 2: Practical Closures

// Task 3: Write a function that generates unique IDs. Use a closure to keep track of the last generated ID and increment it with each call.


// Task 4: Create a closure that captures a user's name and returns a function that greets the user by name.

// Activity 3: Closures in Loops

// Task 5: Write a loop that creates an array of functions. Each function should log its index when called. Use a closure to ensure each function logs the correct index.
// Activity 4: Module Pattern

// Task 6: Use closures to create a simple module for managing a collection of items. Implement methods to add, remove, and list items.
// Activity 5: Memoization

// Task 7: Write a function that memoizes the results of another function. Use a closure to store the results of previous computations.

// Task 8: Create a memoized version of a function that calculates the factorial of a number.