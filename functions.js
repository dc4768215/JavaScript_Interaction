var fortuneButton;
var fortuneInput;
var fortuneOutput;
var text;

var traits = ["understanding", "detail oriented", "brave", "caring", "bold", "silly", "sweet", "cool", "unique"];

document.addEventListener("DOMContentLoaded", function(){
  fortuneButton = document.getElementById("fortune-button");
  fortuneInput = document.getElementById("fortune-input");
  fortuneOutput = document.getElementById("fortune-output");
  text = document.getElementById("outputText");

  fortuneButton.addEventListener("click", function(){
    var fortuneOutput = fortuneInput.value;
    displayTrait(fortuneOutput);
  });


});
function displayTrait(name) {
  var givenTrait = name + " is ";
  givenTrait += traits[Math.floor(Math.random() * traits.length)] + ".";
  text.innerText = givenTrait;
}
