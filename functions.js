var numInput = document.getElementById("half-button").value;
document.getElementById("half-button").addEventListener("click", displayNum);
function displayNum() {
  alert(numInput / 2);
}


var nameInput = document.getElementById("fortune-button").value;
document.getElementById("fortune-button").addEventListener("click", displayFortune);
function displayFortune() {
  alert(nameInput + "will have a sweet day!");
}
