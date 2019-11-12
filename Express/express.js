// Require the express module in order to use the code in express
// This needs to be installed
var express = require('express');
// Require the path module. This is a prepackaged module for dealing with file paths
var path = require('path');

// Make the app using express
var app = express();
// Set a port for the application to reside in
var PORT = 3000;

// Access the express code to read through the data that is being sent
// Read the url request
app.use(express.urlencoded({ extended: true }));
// Read the body of the data being sent as a json
app.use (express.json());

// ------------------------- Routing ------------------------------
// Establish what happens when a url is requested
// Get is to get inforamtion to display

// Display a message or html file
app.get('/', function (req, res) {
    // Send a message that we hard code into our file
    res.send("hello world");
    // OR send an html page
    // Don't use two send statements for the same route.
    // This is just an example of using each
    res.sendFile(path.join(__dirname, 'htmlFile.html'));
})

// Display json data from an API
app.get('/api/animals', function (req, res){
    return res.json(animals)
})
// Display single item from API
// Use :keyName to identify a url that will change but bring back the information for that value
app.get('/api/animals/:id', function (req, res) {
    // parse the URL to get the id we want
    var wantedId = req.params.id

    // for loop through the api to find the data relevant to that id
    for (var i = 0; i < names.length; i++) {
        if (wantedId === names[i].routeName) {
          return res.json(names[i]);
        }
      }
    // if that id isn't in the api return an error
    return res.json(false);
    
})

// Post data to the API
app.post("/api/animals", function(req, res) {
    // Parse or read through the data that is being sent.
    // This is different from reading through the url
    var newName = req.body;
  
    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    newName.routeName = newName.name.replace(/\s+/g, "").toLowerCase();
  
    console.log(newName);
  
    names.push(newName);
  
    res.json(newName);
  });
  
  // Starts the server to begin listening
  // =============================================================
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });