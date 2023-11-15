var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var started = false;

// Array of colors
var buttonColours = ["red", "blue", "green", "yellow"];

// Detecting if any buttons are clicked
$(".btn").click(function () {
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
  animatePress(userChosenColour);
  checkAnswer(userClickedPattern.length - 1);
});

function nextSequence() {
  userClickedPattern = [];

  // Incrementing level
  level++;
  $("#level-title").text("Level " + level);

  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];

  // Adding the chosen color to the end of the game pattern
  gamePattern.push(randomChosenColour);

  // Selecting button with the id
  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

  // Playing sound
  playSound(randomChosenColour);
}

// Playing sound for the colour selected
function playSound(name) {
  var audio = new Audio("./sounds/" + name + ".mp3");
  audio.play();
}

// Animating whatever button is pressed
function animatePress(currentColour) {
  $("#" + currentColour).addClass("pressed");
  // Removing 'pressed' class after 100 ms
  setTimeout(function () {
    $("#" + currentColour).removeClass("pressed");
  }, 100);
}

// Starting the game when a key is pressed
$(document).keypress(function () {
  if (!started) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});

// Chexcking the answer
function checkAnswer(currentLevel) {
  // Checking whether the latest color is the same
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    console.log("Success");
    if (gamePattern.length === userClickedPattern.length) {
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  } else {
    console.log("Wrong");
    playSound("wrong");
    $("body").addClass("game-over");
    $("#level-title").text("Game Over, Press Any Key to Restart");
    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);
    startOver();
  }
}

// Resetting all values
function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
}
