// Task 1: Define a class Person with properties name and age, and a method to return a greeting message. Create an instance of the class and log the greeting message.

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   greet() {
//     console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
//   }
// }

// const person1 = new Person("John Doe", 30);

//person1.greet(); // Output: Hello, my name is John Doe and I am 30 years old.
// Task 2: Add a method to the Person class that updates the age property and logs the updated age.

class Person{
    constructor(name,age)
    {
        this.name=name;
        this.age=age;
    }
    greeting()
    {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
        
    }
    updateAge(newAge)
    {
        this.age=newAge;
        console.log(`Updated age is ${this.age}`);
    }
}

const person2=new Person("sumit",24);

person2.greeting();

person2.updateAge(25);
