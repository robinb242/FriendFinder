
//declare npm module dependencies
var express = require("express");
var bodyParser = require("body-parser");


//create variable for express server
var app = express();

// Set port and the process.env allows us to deploy to heroku
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//pointing server to routing files
require("./app/routes/apiRoutes.js")(app);
require("./app/routes/htmlRoutes.js")(app);

//starts server listening port, console.logs the port

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
