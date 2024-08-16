// Activity 1: Object Creation and Access

// Task 1: Create an object representing a book with properties like title, author, and year, and log the object to the console.

let book={
    title:"godhan",
    author:"munsi prem chsndra",
    year:"1960"
}
console.log(book);


// Task 2: Access and log the title and author properties of the book object.

console.log("title : " + book.title);

console.log("author : " + book.author);


// Activity 2: Object Methods



// Task 3: Add a method to the book object that returns a string with the book's title and author, and log the result of calling this method.

book.getBookInfo=()=>
{
    return `Title : ${this.title}, Author : ${this.author}`;
}
console.log(book.getBookInfo());   //undefined will show because  it is lexical binding
book.getBookInfo=function()
{
    return `Title : ${this.title}, Author : ${this.author}`;
}
console.log(book.getBookInfo());



// Task 4: Add a method to the book object that takes a parameter (year) and updates the book's year property, then log the updated object.

let book1={
    title:"godhan",
    author:"munsi prem chsndra",
    year:7675,
    updateYear: function(newyear){
          this.year=newyear;
         console.log(this);
    }
};
book1.updateYear(2034);


// Activity 3: Nested Objects



// Task 5: Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the console.

let library={
    name:"sumit library",
    books:[
        {title:"godhan",author:"munsi prem chsndra",year:1960},
        {title:"harry potter",author:"j.k. rowling",year:1997},
        {title:"hobbit",author:"j.r.r. tolkien",year:1937}
    ]
}

console.log(library);

// Task 6: Access and log the name of the library and the titles of all the books in the library.

console.log("name of the library :" +library.name);
library.books.forEach( function (book){
    console.log(book.title);
});



// Activity 4: The this Keyword


// Task 7: Add a method to the book object that uses the this keyword to return a string with the book's title and year, and log the result of calling this method.


// Activity 5: Object Iteration

// Task 8: Use a for...in loop to iterate over the properties of the book object and log each property and its value.



// Task 9: Use Object.keys and Object.values methods to log all the keys and values of the book object.

