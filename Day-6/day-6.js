// Tasks | Activities 🌟
// Activity 1: Array Creation and Access

// Task 1: Create an array of numbers from 1 to 5 and log the array to the console.

const array = [1,2,3,4,5];

console.log(array);


// Task 2: Access the first and last elements of the array and log them to the console.

const array2=[3,5,6,8,9,80];
console.log(array2[0]);
console.log(array2[5]);
console.log(array2[array2.length-1]);
console.log(array2.length);






// Activity 2: Array Methods (Basic)


// Task 3: Use the push method to add a new number to the end of the array and log the updated array.

const array3=[3,4,6,7,8];
 array3.push(9);
 console.log("the new array is " +array3);
 

// ------------------------------------------------------------------------------------
// Task 4: Use the pop method to remove the last element from the array and log the updated array.

const array4 = [3,4,5,6,6,6,68,78];
array4.pop();
console.log(array4);
// ---------------------------------------------------------------------------------------------------

// Task 5: Use the shift method to remove the first element from the array and log the updated array.

const array5 = [3,4,5,6,7,8];

array5.shift();

console.log(array5);
//Removes the first element from an array and returns it.
//  If the array is empty, undefined is returned and the array is not modified


// ---------------------------------------------------------------------------
// Task 6: Use the unshift method to add a new number to the beginning of the array and log the updated array.

const array6 = [3,4,5,6,7];

array6.unshift(2);

console.log(array6);
// Inserts new elements at the start of an array,
//  and returns the new length of the array.
// ---------------------------------------------------------------------------------------------------
// Task 7: Use the splice method to remove a specific element from the array and log the updated array.


const array7 = [3,4,5,6,7];


//array7.splice(2, 1);  //
array7.splice(2); 
console.log(array7);// [ 3, 4 ]
array7.splice(2,1); //[ 3, 4, 6, 7 ]
console.log(array7);
array7.splice(2,0,45);
console.log(array7); // [ 3, 4, 45, 6, 7 ]


// splice(start)
// splice(start, deleteCount)
// splice(start, deleteCount, item1)
// splice(start, deleteCount, item1, item2)
// splice(start, deleteCount, item1, item2, /* …, */ itemN)


//splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

//Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

//@param start — The zero-based location in the array from which to start removing elements.

//@param deleteCount — The number of elements to remove.

//@returns — An array containing the elements that were deleted.
// ✅✅✅for more details on splice click on below links⬇️⬇️⬇️
// 🔗🔗🔗https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice


// --------------------------------------------------------------------------------------------

// Activity 3: Array Methods (Intermediate)

// Task 8: Use the map method to create a new array where each element is doubled and log the new array.

const array8=[1,2,3,4,5,6];
 const doubledArray=array8.map((x)=>x*2);
 console.log(doubledArray);



// Task 8: Use the filter method to create a new array with only even numbers and log the new array.

const array9=[34,67,55,68,89,60];
const filteredArray=array9.filter((x)=>x%2===0);
console.log(filteredArray);



// Task 9: Use the reduce method to calculate the sum of all numbers in the array and log the result.

const array10=[3,4,5,6,7];
 const sum=array10.reduce((accumulator, currentValue)=>accumulator+currentValue);
 console.log(`Sum of array is ` +sum);

  //other-way
  const sum2=array10.reduce(function(accumulator,current)
{
    return accumulator+current;
},0);
console.log(sum2);

//now let do find max value in array

const array11=[3,4,5,67,7,85];
const max=array11.reduce((a,b)=>a>b?a:b);
console.log("max value is " +max);

//otherr way
const max2=array11.reduce(function(acc,curr)
{
    if(curr> acc)
    {
        acc=curr;
    }
    return acc;
},0);

console.log("max value is again " +max2);

 //reduce() method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single output value.

// Activity 4: Array Iteration

// Task 10: Use a for loop to iterate over the array and log each element to the console.

const array12=[3,4,5,6,7];
for(let i=0;i<array12.length;i++)
{
    console.log(array12[i]);
}
// Task 11: Use the forEach method to iterate over the array and log each element to the console.
// Activity 5: Multi-dimensional Arrays

// Task 12: Create a two-dimensional array (matrix) and log the entire array to the console.
// Task 13: Access and log a specific element from the two-dimensional array.