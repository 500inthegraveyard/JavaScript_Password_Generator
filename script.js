

// Need a series of prompts for password criteria; should have ok and cancel:

// add prompt to ask:how many characters would you like your password to contain? (between 8 and 128) greater than 8 open box response user types. Run the process again if the user does not choose an appropriate number.
  
  let alphanumber = prompt("how many characters would you like your password to contain?");
    console.log(alphanumber);

    if (alphanumber < 8) {
      alert("Please choose a number between 8 and 128.");
    }
    else if (alphanumber > 128) {
      alert("Please choose a number between 8 and 128.");
    }

    while (i < 8 || > 128) {

      alphanumber
      
    }

// add a prompt to ask: click ok to confirm including special characters? Use a function to capture the random number generated and console log to value.TODO: figure out else statement if user selects cancel. 
  
  var specialchar = confirm("click ok to confirm including special characters?");
  var numerline = schar ["U+0021", "U+0022", "U+0023", "U+0026", "U+0027", "U+0028"];

  function schar("U+0021","U+0022","U+0023","U+0026","U+0027","U+0028") {
    if confirm = specialchar
    return Math.floor(Math.random() * (schar));

    else 
  }
  console.log(specialchar ());

// add a prompt to ask: click okay to confirm including numeric charcters? Use a function to capture the random number generated and console log to value.TODO: figure out else statement if user selects cancel. 

  var numchar = confirm("click ok to confirm including numeric characters?");
  var numerline = randnum ["0","1","2","3","4","5","6","7","8","9"];

  function randnum("0","1","2","3","4","5","6","7","8","9") {
    if confirm = numchar
    return Math.floor(Math.random() * (randnum));

    else 
  }

  console.log(numchar ())

// add a prompt to ask: click okay to confirm including lowercase characters?Use a function to capture the random number generated and console log to value.TODO: figure out else statement if user selects cancel.  

  var lowchar = confirm("click ok to confirm including lowercase characters?");
  var lowcharline = randlowlet ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  function randlowlet (""a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"") {
    if confirm = lowchar
    return Math.floor(Math.random() * (randlowlet));

    else 

  }

  console.log(lowchar ())

// add a prompt to ask: click okay to confirm including uppercase characters?Use a function to capture the random number generated and console log to value.TODO: figure out else statement if user selects cancel. 

  var upchar = confirm("click ok to confirm including uppercase characters?");
  var Upcharline = randuplet ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J","K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

  function randuplet (""A", "B", "C", "D", "E", "F", "G", "H","I","J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"") {
    if confirm = upchar
    return Math.floor(Math.random() * (randlowlet));

    else 

  }

  console.log(upchar())


// TODO: put in a for loop to add all of the functions together and then have it populate onto the page.

  for (let index = 0; index < array.length; index++) {
  const element = array[index];

// TODO: Wrap everything in parseInt which changes string into a number and creat an adder function to add the function results together.
  parseInt("")
  adder (1,2,3)

  // Assignment Code
// Add total sum of functions to generate password when the generate password button is clicked. Creat a function to do this.

var generateBtn = document.querySelector("#generate");

var entirepassword = [ schar, randnum, randlowlet, randuplet]

function generatePassword (entirepassword()) {

  if generateBtn= ("click")
  return entirepassword

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);