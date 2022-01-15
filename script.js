// Assignment code here

// Create variable for lowercase characters
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

// Create variable for uppercase characters
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

// Create variable for numbers
var number = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]

// Create variable for special characters
var specialCharacter = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "=", "_", "+", "{", "}", "[", "]", ";", ":", "'", ".", "?"]


var generatePassword = function () {

  // Create empty array to push true values into
  var responseArray = [];

  // Ask user to choose a length of at least 8 characters and no more than 128 characters
  var passwordLength = window.prompt("Please choose a password length between 8-128 characters");
  console.log(passwordLength);
  // If password character count is true, proceed


  if (passwordLength < 128 && passwordLength > 8) {
    // Ask user to confirm if they would like to include lowercase characters
    var lowercasePrompt = window.confirm("Would you like to include lowercase characters?");
    console.log(lowercasePrompt);

    // If true
    if (lowercasePrompt === true) {
      // Push lowercase variable into responseArray
      responseArray.push(lowercase)
      console.log(responseArray);
    }

    // Ask user to confirm if they would like to include uppercase characters
    var uppercasePrompt = window.confirm("Would you like to include uppercase characters?");
    console.log(uppercasePrompt);
    // If true
    if (uppercasePrompt === true) {
      // Push uppercase variable into responseArray
      responseArray.push(uppercase);
      console.log(responseArray);
    }

    // Ask user to confirm if they would like to include numbers
    var numberPrompt = window.confirm("Would you like to include numbers?");
    console.log(numberPrompt);
    // If true
    if (numberPrompt === true) {
      // Push number variable into responseArray
      responseArray.push(number);
      console.log(responseArray);
    }

    // Ask user to confirm if they would like to include special characters
    var specialcharacterPrompt = window.confirm("Would you like to include special characters?");
    console.log(specialcharacterPrompt);
    // If true
    if (specialcharacterPrompt === true) {
      // Push specialCharacter variable into responseArray
      responseArray.push(specialCharacter);
      console.log(responseArray);
    }

    // Generate Password
    // Create variable for method that takes responseArray and creates one array with it
    var flattenedArray = responseArray.flat();
    console.log(flattenedArray);

    // Create a new empty array to push random values into
    var passwordArray = [];

    // for loop to loop through all random characters within the specified password length
    for (var i = 0; i < passwordLength; i++) {
      // Create variable for randomNumber which takes the flattenedArray and chooses random strings
      var randomNumber = Math.floor(Math.random() * Math.floor(flattenedArray.length));
      // Pushes flattenedArray into initial passwordArray
      passwordArray.push(flattenedArray[randomNumber]);
      console.log(passwordArray);
    };

    // Display password
    return passwordArray.join("");
  }
  // If password character count is false, show alert
  else {
    window.alert("your password needs to be between 8-128 characters");
    generatePassword();
  }
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
