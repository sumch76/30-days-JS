// function isAnagram(str1,str2)
// {
//     if(str1.length!=str1.length)
//     {
//         return false;
//     }

//     str1=str1.toLowerCase();
//     str2=str2.toLowerCase();

//     let arr1=str1.split("").sort();
//     let arr2=str2.split("").sort();

//     function check(arr1,arr2)
//     {
//         for(let i=0;i<arr1.length;i++)
//         {
//               if(arr1[i]!==arr2[i])
//               {
//                 return false;
//               }
//         }
//         return true;
//     }
//     let ans=check(arr1,arr2);
//     return ans;
// }


// JavaScript program to check whether 
// two strings are anagrams of each other
 
// Function to check whether two strings 
// are anagram of each other 
function areAnagram(str1,str2)
{
    // Get lengths of both strings
    let n1 = str1.length;
    let n2 = str2.length;
   
    // If length of both strings is not 
    // same, then they cannot be anagram
    if (n1 != n2)
        return false;
   
    // Sort both strings
    str1.sort();
    str2.sort();
   
    // Compare sorted strings
    for (let i = 0; i < n1; i++)
        if (str1[i] != str2[i])
            return false;
   
    return true;
}
     
// Driver Code
let str1=['l', 'i', 's', 't','e','n'];
let str2=['s', 'i', 'l', 'e','n','t'];
     
// Function Call
if (areAnagram(str1, str2))
    console.log(
    "The two strings are" + 
    " anagram of each other<br>");
else
    console.log(
    "The two strings are not" + 
    " anagram of each other<br>");