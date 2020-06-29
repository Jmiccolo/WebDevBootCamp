var MovieList = [
	{title:"The Godfather",
	rating: 4.5,
	seen: false
	},
	{title:"Larry The Cable Guy",
	 rating: 1,
	 seen: true
	}
	]

MovieList.forEach(function(movie){
	var result = "You have "
	if(movie.seen) {
		result += "watched ";}
	else {
		result += "not seen ";}
	result += "\"" + movie.title + "\" - "  
	result += movie.rating + "stars"		

	console.log(result)
});
