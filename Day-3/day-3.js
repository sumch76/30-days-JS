//Activity 1: If-Else Statements

//Task 1: Write a program to check if a number is positive, negative, or zero, and log the result to the console.

let num=0;
if(num>0)
    console.log("num is positive");
else if (num<0) {
    console.log("num is negative");
}
else
console.log("num is zERO");

//Task 2: Write a Program to check if a person is eligible to vote (age >= 18) and log the result to the console.

const age=30;
if(age>=18)
    console.log("person is eligible to vote");
else{
    console.log("person is not eligible to vote");
}
//Activity 2: Nested If-Else Statements

//Task 3: Write a program to find the largest of three numbers using nested if-else statements.

const a=16;
const b=45;
const c=22;

if(a>b)
{
console.log("a is greater");
}
else if(b>c)
{
    console.log("b is greater");
}
else{
    console.log("c is greater");
    
}
// Activity 3: Switch Case

// Task 4: Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.
    let day=6;
    switch(day)
    {
case 1:
    day="sunday";
    break;
    case 2:
        day="Monday";
        break;
        case 3:
            day="Tuesday";
            break;
            case 4:
                day="Wednesday";
                break;
                case 5:
                    day="Thursday";
                    break;
                    case 6:
                        day="Friday";
                        break;
                        case 7:
                            day="Saturday";
                            break;
                            default:
                            console.log("Invalid day number");
    }
    console.log(day);
    
//Task 5: Write a program that uses a switch case to assign a grade ('A', 'B', 'C', 'D', 'f') based on a score and log the grade to the console.
let marks =74;
if(marks>=75)
{
    console.log("grade A");
    
}
else  if(marks<75 && marks>=60)
{
    console.log("grade B");
}

else  if(marks<60 && marks>=50)
{
    console.log("grade C");
    
}
else
console.log("grade D");
