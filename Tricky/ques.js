//question 1 -only name with capital letter
let students=[
    {name:"Piyush",rollNumber:31,marks:80},
    {name:"Jenny",rollNumber:15,marks:69},
    {name:"Kaushal",rollNumber:16,marks:35},
    {name:"Dilpreet",rollNumber:7,marks:55},
];

const names=students.map((stu)=>stu.name.toUpperCase());

//console.log(names);

//ques-2 return only details of those who scored more than 60 marks


const marks=students.filter((mark)=>mark.marks>60);
//console.log(marks);

//more than 60 marks and roll no greater than 15
const answer3=students.filter((mark)=>mark.marks>60 && mark.rollNumber>15);

//console.log(answer3);

//sum of marks of all students

const answer4=students.reduce((acc,curr)=>acc+curr.marks,0);
//console.log(answer4);


//return only names of  students who scored more than 60

const answer5=students.filter((mark)=>mark.marks>60).map((stu)=>stu.name);
//console.log(answer5);

//returns total marks for students with marks greater than 60 after 20 marks have been added to those who scored less than 60
const totalMarks=students.map((mark)=>
{
    if(mark.marks<60)
    {
        mark.marks+=20;
    }
    return mark;
}).filter((mark)=>mark.marks>60)
.reduce((acc,curr)=>

    acc+curr.marks,0
);

//console.log(totalMarks);

//function scope-o/p based question
for(let i=0;i<5;i++)
{
    setTimeout(() => {
        //console.log(i);
        
    }, i*1000);
}

//function hoisting

var x=31;
var fun=function()
{
    //console.log(x);
    var x=20;
}

fun();//undefined
//Variable hoisting: Declarations are hoisted, but assignments are not.
//Scope precedence: Local variables shadow global variables.
//Temporal Dead Zone (TDZ) doesn't apply to var but results in undefined when accessed before assignment.

//If var x inside the function was removed, the global x = 31 would be printed:


var x = 31;
var fun = function() {
    //console.log(x); // No local x, refers to global x
}

fun();//31


const fn=(a,x,y,...numbers)=>
{
   // console.log(x,y,numbers);
}
fn(5,6,3,7,8,9);
//6 3 [ 7, 8, 9 ]

//callback function
//a callback function is a function passed into another function as an argument,which is then invoked inside
//the outer function to complete some kind of routine or action


function makefun()
{
    var name="sumit";

    function displayName()
    {
        console.log(name);
    }
    return displayName;

}
var myfun=makefun();
myfun();
