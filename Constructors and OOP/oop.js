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