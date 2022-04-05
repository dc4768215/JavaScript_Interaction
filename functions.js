var numButton;
var numInput;
var fortuneButton;
var fortuneInput;
var fortuneOutput;
var text;

document.addEventListener("DOMContentLoaded", function(){
  numButton = document.getElementById("half-button");
  numInput = document.getElementById("half-input");
  fortuneButton = document.getElementById("fortune-button");
  fortuneInput = document.getElementById("fortune-input");
  fortuneOutput = document.getElementById("fortune-output");
  text = document.getElementById("text");
}

numButton.addEventListener("click", displayNum(){
  var initalNum = numInput.value();
  displayNum(initalNum);
}
function displayNum(num) {
  newNum = num / 2;
  alert(newNum);
}

/*
var nameInput = document.getElementById("fortune-button").value;
document.getElementById("fortune-button").addEventListener("click", displayFortune);
function displayFortune() {
  alert(nameInput + "will have a sweet day!");
}*/
