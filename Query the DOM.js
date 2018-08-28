// To query the DOM, there are two main methods:

document.querySelector();

document.querySelectorAll();


// Examples: 

// Ex. 1

const wmf = document.querySelector("#book-list li:nth-child(2) .name");

// console.log(wmf);

// This allows us to go into the element with the id #book-list, access the second child of the li with class name. 


// Ex. 2

const books = document.querySelectorAll("#book-list li .name");

console.log(books);


// Converting the collection of elements returned by querySelectorAll() into an array: 

x = Array.from(books);

x.forEach(function(book){
  console.log(book);
})

// Can be done at one go:

Array.from(books).forEach(funtion(book){
  console.log(book);
})
