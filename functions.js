var fortuneButton;
var fortuneInput;
var fortuneOutput;
var text;
var restyleButton;

var traits = ["understanding", "detail oriented", "brave", "caring", "bold", "silly", "sweet", "cool", "unique"];

document.addEventListener("DOMContentLoaded", function(){
  fortuneButton = document.getElementById("fortune-button");
  fortuneInput = document.getElementById("fortune-input");
  fortuneOutput = document.getElementById("fortune-output");
  text = document.getElementById("outputText");
  restyleButton = document.getElementById("restyle-button");

  fortuneButton.addEventListener("click", function(){
    var fortuneOutput = fortuneInput.value;
    displayTrait(fortuneOutput);
  });

  restyleButton.addEventListener("click", restyle);

});

function displayTrait(name) {
  var givenTrait = name + " is ";
  givenTrait += traits[Math.floor(Math.random() * traits.length)] + ".";
  text.innerText = givenTrait;
}

function restyle() {
  var randomRed = Math.floor(Math.random()*255);
  var randomGreen = Math.floor(Math.random()*255);
  var randomBlue = Math.floor(Math.random()*255);
  var outputColor = "rgb(" + randomRed + "," + randomGreen + "," + randomBlue + ")";

  var fontArray = ["Georgia","Garamond","Times New Roman","Brush Script MT"];
  var randomFont= Math.floor(Math.random()*fontArray.length);

  var randomRotation = -10 + (Math.random()*20)

  text.style.color = outputColor;
  text.style.transform = "rotate(" + randomRotation + "deg)";
  text.style.fontFamily= ""+ fontArray[randomFont] + "";
}
