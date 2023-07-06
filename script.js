// Variable references the #generate element
var generateBtn = document.querySelector("#generate");


// google array.concat() array.push()
// special, uppercase, lowercase and numeric characters to be included in password

var specialCharacters = '@%+\\/!#$^?:)(}{][~-_.'
var uppercasedCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
var numericCharacters = '0123456789'
var lowercasedCharacters = 'abcdefghijklmnopqrstuvwxyz'

// defining the generate password function 
function generatePassword() {
  var passwordlength = window.prompt(
    "How many characters long would you like your password to be? between 8 and 128"
  )
  console.log("length", passwordlength)

  var uppercase = window.confirm(
    "Click okay to confirm including uppercase characters."
  );
  console.log(uppercase)

  var Lowercase = window.confirm(
    "Click okay to confirm including lower characters."
  );
  console.log(Lowercase)

  var specialcase = window.confirm(
    "Click okay to confirm including special characters."
  );
  console.log(specialcase)

  var numerical = window.confirm(
    "Click okay to confirm including numbers."
  );
  console.log(numerical) 
// validate the input.

var possibleCharacters = "" 
  
 if (uppercase) possibleCharacters += uppercasedCharacters
 if (Lowercase) possibleCharacters += lowercasedCharacters 
 if (specialcase) possibleCharacters += specialCharacters
 if (numerical) possibleCharacters += numericCharacters

 console.log(possibleCharacters)

 var password = ""
 for ( var i = 0; i < passwordlength; i++) {

   var index = Math.floor(Math.random() * possibleCharacters);
   password += possibleCharacters[index]
 };
 return password;
};

 
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


