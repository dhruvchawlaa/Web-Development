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
$("button").text("Don't click me!");

// Editing html
$("button").html("<em>CLick me</em>");

// Manipulating attributes
console.log($("img").attr("src"));
$("a").attr("href", "https://www.github.com/");
console.log($("h1").attr("class"));

// Adding event listeners
$("h1").click(function () {
  $("h1").css("color", "purple");
});

$("button").click(function () {
  $("h1").css("color", "blue");
});

$("input").keydown(function (event) {
  console.log(event.key);
});

$(document).keydown(function (event) {
  $("h1").text(event.key);
});

$("h1").on("mouseover", function () {
  $("h1").css("color", "yellow");
});

// Adding and Removing elements
$("h1").before("<button>New</button>");
$("h1").after("<button>New</button>");
$("h1").prepend("<button>New</button>"); // Creates inside element before content
$("h1").append("<button>New</button>"); // Creates inside element after content
// $("button").remove();

// Adding animations
$("button").on("click", function() {
  $("h1").hide();
})

$("button").on("click", function() {
  $("h1").show();
})

$("button").on("click", function() {
  $("h1").toggle();
})

$("button").on("click", function() {
  $("h1").fadeOut();
})

$("button").on("click", function() {
  $("h1").fadeIn();
})

$("button").on("click", function() {
  $("h1").fadeToggle();
})

$("button").on("click", function() {
  $("h1").slideUp();
})

$("button").on("click", function() {
  $("h1").slideDown();
})

$("button").on("click", function() {
  $("h1").slideToggle();
})

// Defining custom CSS to gradually animate towards
$("button").on("click", function () {
  $("h1").animate({
    opacity: 0.5, // Can only animate css rules that have a numeric value
  });
});

// Chaining animations
$("button").on("click", function () {
  $("h1").slideUp().slideDown().animate({
    opacity: 0.5,
  });
});
