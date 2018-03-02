//loadinng data from arrays in friends.js

var friendList = require("../data/friends.js");

//allows for access to the data in this file
module.exports = function(app) {

app.get("/api/friends", function(req, res) {
	res.json(friendList);
});

app.post("/api/friends", function(req,res){
	var newFriendScores = req.body.scores;
    var scoresArray = [];
    var friendCount = 0;
    var bestMatch = 0;

//for loop runs through friends
    for(var i=0; i<friendList.length; i++){
      var scoresDiff = 0;
//run through scores to compare friends
      for(var j=0; j<newFriendScores.length; j++){
        scoresDiff += (Math.abs(parseInt(friendList[i].scores[j]) - parseInt(newFriendScores[j])));
      }

//push results into scoresArray
      scoresArray.push(scoresDiff);
    }

//after all friends are compared, find best match
    for(var i=0; i<scoresArray.length; i++){
      if(scoresArray[i] <= scoresArray[bestMatch]){
        bestMatch = i;
      }
    }

//return bestMatch data
    var bff = friendList[bestMatch];
    res.json(bff);

//pushes new submission into the friendsList array
    friendList.push(req.body);
  });
};