// Variable references the #generate element
var generateBtn = document.querySelector("#generate");

// special, uppercase, lowercase and numeric characters to be included in password
var specialCharacters = '@%+\\/!#$^?:)(}{][~-_.'
var uppercasedCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
var numericCharacters = '0123456789'
var lowercasedCharacters = 'abcdefghijklmnopqrstuvwxyz'

// defining the generate password function 
function generatePassword() {
  // creating prompts and confirmations for users
  var passwordlength = window.prompt(
    "How many characters long would you like your password to be? between 8 and 128");
    
  var uppercase = window.confirm(
    "Click OKAY to confirm including uppercase characters. Click CANCEL to not include.");

  var lowercase = window.confirm(
    "Click OKAY to confirm including lower characters.Click CANCEL to not include.");

  var specialcase = window.confirm(
    "Click OKAY to confirm including special characters.Click CANCEL to not include.");

  var numerical = window.confirm(
    "Click OKAY to confirm including numbers.Click CANCEL to not include.");

var possibleCharacters = "" 
  // combining created characters above to call them into new var.
 if (uppercase) possibleCharacters += uppercasedCharacters
 if (lowercase) possibleCharacters += lowercasedCharacters 
 if (specialcase) possibleCharacters += specialCharacters
 if (numerical) possibleCharacters += numericCharacters

 var newpassword = ""

 for ( var i = 0; i < passwordlength; i++) {

   var index = Math.floor(Math.random() * possibleCharacters.length);
   console.log(index);
   newpassword += possibleCharacters[index]
 };
console.log(newpassword)
 return newpassword;

};
 
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);