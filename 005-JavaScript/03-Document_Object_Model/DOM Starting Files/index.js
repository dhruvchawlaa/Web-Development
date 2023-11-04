// Selecting HTML elements by tag name
document.getElementsByTagName("li");  // HTMLCollection(3) [li.item, li.item, li.item]
document.getElementsByTagName("li")[2].style.color = "purple";  // 'purple'
document.getElementsByTagName("li").length;  // 3

// Selecting HTML elements by class name
document.getElementsByClassName("item");  // HTMLCollection(3) [li.item, li.item, li.item]
document.getElementsByTagName("li")[2].style.color = "red";  // 'red'
document.getElementsByTagName("li").length;  // 3

// Selecting HTML elements by ID
document.getElementById("title");  // <h1 id="title" class="red huge">Hello</h1>
document.getElementById("title").innerHTML = "Good Bye!";  // 'Good Bye!'

// Selecting HTML elements in general
console.log(document.querySelector(".item"));  // <li class="item"><a href="https://www.google.co.in/?client=safari">Google</a></li>
console.log(document.querySelectorAll(".item"));  //  NodeList(3) [li.item, li.item, li.item]

// Changing CSS Styles of HTML Elements
document.querySelector("#title").style.color = "blue";  // 'blue'
document.querySelector("#title").style.fontSize = "5rem"; // '5rem'
document.querySelector("button").style.backgroundColor = "yellow";  // 'yellow'

// Class list
document.querySelector("#title").classList;  // DOMTokenList ['red', value: 'red']
document.querySelector("#title").classList.add('huge');  // Adds class 'huge'
document.querySelector("#title").classList.remove('huge');  // Removes class 'huge'
document.querySelector("#title").classList.toggle('huge');  // Toggles class 'huge'

// Text Manipulation and Text Content Property
document.querySelector("#title").textContent = "Hello World!";  // 'Hello World!'

// Manipulating HTML element attributes
document.querySelector("a").getAttribute("href");  // 'https://www.google.com/'
document.querySelector("a").setAttribute("href", "https://www.bing.com/");  // Sets attribute to 'https://www.bing.com/'
