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
// created variables to give each crystal and target score a random number each game 
  targetScore = Math.floor(Math.random() * 120) + 19;
  console.log(targetScore);
  blue = Math.floor(Math.random() * 12) + 1;
  console.log(blue);
  yellow = Math.floor(Math.random() * 12) + 1;
  console.log(yellow);
  green = Math.floor(Math.random() * 12) + 1;
  console.log(green);
  purple = Math.floor(Math.random() * 12) + 1;
  console.log(purple);

  $("#targetScore").html(targetScore);
  $("#yourScore").html(currentScore);

  // jQuery Functions // couldnt get the wins and losses to show up
  $("#blue").click(function() {
    currentScore = currentScore + blue;
    console.log("" + currentScore);
    $("#yourScore").html("" + currentScore);
    if (currentScore > targetScore) {
      alert("You lost");
      losses++;
      $("losses").html("" + losses);
    } else if (currentScore == targetScore) {
      alert("You Win!");
      wins++
      $("wins").html(""+ wins);
    }
  });
  $("#yellow").click(function() {
    currentScore = currentScore + yellow;
    console.log("" + currentScore);
    $("#yourScore").html("" + currentScore);
    if (currentScore > targetScore) {
      alert("You lost");
      losses++;
      $("losses").html("" + losses);
    } else if (currentScore == targetScore) {
      alert("You Win!");
      wins++;
      $("wins").html("" + wins);
    }
  });
  $("#green").click(function() {
    currentScore = currentScore + green;
    console.log("" + currentScore);
    $("#yourScore").html("" + currentScore);
    if (currentScore > targetScore) {
      alert("You lost");
      losses++;
      $("losses").html("" + losses);
    } else if (currentScore == targetScore) {
      alert("You Win!");
      wins++
      $("wins").html("" + wins);
    }
  });
  $("#purple").click(function() {
    currentScore = currentScore + purple;
    console.log("" + currentScore);
    $("#yourScore").html("" + currentScore);
    if (currentScore > targetScore) {
      alert("You lost");
      losses++;
      $("losses").html("" + losses);
    } else if (currentScore == targetScore) {
      alert("You Win!");
      wins++;
      $("wins").html("" + wins);
    }
  });
};

startGame();
