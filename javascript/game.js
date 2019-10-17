// Created Variables for counters
var targetScore  = 0;
var wins         = 0;
var losses       = 0;
var currentScore = 0; 

// Created values for each stone
var blue
var yellow
var green
var purple

// Function to begin the game

var startGame = function(){
    var currentScore = 0;


    targetScore = Math.floor(Math.random() * 120) + 19;

    crystal.blue.value = Math.floor(Math.random() * 12) + 1;
    crystal.yellow.value = Math.floor(Math.random() * 12) + 1;
    crystal.green.value = Math.floor(Math.random() * 12) + 1;
    crystal.purple.value = Math.floor(Math.random() * 12) + 1;






}




//jQuery Functions

$("#blue").click(function() {
    alert("test");
})
$("#yellow").click(function () {
    alert("test");
})
$("#green").click(function () {
    alert("test");
})
$("#purple").click(function () {
    alert("test");
})
