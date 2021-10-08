// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbersV = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var symblesV = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", '=', "+", "?", "."];

// Write password to the #password input
function writePassword() {
  var userChoice = prompt("How many characters would you like the password to be? (8-128)");
  if (userChoice < 8 || userChoice > 128) {
    alert("Password must be between 8 and 128 characters. Please try again");
    return;
  } else {
    var genCriteria[0] = confirm("Would you like your password to include lowercase letters? Click ok to confirm, or cancel to move on.");
    var genCriteria[1] = confirm("Would you like your password to inculde uppercase letters? Click ok to confirm, or cancel to move on.");
    var genCriteria[2] = confirm("Would you like your password to include numbers? Click ok to confirm, or cancel to move on.");
    var genCriteria[3] = confirm("Would you like your password to include symbols? Click ok to confirm, or cancel to move on.");
    generatePassword();
  }


  // Defining generatePassword()
  function generatePassword() {

}






var password = generatePassword();
var passwordText = document.querySelector("#password");
  }
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//for (var i = 0; i < LengthCriteria; i++){
  //pw = pw.concat(selectChars.charAt(Math.floor(Math.random()
 // var confirm1 = confirm("Would you like your password to have lowercase letters? Click ok to confirm, or cancel to move on.");
  //if (confirm1 === "True") {
    //var compChoice1 = lowerCase[Math.floor(Math.random() * lowerCase.length)];
   // console.log(compChoice1);
  //} else {
