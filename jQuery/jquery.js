// Make sure jQuery is linked ahead of the javaScript link
// jQuery link for html:
// <script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>
// use a .ready function so that everything waits for the document to be ready
// you can't interact with elements that loaded after the javaScript
$(document).ready(function(){
    // all of the code will go inside this callback function

    // target element
    $("#target-element").on("click", function(){
        // code that runs when the element is clicked
    })

    // find attribute name
    // this can be set to a variable
    $(this).attr("attribute-name")
    // change attribute
    // this can be used to change a picture, link, etc.
    $("#target-element").attr("attributeToChange", "newAttributeValue")

    // to make an element you can set a variable to an html tag
    var newElement = $("<div>");
    // add class and attributes to the tag
    newElement.addClass("class-name");
    newElement.attr("attribute-name", "attribute-value");

    // add newElement to the document
    $("#parent-element").append(newElement);

    // add html into an element
    $("#target-element").html("<h1>Hello World!</h1>")
    // .html is replace anything in that element with the new html
    // . append should be used if you want to add something without removing

    // change an elements css
    $("target-element").css("color", "red");

    //************************ Ajax********************************
    // Ajax is used to gather or send information from an API
    $.ajax({
        url: url,
        method: "GET"
    })
    .then(function(response){
        // function that happens after the request has been made to the url
    })
})