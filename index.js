var randomnumber1= Math.floor(Math.random() * 6) + 1;
// randomnumber1 = Math.floor(randomnumber1)+1;
var randomDiceImage = "dice"+randomnumber1+".png";
var randomDiceSource = "images/" + randomDiceImage;
var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src", randomDiceSource);


var randomnumber2= Math.floor(Math.random() * 6) + 1;
var randomDiceImage2 = "dice"+randomnumber2+".png";

var randomDiceSource2 = "images/" + randomDiceImage2;
var img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src", randomDiceSource2);


if(randomnumber1 > randomnumber2)
{
  document.querySelector("h1").innerHTML = "Player 1 Wins 🚩";
}
else if (randomnumber2 > randomnumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins 🚩";
}
else{
  document.querySelector("h1").innerHTML = "Draw";
}
