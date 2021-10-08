// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordLength;
// Write password to the #password input
function writePassword() {
  var userChoice = prompt("How many characters would you like the password to be? (8-128)");
    if (userChoice < 8 || userChoice > 128) {
      alert("Password must be between 8 and 128 characters. Please try again");
      return;
    } else {
  }
  var lowerCase = confirm("Would you like your password to include lowercase letters? Click ok to confirm, or cancel to move on.");
  var upperCase = confirm("Would you like your password to inculde uppercase letters? Click ok to confirm, or cancel to move on.");
  var numbers = confirm("Would you like your password to include numbers? Click ok to confirm, or cancel to move on.");
  var symbols = confirm("Would you like your password to include symbols? Click ok to confirm, or cancel to move on.");

  // Defining generatePassword()
  var password = generatePassword();
  function generatePassword() {
    var genCriteria = ["", "", "", ""];
    var compChoice = "";

    genCriteria[0] = upperCase;
    genCriteria[1] = lowerCase;  
    genCriteria[2] = numbers;
    genCriteria[3] = symbols;
    // If statements for confirm questions asked
    if (genCriteria[0] === true) {
      compChoice = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (genCriteria[1] === true) {
      compChoice = compChoice.concat('abcdefghijklmnopqrstuvwxyz');
    }
    if (genCriteria[2] === true) {
      compChoice = compChoice.concat("0123456789");
    }
    if (genCriteria[3] === true) {
      compChoice = compChoice.concat("!@#$%^&*()-_+=~/|[]{},.`<>?");
    }
    passwordLength = userChoice
    console.log(compChoice)
   
    //Generate Password from selected characterset and length and store it in passwordFinal
    var passwordFinal = "";
    for (var i = 0; i < passwordLength; i++) {
      passwordFinal = passwordFinal.concat(compChoice.charAt(Math.floor(Math.random() * compChoice.length)));
    }
    return passwordFinal;
  }
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
