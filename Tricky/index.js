// let a=10;
//   a=20;
// console.log(a);
// // let cannot be redeclare it will give error(let a=20)
// //but it can assign (a=20)

console.log(a); // undefined
var a = 10;
//console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 20;


console.log(func1());

//console.log(func2());
function func1()
{
    return "hello from function1";
}

const func2=function()
{
    return "hello from func2";
};

//op hello from function1
//ReferenceError: Cannot access 'func2' before initialization

const str = 'JavaScript';
console.log(str.substring(4, 10)); // 'Script'
console.log(str.slice(4, 7));     // 'Script'
console.log(str.substr(4, 4));     // 'Script'
