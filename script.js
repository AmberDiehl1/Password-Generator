// Assignment code here

// Function for getting a random element from an array
function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];
//  console.log(randElement)
  // return randElement;
};

// we want to call the function within the forloop

// var passwordCharacter = getRandom(possibleCharacters);


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var possibleCharacters = []
// google array.concat() array.push()

function generatePassword() {
  var length = window.prompt(
    "How many characters long would you like your password to be? between 8 and 120"
  )
  console.log("length", length)
  var hasUppercaseChar = window.confirm(
    "Click okay to confirm including uppercase characters."
  )
  var hasLowercaseChar = window.confirm(
    "Click okay to confirm including lower characters."
  )
  var specialchars = window.confirm(
    "Click okay to confirm including special characters."
  )
  var numerical = window.confirm(
    "Click okay to confirm including numbers."
  )

  console.log("confirms", hasUppercaseChar, hasLowercaseChar, specialchars, numerical) 
  };
  // create an if for the upper and lower case possibilities
  // Conditional statement that adds array of uppercase characters into array of possible characters based on user input
  // Push new random upper-cased character to guaranteedCharacters
  if (hasUppercaseChar) {
    possibleCharacters = possibleCharacters.concat(upperCasedCharacters); 
  };
  if (hasLowercaseChar) {
    possibleCharacters = possibleCharacters.concat(lowerCasedCharacters); 
  };
  if (specialchars) {
    possibleCharacters = possibleCharacters.concat(specialCharacters); 
  };
  if (numerical) {
    possibleCharacters = possibleCharacters.concat(numericCharacters); 
  };

  
  console.log(possibleCharacters)

  for ( var i = 0; i < possibleCharacters.length; i++) {
getRandom(possibleCharacters)
  function getRandom(arr) {
    var randIndex = Math.floor(Math.random() * possibleCharacters.length);
    // var randElement = arr[randIndex];
  
  };
  };
  // we will have a lot of ifs and at the end of all the ifs the value of the arrays will concat together and we need a for loop to pick random characters. and we have an array out of the random chars depending on the users choice or number ofchars.
  // find a way to join an array into a string. Answ: to stringfy?
  // function to pick random chars:




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Array of special characters to be included in password
var specialCharacters = [
  '@','%', '+','\\', '/',"'",'!','#','$', '^','?', ':',',',')','(','}','{',']','[','~',
  '-','_', '.',
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s',
  't','u','v','w','x','y','z',
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O',
  'P','Q','R','S','T','U','V','W','X','Y','Z',
];


// the way to store data in js is by using variables. 
// there are two types of varaibles (primative and non-primative)
// var x = 5; 
// var z = "this is string"
// var y = true 
// non-primative data types (arrays and objects)
// write in camel case the first letter is lower case and any following start with uppercase. 
// var myArray = [1, 2, 3, "four"];
// console.log(myArray[1]);
// an object is defined with curly brackets and an array is defined with square brackets. objects have properties and methods only! Properties are something that describe an object and methods are used to manipulate an object.
// var myObject = {
//   color: "blue",
//   year: 2020,

//   drive(){
//     console.log("string")
//   }
// };
// console.log(myObject.color)
// console.log(myObject.drive()