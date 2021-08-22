// Assignment Code
var generateBtn = document.querySelector("#generate");

// Contains the valuse of arrays the user can choose from.
var upperCase = ['A',	'B',	'C',	'D',	'E',	'F',	'G',	'H',	'I',	'J',	'K',	'L',	'M',	'N',	'O',	'P',	'Q',	'R',	'S',	'T',	'U',	'V',	'W',	'X',	'Y',	'Z'];
var lowerCase = ['a',	'b',	'c',	'd',	'e',	'f',	'g',	'h',	'i',	'j',	'k',	'l',	'm',	'n',	'o',	'p',	'q',	'r',	's',	't',	'u',	'v',	'w',	'x',	'y',	'z',];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialCharacters = ['!', '#', '$', '%', '&', '*', '+', '?', '^', '{', '}', '|', '~', '@', '[', ']', '.'];

function writePassword() {
  
  // Asks the user the amount of chararcters they want for thier password and make sure it is between 8-128 chararcters, while allowing a new answer in case it is not between 8-128 chararcters.
  var characterAmount = prompt('How many caharacters would you like your password to contain? (8-128)');
  if (characterAmount<8){
    alert("Password length must be between 8-128 characters!!!!");
    var characterAmount = prompt('How many caharacters would you like your password to contain? (8-128)');
  }
  if (characterAmount>128){
    alert("Password length must be between 8-128 characters!!!!");
    var characterAmount = prompt('How many caharacters would you like your password to contain? (8-128)');
  }

  //The prompts that the user will answer.
var upperCaseChoice = confirm('Click "OK" to include uppercase.');
var lowerCaseChoice = confirm('Click "OK" to include lowercase.');
var numbersChoice = confirm('Click "OK" to include numeric.');
var specialCharactersChoice = confirm('Click "OK" to include special characters.');

var generatedPassword = [];

  //Includes uppercase in the password.
if (upperCaseChoice){
  generatedPassword = generatedPassword.concat(upperCase)
}

//Includes lowercase in the password.
if (lowerCaseChoice){
  generatedPassword = generatedPassword.concat(lowerCase)
}

//Includes numeric in the password.
if (numbersChoice){
  generatedPassword = generatedPassword.concat(numbers)
}

//Includes special characters in the password.
if (specialCharactersChoice){
  generatedPassword = generatedPassword.concat(specialCharacters)
}

var password = []
for(var i = 0; i < characterAmount; i++){
  var randomPlaceHolder = generatedPassword[Math.floor(Math.random() * generatedPassword.length)]
  password.push(randomPlaceHolder)
}

  var passwordText = document.querySelector("#password");
  passwordText.value = password.join('');

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
