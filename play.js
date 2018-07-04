function affirmation() {

	var positiveMessage = [
		"You are the best!", 
		"When you're brilliant, you're really brilliant!",
		"Your smile lights up a room!",
		"You've got this!",
		"You will shine!",
		"Success is your middle name!",
		"No failure, only feedback!",
		"Just keep swimming!"
	];

	for(var i = 0; i < positiveMessage.length; i++){
		i = Math.floor(Math.random() * positiveMessage.length);
		return positiveMessage[i];
	}
}

var content = document.querySelector("button");

content.addEventListener("click", function(){
	alert(affirmation());
});