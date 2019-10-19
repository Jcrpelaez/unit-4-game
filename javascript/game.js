// Created Variables for counters
var targetScore = 0;
var wins = 0;
var losses = 0;
var currentScore = 0;

// Created values for each stone
var blue = Math.floor(Math.random() * 12) + 1;
var yellow = Math.floor(Math.random() * 12) + 1;
var green = Math.floor(Math.random() * 12) + 1;
var purple = Math.floor(Math.random() * 12) + 1;

// Function to begin the game
var startGame = function() {
  var currentScore = 0;

  targetScore = Math.floor(Math.random() * 120) + 19;
  console.log(targetScore);
  blue.value = Math.floor(Math.random() * 12) + 1;
  console.log(blue);
  yellow.value = Math.floor(Math.random() * 12) + 1;
  console.log(yellow);
  green.value = Math.floor(Math.random() * 12) + 1;
  console.log(green);
  purple.value = Math.floor(Math.random() * 12) + 1;
  console.log(purple);
    $("#targetScore").html(targetScore);
    $("#yourScore").html(currentScore);

};

startGame();


//jQuery Functions
$("#blue").click(function() {
  alert("test");
});
$("#yellow").click(function() {
  alert("test");
});
$("#green").click(function() {
  alert("test");
});
$("#purple").click(function() {
  alert("test");
});
