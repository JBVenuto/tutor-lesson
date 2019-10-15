// ********************** API *******************************
// APIs allow a user to connect to an end point to send or ask for information
// An end point is a url that is set up to recieve or send data
// end points can be set up for get, post, put, and delete requests

// ********************** movie API example *****************
// variable to store the name of a movie
var movie = "hocus pocus";
// variable for the query so that that movie variable can be inserted easily into the query
var queryURL = "https://www.omdbapi.com/?t=" + movie + "&apikey=trilogy";



//************************ Ajax********************************
    // Ajax is used to gather or send information from an API
    $.ajax({
        url: queryURL,
        method: "GET"
    })
    .then(function(response){
        // function that happens after the request has been made to the url
        console.log(response)
    })