// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var specialChars = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", '=', "+", "?", "."];
// Write password to the #password input
function writePassword() {
  var userChoice = prompt("How many characters would you like the password to be? (8-128)");
  
  if(userChoice < 8 || userChoice > 128) {
    alert("Password must be between 8 and 128 characters. Please try again");
    return;
  } else {
    generatePassword();
  }

  // Defining generatePassword()
  function generatePassword() {
    var genCriteria1 = confirm("Would you like your password to include lowercase letters? Click ok to confirm, or cancel to move on.");
    var genCriteria2 = confirm("Would you like your password to inculde uppercase letters? Click ok to confirm, or cancel to move on.");
    var genCriteria3 = confirm("Would you like your password to include numbers? Click ok to confirm, or cancel to move on.");
    var genCriteria4 = confirm("Would you like your password to include symbols? Click ok to confirm, or cancel to move on.");

    var compChoice = ["", "", "", ""];
   
    // If statements for confirm questions asked
    if (genCriteria1 === true) {
      compChoice = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (genCriteria2 === true) {
      compChoice = compChoice.concat('abcdefghijklmnopqrstuvwxyz');
    }
    if (genCriteria3 === true) {
      compChoice = compChoice.concat("0123456789");
    }
    if (genCriteria4 === true) {
      compChoice = compChoice.concat("!@#$%^&*()-_+=~/|[]{},.`<>?");
    }
    // print charset to the console for verification
    console.log(compChoice);
    //Generate Password from selected characterset and length and store it in passwordFinal
    var passwordFinal = "";
    for (var i = 0; i < userChoice; i++) {
      passwordFinal = passwordFinal.concat(compChoice.charAt(Math.floor(Math.random() * compChoice.length)));
    }
    
    return passwordFinal;
  
  passwordText.value = password;

  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  }
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
