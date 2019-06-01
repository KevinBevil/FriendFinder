var friendData = require("../data/friends");

module.exports = function (app) {
   // API GET and POST requests

   app.get("/api/friends", function (req, res) {
      res.json(friendData);
   });

   app.post("/api/friends", function (req, res) {
      //Function to determine most appropriate friend by using the body's data
      // compared with friendData
      var friendLength = friendData.length;
      var yourScoreArray = [];
      var quizLength = 10;
      var diffTotal = 0;
      var closestFit = 100;

      var bestFriend;
      var bestFriendPic;

      for (i = 0; i < quizLength; i++) {
         yourScoreArray.push(req.body.scores[i]);
      }


      for (i = 0; i < friendLength; i++) {
         // reset diffTotal for next user/friend comparison
         diffTotal = 0;
         for (j = 0; j < quizLength; j++) {
            diffTotal += Math.abs(yourScoreArray[j] - friendData[i].scores[j]);
         }
         if (diffTotal < closestFit) {
            closestFit = diffTotal;
            bestFriend = friendData[i].name;
            bestFriendPic = friendData[i].photo;
         }
      }

      var theOne = [
         {
            name: bestFriend,
            pic: bestFriendPic
         }
      ];
      console.log("Your best friend is " + bestFriend + " and dude's picture is " + bestFriendPic);
      res.json(theOne);

   })
}

