const express = require("express"); // Require express
const app = express();
var port = process.env.PORT || 3000; // Set the port
app.use("/", express.static(__dirname + "/dist")); // This will serve the public docs


app.get("/index", function(request, response) {

    // Use render to run through ejs and then send up the index.ejs (which is my homepage)
    response.render('index');

    
});

//Open browser to “localhost:<port>” to view pages
app.listen(port);