// Activity 1: Basic Recursion

// Task 1: Write a recursive function to calculate the factorial of a number. Log the result for a few test cases.
const factorial=(num)=>
{
    if(num===0 || num===1)
    {
        return 1;
    }
    else
    {
        return num*factorial(num-1);
    }
}
console.log("factorial of 5 is",factorial(5));



// Task 2: Write a recursive function to calculate the nth Fibonacci number. Log the result for a few test cases.

const fibonacci=(num)=>
{
if(num===1)
    return 1;
if(num===2)
    return 1;
return fibonacci(num-1)+fibonacci(num-2);
}
console.log("fibonacci of 6 is",fibonacci(6));
console.log("fibonacci of 7 is",fibonacci(7));



// Activity 2: Recursion with Arrays

// Task 3: Write a recursive function to find the sum of all elements in an array. Log the result for a few test cases
function sumArray(arr,i){
    if(i==arr.length)
        return 0;
    return arr[i]+sumArray(arr,i+1);
}
let arr1=[1,2,3,4,5];
let arr2=[6,7,8,9,10];
console.log(sumArray(arr1,0));
console.log(sumArray(arr2,0));



// Task 4: Write a recursive function to find the maximum element in an array. Log the result for a few test cases.
function findMaxElement(arr,i=0,max=-1)
{
 if(i==arr.length)
 {
    return max;
 }
 if(arr[i]>max)
 {
    max=arr[i];
 }
 return findMaxElement(arr,i+1,max);
}

console.log("max element is:",findMaxElement([1,56,78,43,78]));



// Activity 3: String Manipulation with Recursion

// Task 5: Write a recursive function to reverse a string. Log the result for a few test cases.

function reverseString(str){
    if(str==="")
        return "";
    return reverseString(str.substr(1))+str[0];
}
console.log(reverseString("javascript"));

// Task 6: Write a recursive function to check if a string is a palindrome. Log the result for a few test cases.

function isPalindrome(str)
{
    if(str.length<=1)
    {
        return true;
    }
    if(str[0]!==str[str.length-1]){
        return false;
    }
    return isPalindrome(str.slice(1,str.length-1));
}

console.log(isPalindrome("racecar"));
console.log(isPalindrome("hello"));


// Activity 4: Recursive Search

// Task 7: Write a recursive function to perform a binary search on a sorted array. Log the index of the target element for a few test cases.

function binarySearch(arr, target, start=0, end=arr.length-1)
{
    if(start>end)
    {
        return -1;
    }
    let mid=Math.floor((start+end)/2);
    if(arr[mid]==target)
    {
        return mid;
    }
    if(arr[mid]>target)
    {
        return binarySearch(arr, target, start, mid-1);
    }
    else
    {
        return binarySearch(arr, target, mid+1, end);
    }
}

console.log(binarySearch([1,2,3,4,5,6,7,8,9,10], 5));

// Task 8: Write a recursive function to count the occurrences of a target element in an array. Log the result for a few test cases.

function countOccurrences(arr, target, count=0)
{
    if(arr.length===0)
    {
        return count;
    }
    if(arr[0]===target)
    {
        count++;
    }
    return countOccurrences(arr.slice(1), target, count);
}

console.log(countOccurrences([1,2,3,2,4,2,5], 2));
// Activity 5: Tree Traversal (Optional)

// Task 9: Write a recursive function to perform an in-order traversal of a binary tree. Log the nodes as they are visited.

// Task 10: Write a recursive function to calculate the depth of a binary tree. Log the result for a few test cases.

