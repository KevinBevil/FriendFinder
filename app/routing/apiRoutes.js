var friendData = require("../data/friends");

module.exports = function(app) {
   // API GET and POST requests

   app.get("/api/friends", function(req, res) {
      res.json(friendData);
   });

   app.post("/api/friends", function(req, res) {
      //Function to determine most appropriate friend by using the body's data
      // compared with friendData

      console.log(req);
   })
}

