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


//Activity 2: Class Inheritance

//Task 3: Define a class Student that extends the Person class. Add a property studentID and a method to return the student ID. Create an instance of the Student class and log the student ID.
 class Student extends Person{
    constructor(name,age,studentId)
    {
        super(name,age);
        this.studentId=studentId;
    }
    getStudentId()
    {
        return this.studentId;
    } 
}
    const firstStudent=new Student("Sumit","23","567000");
    console.log(firstStudent.getStudentId());

// Task 4: Override the greeting method in the Student class to include the student ID in the message. Log the overridden greeting message.
class Students extends Person
{
    constructor(name,age,studentId)
        {
            super(name,age);
            this.studentId=studentId;
        }

        greeting()
        {
            console.log(`my name ${this.name} and age : ${this.age} and studentId : ${this.studentId}`);
            
        }
}

const secondStudent=new Students("Rakesh","25","567001");

secondStudent.greeting();

// Activity 3: Static Methods and Properties

// Task 5: Add a static method to the Person class that returns a generic greeting message. Call this static method without creating an instance of the class and log the message.

class Person1 {
    // Static method that returns a generic greeting message
    static greet() {
      return "Hello! Welcome to the Person class.";
    }
  }
  
  // Call the static method without creating an instance of the class
  const message = Person1.greet();

  // Log the message
  console.log(message);
  console.log(Person1.greet());
  
  




// Task 6: Add a static property to the Student class to keep track of the number of students created. Increment this property in the constructor and log the total number of students.
class Studentt{
    static totalStudent=0;
    constructor(name)
    {
        this.nane=name;

        Studentt.totalStudent++;
    }

    static getTotalStudents()
    {
        console.log(`total students: ${Studentt.totalStudent}`);
        
    }
}
    const student1=new Studentt("alice");
    const student2=new Studentt("Bob");
    const student11=new Studentt("alice");
    const student22=new Studentt("Bob");
    Studentt.getTotalStudents();

// Activity 4: Getters and Setters

// Task 7: Add a getter method to the Person class to return the full name (assume a firstName and LastName property). Create an instance and log the full name using the getter.

class Person4{
    constructor(firstStudent, lastStudent)
    {
        this.firstStudent = firstStudent;
        this.lastStudent= lastStudent;

    }
     get fullName()
    {
        return `${this.firstStudent} ${this.lastStudent}`;
    }
}
const personn=new Person4("sumit","chaubey");
console.log(personn.fullName);//here we have not used function to get the full name i.e  fullName()


// Task 8: Add a setter method to the Person class to update the name properties (firstName and LastName). Update the name using the setter and log the updated full name.
class Person5 {
    constuctor(firstName, lastName)
    {
        this.firstName = firstName;
        this.lastName=lastName;

    }
    get fullName()
    {
        return `${this.firstName} ${this.lastName}`;
    }

    set fullName(newName)

{
    const [firstName, lastName] = newName.split(' ');
    this.firstName = firstName;
    this.lastName = lastName;

}}

const person =new Person5("sumit","chaubey");


console.log(person.fullName);

person.fullName="rakesh sumit";

console.log(person.fullName); // Output: rakesh sumit



// Activity 5: Private Fields (Optional)

// Task 9: Define a class Account with private fields for balance and a method to deposit and withdraw money. Ensure that the balance can only be updated through these methods.

class Account {
    #balance;
    constructor(balance) {
        this.#balance = balance;
    }
    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            console.log(`Deposited: ${amount}, New balance: ${this.#balance}`);
        } else {
            console.log("Invalid deposit amount.");
        }
    }
    withdraw(amount) {
        if (amount > 0 && amount <= this.#balance) {
            this.#balance -= amount;
            console.log(`Withdrew: ${amount}, New balance: ${this.#balance}`);
        } else {
            console.log("Invalid withdrawal amount or insufficient balance.");
        }
    }
    getBalance() {
        return this.#balance;
    }
}
    const acc=new Account(0);
    acc.deposit(300);
    acc.withdraw(500);
    console.log(acc.getBalance()); // Output: 1300








// Task 10: Create an instance of the Account class and test the deposit and withdraw methods, logging the balance after each operation.

// Create an instance of the Account class with an initial balance of $100
const myAccount = new Account(100);

// Test the deposit method
myAccount.deposit(50); // Deposited: $50
console.log(`Balance after deposit: $${myAccount.getBalance()}`); // Balance after deposit: $150

// Test the withdraw method
myAccount.withdraw(30); // Withdrew: $30
console.log(`Balance after withdrawal: $${myAccount.getBalance()}`); // Balance after withdrawal: $120

// Test withdrawing an amount greater than the current balance
myAccount.withdraw(200); // Invalid withdrawal amount.
console.log(`Balance after invalid withdrawal: $${myAccount.getBalance()}`); // Balance after invalid withdrawal: $120

// Test another deposit
myAccount.deposit(80); // Deposited: $80
console.log(`Final balance: $${myAccount.getBalance()}`); // Final balance: $200
