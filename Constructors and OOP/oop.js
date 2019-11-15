// Constructors
// Constructors are a way of creating many objects of the same type
function Movie(title, director, rating) {
    this.title = title;
    this.director = director;
    this.rating = rating;
}

// Method is a function that is a part of the object or constructor
// To add a method to a constructor use .prototype
// We use prototype so that the method doesn't have to be recreated for every instance
// Instead it will be attached to the constructor and the instance has access to the method
Movie.prototype.logInfo = function(){
    console.log(this.title + ", directed by", this.director + ", is rated", this.rating);
}


// To make a new object using the constructor
var jaws = new Movie("Jaws", "Steven Spielberg", "PG")

// Add properties to the object
jaws.myReview = "9/10";

// To add a unique method to a object that was created using a constructor
jaws.myFavorite = function() {
    console.log(this.title, "is my favorite movie");
}

console.log(jaws);
jaws.logInfo();
