
const express = require("express");
const app = express();

const path = require("path");

// Use port decided by Heroku, or 8080
const PORT = process.env.PORT || 8080;

//Sets up Express middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(__dirname + '/app/public'));

// Pointing our server to a couple of routing files
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// Starting our server
app.listen(PORT, function () {
   console.log("App listening on PORT: " + PORT);
});
