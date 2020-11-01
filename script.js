// Assignment Code
var generateBtn = document.querySelector("#generate");
var passLength = document.getElementById('passLength').value;

var alphaLowerValues = "abcdefghijklmnopqrstuvwxyz";
var alphaUpperValues = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numericValues = "1234567890";
var specialValues = "!#$%&()/?@{}~";



defaultPassLength();

generateBtn.addEventListener("click", launchForm);

document.getElementById("submitInput").addEventListener("click", formValidation);

document.getElementById("password").addEventListener("click", copyPassword);



function launchForm() {
  document.getElementById("inputForm").style.visibility = "visible";
}

function hideForm() {
  document.getElementById("inputForm").style.visibility = "hidden";
}

function defaultPassLength() {
  document.getElementById("passLength").defaultValue = "8";
}


function formValidation() {

  event.preventDefault();

  passLength = document.getElementById('passLength').value;

  if (document.querySelectorAll('input[type="checkbox"]:checked').length > 0 && passLength >= 8 && passLength <= 128) {
    generatePassword();
    hideForm();
  }
  else if (document.querySelectorAll('input[type="checkbox"]:checked').length > 0) {
    alert("Your password length must be between 8 and 128 characters!")
  }
  else {
    alert("You must select at least one checkbox to continue!")
  }

}

function generatePassword() {
    var passwordChar = "";
    var passwordAddition = "";
    var password = "";

      if (document.getElementById("uppercase").checked==true) {
          passwordChar += alphaUpperValues;
      }

      if (document.getElementById("lowercase").checked==true) {
          passwordChar += alphaLowerValues;
      }

      if (document.getElementById("numeric").checked==true) {
          passwordChar += numericValues;
      }

      if (document.getElementById("specialChar").checked==true) {
          passwordChar += specialValues;
      }

    passwordChar = passwordChar.split("");

    var passwordCharLength = passwordChar.length;


      for (i = 0; i < passLength; i++) {
          randomNumber(0, (passwordCharLength-1));
          password += passwordAddition;
      }

      function randomNumber(min, max) {
        charChoice = Math.floor(Math.random() * (max - min + 1) + min);
        passwordAddition = passwordChar[charChoice];
      }

    document.getElementById("password").innerHTML = password;

    document.getElementById("passMessaging").innerHTML = "Click on password to copy to clipboard!"

    document.getElementById("generate").innerHTML = "Generate another password!"
}



function copyPassword() {
  var passwordCopy = document.getElementById("password");

  passwordCopy.select();

  passwordCopy.setSelectionRange(0, 99999);

  document.execCommand("copy");
}