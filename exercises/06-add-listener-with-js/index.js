window.onload = function myLoadFunction() {
	alert("The website just finished loading!");
	// Some code here
	
};

document.querySelector("#theGreen").onclick = () => {
alert("Wohoo!")

}

// hay 2 maneras que veo que se pueden hacer, 1 como yo la hice la de arriba y otra como en la solucion


// window.onload = function myLoadFunction() {
// 	alert("The website just finished loading!");
// 	// Some code here
// 	const greenButton = document.querySelector("#theGreen");
// 	greenButton.addEventListener("click", myClickFunction)
	
// };

// // The listener function here
// function myClickFunction() {
// 	alert("Woohoo!")
// }
