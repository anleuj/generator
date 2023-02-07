var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function makeRandomButton() {
	var button = document.createElement("button");
	function getRandomColor() {
		var letters = '0123456789ABCDEF';
		var color = '#';
		for (var i = 0; i < 6; i++) {
			color += letters[Math.floor(Math.random() * 16)];
		}
		return color;
 	}
	body.appendChild(button);
	var randomButton = document.querySelector("button");
	button.innerHTML = "Random";
	randomButton.addEventListener("click", function() {
		color1.value = getRandomColor();
		color2.value = getRandomColor();
		setGradient();
		})
}

makeRandomButton();

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

setGradient();

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);