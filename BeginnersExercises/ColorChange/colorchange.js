var button = document.querySelector("button");

button.addEventListener("click", function(){
	if (document.body.style.background !== "purple") {
		document.body.style.background = "purple";
	}
	else {
		document.body.style.background = "white";
	}
})
