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

var obj={
    name :"sumit",
    age:25
};

var obj2={...obj};
obj2.name="hardik";

console.log(obj2);
console.log(obj);
//nested structure
//if a property contains a nested object or array, the nested structure is not copied but shared

var obj = {
    name: "sumit",
    age: 25,
    address: { city: "Delhi" }
};
var obj2 = { ...obj };
obj2.address.city = "Mumbai";

console.log(obj);  // { name: "sumit", age: 25, address: { city: "Mumbai" } }
console.log(obj2); // { name: "sumit", age: 25, address: { city: "Mumbai" } }

//it can solve using deep copy which ensures that all levels of the object including nested structure are cloned into a completely nested object

var obj={
    name:"sumit",
    age:25,
    address:{
        city:"delhi"
    }
};
var obj=JSON.parse(JSON.stringify(obj));
obj2.name="hardik";
obj2.address.city="uttarakhand";
console.log(obj);
console.log(obj2);

