// Require cheerio and request NPM packages
var cheerio = require("cheerio");
var axios = require("axios");

// Go to npr.org to gather information
axios.get("https://www.npr.org/").then(function(res) {

    // Store the HTML insto a variable that can be used to refrence cheerios methods
    var $ = cheerio.load(res.data);


    var results = [];

    // Looks at each HTML element on the page that is a p tag with a teaser class
    $("p.teaser").each(function(i, element) {
        // Store the summary, link, and title
        // Grabs the text from the targeted element
        var summary = $(element).text();
        // Grabs the link (value of the href attribute) of the parent element
        var link = $(element).parent().attr("href");
        // Goes up two parent elements, then down an element into an a tag
        // then down another element into the title class element and grabs the text
        var title = $(element).parent().parent().children("a").children(".title").text();

        console.log(summary);
        console.log(link);
        console.log(title);
    
        // Object with the title, summary, and link
        results.push({
          title: title,
          summary: summary,
          link: link
        });
      });
    
      // Log the results for testing
      console.log(results);
})
