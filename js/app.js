var counter = 0;
function cowClicker() {
	if (true) {
		counter += 1;
		console.log(counter);
		document.getElementById("cowNumber").innerHTML = counter;
	}
}
var pigCounter = 0;
function pigClicker() {
	if (true) {
		pigCounter += 1;
		console.log(pigCounter);
		document.getElementById("pigNumber").innerHTML = pigCounter;
	}
}

var clicks = 0;
function clickCounter() {
	if (true) {
		this.clicks += 1;
		document.getElementById("Number").innerHTML = this.clicks;
	}
}
