// Activity 1: Basic Regular Expressions

// Task 1: Write a regular expression to match a simple pattern (e.g., match all occurrences of the word "JavaScript in a string). Log the matches.

let str="this is a 30 days JavaScript Challenge and i am loving JavaScript";
let regex=/JavaScript/g;
let matches=str.match(regex);
console.log(matches);


// Task 2: Write a regular expression to match all digits in a string. Log the matches.

let str2="my phone number is 123-456-7890";

let regex2=/\d/g;

let matches2=str2.match(regex2);

console.log(matches2);

// Activity 2: Character Classes and Quantifiers




// Task 3: Write a regular expression to match all words in a string that start with a capital letter. Log the matches.

let str3="This is a JavaScript challenge. JavaScript is awesome!";

let regex3=/\b[A-Z]\w+\b/g;

let matches3=str3.match(regex3);

console.log(matches3);


// Task 4: Write a regular expression to match all sequences of one or more digits in a string. Log the matches.

let str4="My phone number is 123-456-7890";

let regex4=/\d+/g;

let matches4=str4.match(regex4);

console.log(matches4);



// Activity 3: Grouping and Capturing



// Task 5: Write a regular expression to capture the area code, central office code, and line number from a US phone number format (e.g., (123) 456-7890). Log the captures.
let str5 = "(123) 456-7890";
let regex5 = /\((\d{3})\)\s(\d{3})-(\d{4})/;
let match5 = str5.match(regex5);

if (match5) {
  console.log("Area Code:", match5[1]);
  console.log("Central Office Code:", match5[2]);
  console.log("Line Number:", match5[3]);
}



// Task 6: Write a regular expression to capture the username and domain from an email address. Log the captures.

let email="example@domain.com";
let regex6=/^([\w.-]+)@([\w.-]+\.[a-zA-Z]{2,})$/;

let match6=email.match(regex6);

if(match6)
    {
    console.log("Username:", match6[1]);
    console.log("Domain:", match6[2]);
    }



// Activity 4: Assertions and Boundaries

// Task 7: Write a regular expression to match a word only if it is at the beginning of a string. Log the matches.
let str7 = "hello world, welcome to the universe."; // The input string
let regex7 = /^\w+/;                                // The regular expression to match a word at the beginning
let match7 = str7.match(regex7);                      // Try to match the string against the regex

if (match7) {                                       // If a match is found, log the matched word
  console.log("Matched word:", match7[0]);
}


// Task 8: Write a regular expression to match a word only if it is at the end of a string. Log the matches.
let str8= "Welcome to the universe";
let regex8 = /\w+$/;  // Match a word at the end of the string
let match8 = str8.match(regex8);

if (match8) {
  console.log("Matched word:", match8[0]);
}




// Activity 5: Practical Applications

// Task 9: Write a regular expression to validate a simple password (must include at least one uppercase letter, one lowercase letter, one digit, and one special character). Log whether the password is valid.
let password="Password123";
let regex9=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

let match9=password.match(regex9);

if(regex.test(password)){
    console.log("passowrd is valid");
    
}
else{
    console.log("psssowrd is invalid");
    
}


// Task 10: Write a regular expression to validate a URL. Log whether the the URL is valid.
let url = "https://www.example.com/path?name=value";     // The URL to be validated
let regex10 = /^(https?:\/\/)?([\w\-]+\.)+[\w\-]+(\/[\w\-._~:\/?#[\]@!$&'()*+,;=]*)?$/;

if (regex10.test(url)) {                                  // Test if the URL matches the regex
  console.log("URL is valid.");
} else {
  console.log("URL is invalid.");
}
