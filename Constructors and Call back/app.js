// Call back functions

//Call backs are functions is excecuted after another function has finished executing 
//You have already been using call back functions.
// jQuery is uses callback functions
$("#btn").click(function() {
    //this is inside the callback function
    console.log("The button was clicked");
})

//Ajax uses callback functions
$.ajax({url: url, method: "GET"})
.then(function() {
    //this is inside the callback function
})

