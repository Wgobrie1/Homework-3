// Assignment Code
var generateBtn = document.querySelector("#generate");
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; // 3-6 are strings which are used to define which characters are in each set, or type of character.
var lower = "abcdefghijklmnopqrstuvwxyz";
var number = "0123456789";
var special = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var upperlength = upper.length; // 7-10 store the length of the above strings, to allow the random function to be multiplied by this number later on, to get a random position in the string 
var lowerlength = lower.length;
var numberlength = number.length;
var speciallength = special.length;


function generatePassword(){
  var choiceUpper = window.prompt("Include Upper case letters? (y/n)"); //14-17 allow character types to be chosen from
  var choiceLower = window.prompt("Include Lower case letters? (y/n)");
  var choiceNumber = window.prompt("Include Numbers? (y/n)");
  var choiceSpecial = window.prompt("Include Special characters? (y/n)");
  var choiceLength = window.prompt("How long would you like this password? (8-128 char)"); //18 allows choice of password string length
  choiceUpper = choiceUpper.toLowerCase(); //19-22 convert all y/n choices to lower case, to avoid problems potentially caused by user error of unintentional capitalisation
  choiceLower = choiceLower.toLowerCase();
  choiceNumber = choiceNumber.toLowerCase();
  choiceSpecial = choiceSpecial.toLowerCase();
  choiceLength = Number(choiceLength); //23 ensures that a number is used to define the desired length of password, used to validate choice later
  var pass = (""); 
  var choice = []; //definine array to be used later for the random choice of character set


  if (!choiceLength || !choiceLower || !choiceNumber || !choiceSpecial || !choiceUpper){ //This if statement is to ensure that each selection criteria has a value input
	window.alert("Invalid selection, please try again")
  	return;
  }

  if (choiceLower == "n", choiceNumber == "n", choiceSpecial == "n", choiceUpper == "n"){ //line to validate the selection criteria, ensuring that at least one character type is selected before continuing
	window.alert("Invalid selection, please try again")
	return;
  }

  if (choiceLength < 8 || choiceLength > 128 || choiceLength == NaN){ //line to validate the length variable, whether it be over the limit of 128, under the limit of 8, or not a number
  	window.alert("Invalid selection, please try again")
	return;
  }

  if (choiceLower == "y"){ // 43-56 add the character types to an array, to allow a random one to be selected later.
  	  choice.push("lower");
  }

  if (choiceUpper == "y"){
  	  choice.push("upper");
  }

  if (choiceNumber == "y"){
  	  choice.push("number");
  }

  if (choiceSpecial == "y"){
  	  choice.push("special");
  }

	for (let i = 0; i < choiceLength; i++){ //this for loop uses the chosen length to loop through each selected character type, which is selected at random, and takes a random character from the defined string, writing it to the pass variable
		choicevar = choice[Math.floor(Math.random() * choice.length)]; //this line pulls a random element from the array which contains the character types
		if (choicevar == "lower") { //these next 10 lines allow the chosen character types to be accessed, and a random character pulled from a random one
			pass = pass + lower.charAt(Math.floor(Math.random() * lower.length));
		}
		else if (choicevar == "upper") {
			pass = pass + upper.charAt(Math.floor(Math.random() * upper.length));
		}
		else if (choicevar == "number") {
			pass = pass + number.charAt(Math.floor(Math.random() * number.length));
		}
		else if (choicevar == "special") {
			pass = pass + special.charAt(Math.floor(Math.random() * special.length));
		}
	}
	password = pass; //sets global "password" variable to pass. Not 100% the most efficient way to do this, but this was my chosen method

	window.alert(password); //i have opted for the popup display for the displaying of the password, and this line is the line that causes this
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");



  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
