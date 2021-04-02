var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random = document.getElementById("random");

function setGradient() {
	body.style.background = "linear-gradient(to right, " 
	+ color1.value + ", "
	 + color2.value + ")";

	 css.textContent = body.style.background + ";";
}

function randomNum() {
	var rand = Math.floor(1 + (Math.random() * 255));
	return rand;
}

function randomColor() {
	var r1 = "rgb(" + randomNum() 
	+ ", " + randomNum() + ", " + randomNum() + ")";
	var r2 = "rgb(" + randomNum() 
	+ ", " + randomNum() + ", " + randomNum() + ")";

	body.style.background = "linear-gradient(to right, " 
	+ r1 + ", "
	 + r2 + ")";

	 css.textContent = body.style.background + ";";	
}

color1.addEventListener("input", setGradient);


color2.addEventListener("input", setGradient);

random.addEventListener("click", randomColor)
