// Write a script to save an object to sessionStorage by converting it to a JSON string. Retrieve and parse the object, then log it.
const object={
    name:"sumit chaubey",
    email:"sumitchaubey76@gmail.com",
    age:24
};


sessionStorage.setItem("userObj",JSON.stringify(object));

console.log(JSON.parse(sessionStorage.getItem("userObj")));

