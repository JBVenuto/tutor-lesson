// A class is a blueprint for making new objects
// Ojbects made using the class "blueprint" will have the same structure
class Movie {

    constructor(title, director, rating) {
        this.title = title;
        this.director = director;
        this.rating = rating;
    }

    logInfo(){
        console.log(this.title + ", directed by", this.director + ", is rated", this.rating);
    }
}

// Example of creating a new object using the Movie class
var godfather = new Movie('The Godfather', 'Francis Ford Coppola', 'R');
console.log(godfather);

// Extending a class will create a new class using the 'bluepring' of the extended class
// and allow you to add more methods and/or properties
class Favorites extends Movie {
    fav(){
        console.log(this.title, 'is one of my favorite movies')
    }
}

// Example of creating a new object using the Favorites class
var jaws = new Favorites("Jaws", "Steven Spielberg", "PG")
console.log(jaws);

// We can use our methods from the Movie class for the object made using the Movie class
godfather.logInfo();
// But we can't use the method from the Favorites class
// godfather.fav(); // This doesn't work

//We can use our methods from the Movie class for the object made using the Favorites class
jaws.logInfo();
// And we can use our methods from the Favorites class
jaws.fav();