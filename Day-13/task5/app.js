// Create a module that exports multiple constants and functions. Import the entire module as an object in another script and use its properties.
import  * as Math from './entireModule.js';

console.log(Math.PI); // Output: 3.141592653589793

console.log("area of circumfernce:",Math.calculateCircumference(5)); 

console.log("Area of circle:",Math.calculateArea(7)); 

