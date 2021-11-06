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



function generatePassword() {
  var passwordCharSet = "";

  var length = window.prompt("Enter a number from 8 to 128 for password length.");
  if ((length >= 8) && (length <= 128)) {
    
  }
  
// Password need to meet lenght criterion, with a least 8 characters and no more than 128
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
  
//   Now are going to create the password string
  var password = "";
  for (let i = 0; i < length; i++) {
    password += passwordCharSet
    [Math.floor(Math.random() * passwordCharSet.length)]
  };
  
  
  return password;
}

// Write password to the #password input
function writePassword() {
  var password1 = "";
  password1 = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password1;
}

// function resetText(){
//   document.getElementById("password").value = "Your Secure Password";
// }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
});