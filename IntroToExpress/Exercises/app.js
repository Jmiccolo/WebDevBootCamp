var express = require("express");
var app = express();

app.get("/", function(req, res) {
	res.send("Hi there, Welcome to my Assignment!");
})

app.get("/speak/:animal", function(req, res) {
	var animal = req.params.animal.toLowerCase();
	var sound = "";
	if(animal === "pig"){
		sound = "Oink"
	}
	else if(animal === "cow"){
		sound = "Moo!"
	}
	else if(animal === "dog"){
		sound = "Woof Woof!"
	};
	
	res.send("The " + animal + " says '" + sound + "'");
});
app.get("/repeat/:message/:num", function(req, res){
	var message = req.params.message;
	var num = Number(req.params.num);
	var result = ""
	
	for(var i = 0; i < num; i++){
		result += message + " ";
	}
	
	res.send(result);
});

app.get("*", function(req, res){
	res.send("Sorry, page not found...What are you doing with your life?");
});
app.listen(3000, function(){
	console.log("Listening on Port 3000")
})

