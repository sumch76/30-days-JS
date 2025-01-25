//question 1 -only name with capital letter
let students=[
    {name:"Piyush",rollNumber:31,marks:80},
    {name:"Jenny",rollNumber:15,marks:69},
    {name:"Kaushal",rollNumber:16,marks:35},
    {name:"Dilpreet",rollNumber:7,marks:55},
];

const names=students.map((stu)=>stu.name.toUpperCase());

console.log(names);

//ques-2 return only details of those who scored more than 60 marks


const marks=students.filter((mark)=>mark.marks>60);
console.log(marks);

//more than 60 marks and roll no greater than 15
const answer3=students.filter((mark)=>mark.marks>60 && mark.rollNumber>15);

console.log(answer3);

//sum of marks of all students

const answer4=students.reduce((acc,curr)=>acc+curr.marks,0);
console.log(answer4);


//return only names of  students who scored more than 60

const answer5=students.filter((mark)=>mark.marks>60).map((stu)=>stu.name);
console.log(answer5);

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

console.log(totalMarks);