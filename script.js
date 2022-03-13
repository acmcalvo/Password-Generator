// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page

// Assignment Code

var generateBtn = document.querySelector("#generate");
var passwordEl = document.querySelector("#password");
var btncopyEl = document.querySelector("#copy");

//Create a function for clicking on the button
generateBtn.addEventListener("click", function () {
   
const key_strings = {
  lowercase: 'abcdefghijklmnopqrstuvwxyz',
  uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  number: '0123456789',
  symbol: "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~",
};


// GeneratePassword
function generatePassword() {
  var passwordCharSet = "";

  var length = window.prompt("Enter a number from 8 to 128 for password length.");
  if ((length >= 8) && (length <= 128)) {
    
  }
  
// Password need to meet length criterion, with a least 8 characters and no more than 128
  else {
    alert('Your password must be at least 8 characters and no more than 128 characters \nPlease enter a valid number between 8 & 128.')
    return '';
  }
// Ask if a want  lower case

  var lowercase = window.confirm("Would you like to use lowercase letters?");
  if (lowercase) {
    passwordCharSet += key_strings.lowercase;
  };
  
// Ask if a want Uppercase 
  var uppercase = window.confirm("Would you like to use uppercase letters?");
  if (uppercase) {
    passwordCharSet += key_strings.uppercase;
  };
// If a need symbols (speacial charaters)
  var symbols = window.confirm("Would you like to use symbols?");
  if (symbols) {
    passwordCharSet += key_strings.symbol;
  };

// If a need numbers
  var numbers = window.confirm("Would you like to use numbers?");
  if (numbers) {
    passwordCharSet += key_strings.number;
  };

  // This is to check if all varible are apply 
  if (
    lowercase === false &&
    uppercase === false &&
    symbols === false &&
    numbers === false
  ) {
    alert("Please select at least one character type.");
    return generatePassword;
   }
   
// else {
//   Empty string to be fille based on for loop random characters aray
  var password = "";

  for (let i = 0; i < length; i++) {
    password += passwordCharSet
    [Math.floor(Math.random() * passwordCharSet.length)]
  };
 return password;
}

// Write password to the "password Numbers" input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
debugger;
// 

// Add event addEventlistener to generate button a
generateBtn.addEventListener("click", writePassword);

});