// Assignment Code
var generateBtn = document.querySelector("#generate");

//declaring variables for what can be included in our password
//values inputed as string and then split into array
var alphau = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
var alhpal = "abcdefghijklmnopqrstuvwxyz".split('');
var numbers = "0123456789".split('');
var symbols = "!@#$%^&*_-+=".split('');


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
