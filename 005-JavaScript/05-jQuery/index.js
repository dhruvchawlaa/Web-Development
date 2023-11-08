// Selecting all the buttons
$("button");

// Changing heading color with jQuery
$("h1").css("color", "red");

// Getting the value of a style
console.log($("h1").css("color"));
console.log($("h1").css("font-size"));

// Adding a class to the selected element
$("h1").addClass("big-title");

// Removing  a class
$("h1").removeClass("big-title");

// Adding multiple classes
$("h1").addClass("big-title margin-50");

// Checking whether the element has a class
$("h1").hasClass("margin-50");

// Manipulating text
$("h1").text("Bye!");
$("button").text("Don't click me!")

// Editing html
$("button").html("<em>CLick me</em>");

// 
