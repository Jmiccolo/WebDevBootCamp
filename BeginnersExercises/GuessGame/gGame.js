var secretNumber = 32;

var Guess = Number(prompt("Guess a number."));

if (secretNumber === Guess) {
	alert("You guessed it!!!");
}

else if (secretNumber < Guess) {
	alert("Too High! Try Again.");
}

else if (secretNumber > Guess) {
	alert("Too Low! Try Again.");
}