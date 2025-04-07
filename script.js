//console.log("Hello, World!");
//alert("Hello, World!");

//document.addEventListener("DOMContentLoaded", function () {
//  console.log("DOM fully loaded and parsed");
//});

function greet() {
  alert("Welcome to my personal website!");
  console.log("Welcome to my personal website!");
}

//window.onload = function () {
//  greet();
//};

const button = document.getElementById("greetButton");
button.onclick = function () {
  alert("Button clicked!");
};
