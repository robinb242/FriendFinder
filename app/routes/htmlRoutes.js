var path = require("path");


// degines routing paths
module.exports = function(app) {

//creates url paths to be populated
  app.get('/survey', function (req, res) {
    res.sendFile(path.join(__dirname + '/../public/survey.html'));
  });

//use this as home page
  app.use(function (req, res) {
    res.sendFile(path.join(__dirname + '/../public/home.html'));
  });
};
