// Call back functions

// Call backs are functions is excecuted after another function has finished executing 
// You have already been using call back functions.
// jQuery uses callback functions
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

// Simple example above can also be written as:
addition(2, 3, function(res){
    console.log(res)
})