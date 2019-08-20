// Call back functions

// Call backs are functions is excecuted after another function has finished executing 
// You have already been using call back functions.
// jQuery is uses callback functions
$("#btn").click(function() {
    // this is inside the callback function
    console.log("The button was clicked");
})

// Ajax uses callback functions
$.ajax({url: url, method: "GET"})
.then(function() {
    // this is inside the callback function
})

// Simple example of callback function
function addition(num1, num2, cb) {
    var answer = num1 + num2;

    cb(answer);
}

function logAnswer(num) {
    console.log("The answer is " + num);
}

addition(2, 3, logAnswer);

// Constructors
// Constructors are a way of creating many objects of the same type
function Movie(title, director, rating) {
    this.title = title;
    this.director = director;
    this.rating = rating;
}

// To make a new object using the constructor
var jaws = new Movie("Jaws", "Spielberg", "PG")

// Add properties to the object
jaws.myReview = "9/10";

// Method is a function that is a part of the object or constructor
// Methods can be added to an object 
jaws.newMethod = function() {
    return this.title + " is rated " + this.rating;
}

// To add method to a constructor you have to add it to the code in the constructor
function Movie(title, director, rating) {
    this.title = title;
    this.director = director;
    this.rating = rating;
    this.about = function () {
        return this.title + " by director, " + this.director + " is rated " + this.rating;
    };
}