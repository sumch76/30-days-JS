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


// Task 6: Write a regular expression to capture the username and domain from an email address. Log the captures.

// Activity 4: Assertions and Boundaries

// Task 7: Write a regular expression to match a word only if it is at the beginning of a string. Log the matches.

// Task 8: Write a regular expression to match a word only if it is at the end of a string. Log the matches.

// Activity 5: Practical Applications

// Task 9: Write a regular expression to validate a simple password (must include at least one uppercase letter, one lowercase letter, one digit, and one special character). Log whether the password is valid.

// Task 10: Write a regular expression to validate a URL. Log whether the the URL is valid.