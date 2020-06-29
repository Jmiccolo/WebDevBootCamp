var express = require("express"),
	app 	= express();

// Public Folder
app.use(express.static("Public"));
// Set View Engine
app.set("view engine", "ejs");

app.get("/", function(req, res){
	res.render("home");
});
app.get("/fallinlovewith/:thing", function(req, res) {
	var thing = req.params.thing;
	res.render("love", {thingVar: thing})
});
app.get("/posts", function(req, res){
	var posts = [
		{title: "Post 1", author: "Susy"},
		{title: "My adorable pet bunny", author: "Charlie"},
		{title: "Can you believe this Pomsky?", author: "Colt"}
		];
	res.render("posts", {posts: posts});
});
app.listen(3000, function(){
	console.log("Listening on Port 3000")
});


		   