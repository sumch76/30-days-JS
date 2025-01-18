var obj={
    name:"sumit",
    age:25
}

var obj2=obj;

console.log(obj);
console.log(obj2);

//if we change some value of it
//i.e name hardik
//it will change the whole name because the objects
//are assigned and manipulated by reference

var obj={
    name :"sumit",
    age:25

}
var obj2=obj;
obj2.name="hardik";
console.log(obj2);
console.log(obj);

//o/p 
//{ name: 'hardik', age: 25 } 
//{ name: 'hardik', age: 25 } 