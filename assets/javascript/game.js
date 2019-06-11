$(document).ready(function() {
    console.log("JQuery is now ready!");

    // List of Variables
    var randNum;
    var score;
    var wins;
    var losses;

    // Img Value Array
    var pokemonValArr = [];

    // Img Values
    var pokemonVal0;
    var pokemonVal1;
    var pokemonVal2;
    var pokemonVal3;

    // Pokemon OnClick Images Functions
    // Add val to score, 

    $('#pokemon-0').on('click', function(){
        score += pokemonVal0;
    });

    $('#pokemon-1').on('click', function(){
        score += pokemonVal1;
    });

    $('#pokemon-2').on('click', function(){
        score += pokemonVal2;
    });

    $('#pokemon-3').on('click', function(){
        score += pokemonVal3;
    });

    // Display Content functions

    var Display = function() {
        $('#randNum').html("Random Number: " + randNum);

        $('#wins-losses').html("Wins: " + wins + "<br>Losses: " + losses);
    }

    // Run Game Function
    var runGame = function() {
        randNum =  Math.floor(Math.random() * 90) + 15;
        score = 0;

        Display();
        console.log(randNum);
    }

    runGame();
});