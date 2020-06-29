var express = require("express");
var app = express();


// "/" => "Hi There!"
app.get("/", function(req, res) {
	res.send("Hi There!");
});

// "/bye" => "Goodbye!"
app.get("/bye", function(req, res) {
	res.send("Goodbye!");
});

app.get("/dog", function(req, res){
	res.send("woof!")
	console.log("Somebody has made a request to /dog!!!")
});
app.get("*", function(req, res){
	res.send("You are StAAAA!")
});
app.listen(3000, function(){
	console.log("Listening on Port 3000")
})