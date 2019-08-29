// ----------------- Changing HTML using vanilla JS -----------------
// replacing html using vanilla javascript
document.getElementById("JStest").innerHTML = "<h1>Hello VanillaJS World</h1>";

// replace a picture using vanilla javascript
document.getElementById("myPet").src = "../images/dog1.jpg"

// ----------------- Changing HTML using jQuery --------------------
// replacing html using jQuery
$("#JQtest").html("<h1>Hello jQuery World!</h1>");

// changing a picture using jQuery
$("#myPet").attr("src", "../images/cat1.jpg");