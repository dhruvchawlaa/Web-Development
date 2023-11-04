var randomNumber1 = Math.ceil(Math.random() * 6);
var diceImage1 = "./images/dice" + randomNumber1 + ".png";
var dice1 = document.querySelectorAll("img")[0];
dice1.setAttribute("src", diceImage1);

var randomNumber2 = Math.ceil(Math.random() * 6);
var diceImage2 = "./images/dice" + randomNumber2 + ".png";
var dice2 = document.querySelectorAll("img")[1];
dice2.setAttribute("src", diceImage2);

var heading = document.querySelector('h1');

if (randomNumber1 > randomNumber2) {
    heading.innerHTML = "🏆 Player 1 Wins!";
}

else if (randomNumber1 < randomNumber2) {
    heading.innerHTML = "Player 2 Wins! 🏆";
}

else {
    heading.innerHTML = "Draw! 🤝";
}
