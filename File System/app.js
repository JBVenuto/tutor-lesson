// Include File System in your program
// File System is included with Node and doesn't need to be installed
const fs = require('fs');

// Read a file using fs
fs.readFile('text.txt', 'utf8', function(err, data){
    if(err){console.log(err)}
    else{console.log(data)}
})

// // Write to a file and replace all of the old content with the new content
fs.writeFile('text.txt', 'New content', function(err){
    if(err) throw err;
})

// Write to a file and add your content to the end of the file
fs.appendFile('text.txt', 'appended content', function(err){
    if(err) throw err;
})