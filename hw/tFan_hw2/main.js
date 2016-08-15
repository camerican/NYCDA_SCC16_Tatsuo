
function getInput() {
	console.log("abc");
}

getInput();

function getInput2(text) {
	console.log(text);
}

getInput2("this is a text");

function returnInputViaAlert(text) {

	alert(text);

}

returnInputViaAlert("wake up!");
 
function multiplier(x, y) {

	var result= x*y;

	alert(result);

}
multiplier(2, 4);

var arrayOfDj = [
	//Male DJ
	["Afrojack", "Marshmello", "ZEED"],

	//Female DJ
	["Alison Wonderland", "Jucy M", "Mija"]
	];

console.log(arrayOfDj[0][2]);
console.log(arrayOfDj[1][1]);

function testNumber() {

	var userNumber = document.getElementById("userNum").value;
	var difference;

	if (userNumber == 10)
	{
		alert("it is same! it's 10!");

	} else if(userNumber > 10) {

		difference = userNumber - 10;
		alert("the difference of the number is " + difference);

	} else {
		difference = 10 - userNumber;
		alert("the difference of the number is " + difference);
	}


}

window.onload = function (){

	document.getElementById("calculator").onclick = function() {
		testNumber();
	};

	document.getElementById("textChecker").onclick = function () {
		checkString("password");
	};

};


function checkString(string) {

	var userInput = document.getElementById("string").value;

	if (userInput == string) {
		console.log("success");
	} else {
		console.log("failed");
	}

}

function nameMaker(first, last) {

		alert("The name is " + first + " " +last + "!");
}

nameMaker("Michael", "Jackson");

var prizes = ["BMW's car", "SONY's TV", "iPhone", "Sancks for a year"];

function door(x) {
	if (x <4 && x >= 0) {

		alert("you got the prize " + prizes[x] + "!");
	} else {
		alert("Sorry, you got no prize...");
	}

}

door(0);
door(1);
door(12);