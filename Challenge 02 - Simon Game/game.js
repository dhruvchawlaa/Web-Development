var gamePattern = [];
var userClickedPattern = [];

// Array of colors
var buttonColours = ["red", "blue", "green", "yellow"];

// Detecting if any buttons are clicked
$(".btn").click(function() {
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
});

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];

  // Adding the chosen color to the end of the game pattern
  gamePattern.push(randomChosenColour);

  // Selecting button with the id
  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

  // Playing sound for the colour selected
  var audio = new Audio("./sounds" + randomChosenColour + ".mp3");
  audio.play();
}
