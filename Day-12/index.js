// Task 1:
// Write a function that intentionally throws an error and use a try-catch block to handle the error and log an appropriate message to the console.
function ThrowError()
{
    throw new Error("intentionally error");
}
try{
    ThrowError();
}
catch(error){
    console.log("error:",error.message);

}

//Task 2: Create a function that divides two numbers and 
// throws an error if the denominator is zero. Use a try-catch block to handle this error.

function DivideByZero(num,deno)
{
   if(deno===0)
   {
    throw new Error("denominator is zero ");
   }
   return num/deno;
}

   try{
    console.log(DivideByZero(23,7));
    console.log(DivideByZero(23,0));
    
   }
   catch(error){
    console.error("error:",error.message);
   }

//Activity 2: Finally Block

// Task 3: Write a script that includes a try-catch block and a finally block, 
// Log messages in the try, catch, and finally blocks to observe the execution flow

try{
    let result=10/0;
    console.log("This line will not be executed");
}
catch(error){
    console.log("Error:",error.message);
}

finally{
    console.log("This line will always be executed");
}
// *****************Or**********

try{
    console.log("This line will be executed");
    throw new Error("there is error");
}

catch(error){
    console.log("Error:",error.message);
}

finally{
    console.log("this will always be executed");
    
}

console.log("**********task 3 completed**************");

// Activity 3: Custom Error Objects

// Task 4: Create a custom error class that extends the built-in Error class, Throw an instance of this custom error in a function and handle it using a try-catch block

class CustomError extends Error{
    constructor(message)
    {
        super(message);
        this.name="CustomError";
    }
}
function throwCustomError(){
    throw new CustomError("this is a custom error");
}

try{
    throwCustomError();
}
catch(error)
{
    console.error("Error:" ,error.message);
    console.error(`${error.name}: ${error.message}`)
}

console.log("**********task 4 completed**************");
//Task 5: Write a function that validates user input (e.g., checking if a string is not empty) and throws a custom error if the validation fails. 
// Handle the custom error using a try-catch block.
class InputValidation extends Error{
    constructor(message)
    {
        super(message);
        this.name="validation Error";
    }
}
function validateInput(input)
{
    if(input.trim()==="")
    {
        throw new InputValidation("input cannot be empty");
    }
    return "valid input";
}


try{
    console.log(validateInput("input"));
    console.log(validateInput(""));
}
catch(e){
    console.log(`${e.name}: ${e.message}`);
}

console.log("**********task 5 completed**************");



//Activity 4: Error Handling in Promises

//Task 6: Create a promise that randomly resolves or rejects. Use .catch() to handle the rejection and showing an appropriate message to the console.

const promise=new Promise((resolve,reject)=>
{
    const randomNumber=Math.random();
    if(randomNumber<0.5)
    {
        resolve("promise resolved");
    }
    else
    {
        reject("promise rejected");
    }
});

promise.then((msg)=>console.log(msg)
).catch((err)=>console.log(err));

    





//Task 7: Use try-catch within an async function to handle errors from a promise that randomly resolves or rejects, and log the error message.

async function handlePromise()
{
    try{
        const randomNumber=Math.random();
        if(randomNumber<0.5)
        {
            const resolvedValue=await new Promise((resolve)=>resolve("async function resolved"));
            console.log(resolvedValue);
        }
        else
        {
            throw new Error("async function rejected");
        }
    }
    catch(error){
        console.error("error:",error.message);
    }
}

handlePromise();