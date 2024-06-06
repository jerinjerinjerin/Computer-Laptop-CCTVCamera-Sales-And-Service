document.addEventListener("DOMContentLoaded", function () {
  var element = document.getElementById("myHeader");

  // Array of colors
  var colors = ["red", "green", "blue", "orange", "purple", "yellow", "white"];
  var index = 0;

  // Function to change text color
  function changeColor() {
    element.style.color = colors[index];
    index = (index + 1) % colors.length; // Cycle through colors
  }

  // Set interval to change color every 1 second (1000 milliseconds)
  var interval = setInterval(changeColor, 1000);
});

// Create a new function called newDate()
function newDate() {
  //return a new Date() -- returns the current calendar year.
  return new Date().getFullYear();
}
// after everything else has loaded on the page, load this command: find the element (like a <span>) with the ID of 'autoupdate' and insert the dash '-' and the result of the newDate() function that returns the current calendar year.  (ie. '-2017' or whatever the current calendar year is)
document.onload = document.getElementById("autodate").innerHTML =
  "" + newDate();
