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
app.use(express.json());

// Display an html file
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'form.html'));
})

app.get('/api', function (req, res){
    return req.json(data)
})

// Post request to add to the api
app.post('/api', function(req, res){
    // Console log to see the data being sent from the front end
    console.log(req.body);
})

// Put request to update an item in the api
app.put('/api/:id', function(req, res){
    // Console log to see the data being sent from the front end
    console.log(req.body);
    // Variable to assign the id from the url
    var id = req.params.id
})

// Delete request to remove an item from the api
app.delete('/api/:id', function(req, res) {
    // Variable to assign the id from the url
    var id = req.params.id
})

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});