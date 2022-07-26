// Generated Arrays for Characters wanted that can be included in functions
var numARR = ["0", "1", "3","4","5","6","7","8","9",];
var lowCaseARR = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",];
var upCaseARR = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",];
var specARR = ["!","@","#","$","%","^","&","*","(",")","+","=","<",">","?",];
// EMPTY ARRAY created to store values, I researched that it is better than using a NULL ARRAY as it is better to "return" to an empty array.
var passARR = [];


var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var truePrompt = openPrompt();
  var passwordText = document.querySelector("#password");
// Assigned variable truePrompt to my function, and then created an IF statement. If the categories below were returned TRUE then the function will generate a random password based on the criteria selected
if (truePrompt) {
  var genPassword = generatePassword();
  passwordText.value = genPassword;
}
}

// Created a basic for loop to generate a password; had to reference https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
// This allows the function to select from my array for passwords. By using the Math.floor(Math.Random) it allows create a random password.
function generatePassword(){
  var password = "";
  for(var i = 0; i < charLength; i++){
    var randomCharacter = Math.floor(Math.random() * passARR.length)
    password = password + passARR[randomCharacter];
  }
  return password;
}
// Created a function to open prompt selections; got some help from office hours in regards to parseINT -- the prompt would not work properly
function openPrompt(){

  charLength = parseInt(prompt("How long do you want your password? (Enter # between 8-128 characters)"));
// by using the .CONCAT method it allows the function to combine different arrays based on if the if statement is TRUE, if the Cancel button is selected it will not concat that particular array in password generation.
  if (confirm("Will your password include numbers?")) {
    passARR = passARR.concat(numARR);
  }
  if (confirm("will your password include lower case letters?")) {
    passARR = passARR.concat(lowCaseARR);
  }
  if (confirm("Will your password include UPPER CASE letters?")) {
    passARR = passARR.concat(upCaseARR);
  }
  if (confirm("Will your password include special characters?")) {
    passARR = passARR.concat(specARR);
  }
  return true;
}
