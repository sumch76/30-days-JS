//ACtivity 1:variable Declaration

const { log } = require("console");

// - Task 1: Declare a variable using `var`, assign it a number, and log the value to the console.

var num=18;
console.log("my no is :" +num);


//- Task 2: Declare a variable using `let`, assign it a string, and log the value to the console.
 let string="sumit";
 console.log("my name is " +string);
 
// - Task 3: Declare a variable using `const`, assign it a boolean value, and log the value to the console.
const boolean=false;
console.log(boolean);


// - Task 4: Create variables of different data types (number, string, boolean, object, array) and log each variable's type using the `typeof` operator.
// number type

let numb=999;
console.log(typeof numb);


let str="sumit";
console.log(typeof str);


let bool=true;
console.log(typeof bool);


///object declaration
let obj={
    name:"sumit",
    age:23,
};
console.log(typeof obj);


//putting numeric values
let arr=[2,4,5,6,8];
console.log(typeof arr);

// putting string values
let arrr=["sumit","karan","hitesh","ramesh"];
console.log(typeof arrr);   //object

// - Task 5: Declare a variable using `let`, assign it an initial value, 
// reassign a new value, and log both values to the console.
let no=16;
no=67;
console.log(no);  //67

// - Task 6: Try reassigning a variable declared with `const` and observe the error.

const name="sumit";
//name="rakshit";
console.log(name);

// error observed:
// name="rakshit";
// ^

// TypeError: Assignment to constant variable.


//Feature Request 🙇‍♂️


//Variable Types Console Log: Write a script that declares variables of different data types and logs both the values of each variable to the console.

let num1=67;
let str1="sumit";
let booli=true;
let list=["applle","mango","banana"];
let ar=[1,56,87,34,66];
let object={
    name:"sumit",
    age:23
};

let noVAl=null;
let undefined;
console.log("Value:", num1, "Type:", typeof num1);
console.log("Value:", str1, "Type:", typeof str1);
console.log("Value:", booli, "Type:", typeof booli);
console.log("Value:", object, "Type:", typeof object);
console.log("Value:", ar, "Type:", typeof ar);
console.log("Value:", noVAl, "Type:", typeof noVAl);
console.log("value",undefined,"type:",typeof undefined);

//Reassignment Demo:
 //Create a script that demonstrates the difference in behavior between let and const when it comes to reassignment.
let reassign="initial value of reassign";
console.log(reassign);

reassign="assigning again value in let";
console.log(reassign);

const reas="initial value of const ";
console.log(reas);

reas="reassigning value of const";
console.log(reas);

// ----ERROR---

// reas="reassigning value of const";
//     ^

// TypeError: Assignment to constant variable.






