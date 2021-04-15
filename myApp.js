var express = require('express');
var bodyParser = require('body-parser')
var app = express();

//Mounts the bodyParser
app.use(bodyParser.urlencoded({extended: false}));

//Serve the HTML file
app.get("/",function(req, res){
  res.sendFile(__dirname+'/views/index.html');
})

//Serve the CSS file
app.use("/public", express.static(__dirname + "/public"));

//Posts the Name
app.route("/name").post((req, res) => {
  var firstName = req.body.first;
  var lastName = req.body.last;
  res.json({
    name: `${firstName} ${lastName}`
  });
})


module.exports = app;
