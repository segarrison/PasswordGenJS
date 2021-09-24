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
  console.log(password);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(){
  //empty array to add elements into for password
  var passwordchoices = [];
  //getting user length using window prompt
  var pwlength = prompt("Input a number between 8 and 128 for the length of your password");
  //if prompt satisfies requirements of being a number 8-128 start password gen
  if (pwlength >= 8 && pwlength <= 128 && Number.isInteger(Number(pwlength)) ){
    //using if and window confirm to have user add upper, lower, number, and special char
    var addlower = confirm("Do you want lower case letters in your password?");
    if (addlower == true) {
      passwordchoices = passwordchoices.concat(alhpal);
    }
    
    var addupper = confirm("Do you want upper case letters in your password?");
    if (addupper == true) {
      passwordchoices = passwordchoices.concat(alphau);
    }

    var addnum = confirm("Do you want numbers in your password?");
    if (addnum == true) {
      passwordchoices = passwordchoices.concat(numbers);
    }

    var addsc = confirm("Do you want special characters in your password?");
    if (addsc == true) {
      passwordchoices = passwordchoices.concat(symbols);
    }
    console.log(pwlength);
    console.log(passwordchoices);
    pass = [];
    //create a while loop to add an element from passwordchoices to pass while the count is less than or equal to the user value
    let count = 1;
    while (count <= pwlength ){
      var index = Math.floor(Math.random() * passwordchoices.length);
      console.log(index);
      temp = passwordchoices[index];
      console.log(temp);
      
      pass.push(temp);
      
      console.log(pass);
      
      count = count + 1;
    }
    //turn password into a string
    pass = pass.join('');
    console.log(pass);
    //this tells the function that the result is whatever is in pass
    return pass;
    }
  //else statement to try again using a number
  else {
    window.alert ("Please try again by entering a number from 8 to 128.")
  }

  }

