// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);









// react to the button being clicked

// series of prompts for password criteria; should have ok and cancel:
  // how many characters would you like your password to contain? (between 8 and 128) greater than 8 open box response user types.
  // click ok to confirm including special characters? use owasp link and for loop
  // click ok to confirm including numeric charcters?
  // click okay to confirm including lowercase characters? 
  // click okay to confirm including uppercase characters?

// when all promtps are awnsered the random password in in an alaert or placed on the page