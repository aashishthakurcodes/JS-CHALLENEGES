// Tasks/Activities
// Activity 1: Object Creation and Access
// Task 1: Create a book object with properties like title, author, and year. Log it to the console.
const book={
    title:"Dust and Snow",
    author:"Robert frost",
    year:"1982"
}
console.log(book);

console.log("Task 1 completed \n ")

// Task 2: Access and log the title and author properties.
console.log(book.title)
console.log(book.author)

console.log("Task 2 completed \n")

// Activity 2: Object Methods

// Task 3: Add a method to return a string with the book's title and author. Log the result.
let books={
    title:"Dust and Snow",
    author:"Robert frost",
    year:"1982",
    details:function(){
        return `${this.title} and ${this.author}`
    }
}
console.log(books.details())
console.log("Task 3 completed \n")

// Task 4: Add a method to update the book's year and log the updated object.
books.updateYear=function(newYear){
    this.year=newYear;
    return newYear;
}
console.log(books.updateYear("2024"));
console.log(books);
console.log("Task 4 completed \n")

// Activity 3: Nested Objects

// Task 5: Create a library object with name and books (array of book objects). Log it to the console.
const book1={
    title:"The Calm Sky",
    author:"Rambo uri",
    year:1987,
}
const book2={
    title:"The Bitten snake",
    author:"Alfardo sam",
    year:1887,
}
const book3={
    title:"The Last Wish ",
    author:"Sarmeium Jo",
    year:1787,
}

const library={
    title:"Ancient Book Library",
    book:[book1,book2,book3]
}

console.log(library)
console.log("Task 5 completed \n")

// Task 6: Log the library's name and book titles.
console.log(`Library name = ${library.title}`)

library.book.forEach(book=>{
    console.log(book.title,)
})
console.log("Task 6 completed \n")

// Activity 4: The this Keyword

// Task 7: Add a method using this to return the book’s title and year. Log the result.

library.bookTitleandYear=function(){
   this.book.forEach(book=>{
        console.log(`Book Titles "${book.title}" and book year is "${book.year}"`)
    })
}
library.bookTitleandYear()
console.log("Task 7 completed \n")

// Activity 5: Object Iteration

// Task 8: Use a for...in loop to log each property and its value.
let car1 = { model: "Model S", manufacturer: "Tesla", year: "2020" };
let car2 = { model: "Civic", manufacturer: "Honda", year: "2019" };
let car3 = { model: "Mustang", manufacturer: "Ford", year: "2021" };

let garage={
    name:"The Auto Repair",
    cars:[car1,car2,car3],
    carModelandYear:function(){
        for(let index in this.cars){
            console.log(`Model "${this.cars[index].model}" and manufactured year "${this.cars[index].year}"`)
        }
    }
}

garage.carModelandYear()
console.log("Task 8 completed \n")

// Task 9: Use Object.keys and Object.values to log all keys and values.
console.log(Object.keys(garage));
console.log(Object.values(garage));
console.log("Task 9 completed \n")


// Feature Request

// Book Object Script: Create a book object, add methods, and log properties and results.
const bookFeature={
    name:"Fire and Ice",
    year:1898,
    author:"Robert frost",
    titleandAuthor:function(){
        return (`Title "${this.name} and author "${this.author}"`)
    },
    updateYear:function(newYear){
        this.year=newYear;
        return newYear;
    }

}
console.log(bookFeature.titleandAuthor());
console.log(bookFeature);
console.log(bookFeature.updateYear("2022"));
console.log("Feature request 1 completed \n")

// Library Object Script: Define a library object with book objects and log details.
const bookFeature1={
    title:"The Calm Sky",
    author:"Rambo uri",
    year:1987,
}
const bookFeature2={
    title:"The Bitten snake",
    author:"Alfardo sam",
    year:1887,
}
const bookFeature3={
    title:"The Last Wish ",
    author:"Sarmeium Jo",
    year:1787,
} 
const librayFeature={
  name:"The Library feature",
  books:[bookFeature1,bookFeature2,bookFeature3]
}
console.log(librayFeature.name);
librayFeature.books.forEach(book=>{
    console.log(`Title is "${book.title}", author "${book.author}" and year "${book.year}"`)
})
console.log("Feature request 2 completed \n")

// Object Iteration Script: Demonstrate iterating over an object's properties using for...in and Object.keys/Object.values.

librayFeature.details=function(){
for(let index in this.books){
    console.log(`Title of the given book ${this.books[index].title} and the year is "${this.books[index].year}"`)
}
}
librayFeature.details();
console.log("Feature request 3 completed \n")