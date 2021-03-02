// Assignment Code
var specialChars = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
  var numericChars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var lowerCasedChars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var upperCasedChars = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var generateBtn = document.querySelector("#generate");
var passwordLength = prompt("Please choose the length of your password.")
var numericCharacters = confirm("Would you like numbers?")
var upperCase = confirm("Would you like upper case letters?")
var lowerCase = confirm("Would you like lower case letters?")
var specialChar = confirm("Would you like special characters?")
console.log(lowerCase, passwordLength, numericCharacters, upperCase)
function pickRandom(array){
   var random = Math.floor(Math.random()*array.length)
   return array[random]
}
function generatePassword(){
    var temp = []
    var newPassword =[]
    if (numericCharacters) {
        temp = temp.concat(numericChars)
    }
    if (numericCharacters) {
        temp = temp.concat(lowerCasedChars)
    }
    if (numericCharacters) {
        temp = temp.concat(upperCasedChars)
    }
    if (numericCharacters) {
        temp = temp.concat(specialChars)
    }
    for (let index = 0; index < passwordLength; index++) {
       newPassword.push(pickRandom(temp)) 
    }
    console.log(newPassword)
    return newPassword.join("")
}
// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  console.log(password)
  var passwordText = document.querySelector("#password");

  passwordText.textContent = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", function(){writePassword()})