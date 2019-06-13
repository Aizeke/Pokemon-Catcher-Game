$(document).ready(function () {

    // List of Variables
    var randNum;
    var score = 0;
    var wins;
    var losses;

    // Img Value Array
    var pokemonValArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    // Img Values
    var pokemonVal0;
    var pokemonVal1;
    var pokemonVal2;
    var pokemonVal3;

    // Shuffle Pokemon Values
    var setPokemonVal = function () {
        pokemonVal0 = pokemonValArr[Math.floor(Math.random() * pokemonValArr.length)];
        pokemonVal1 = pokemonValArr[Math.floor(Math.random() * pokemonValArr.length)];
        pokemonVal2 = pokemonValArr[Math.floor(Math.random() * pokemonValArr.length)];
        pokemonVal3 = pokemonValArr[Math.floor(Math.random() * pokemonValArr.length)];
    }

    // Pokemon OnClick Images Functions
    // Add val to score, 

    $('#pokemon-0').on('click', function () {
        score += pokemonVal0;
        $("#totalScore").html(score);
        ifScoreOver();
    });

    $('#pokemon-1').on('click', function () {
        score += pokemonVal1;
        $("#totalScore").html(score);
        ifScoreOver();
    });

    $('#pokemon-2').on('click', function () {
        score += pokemonVal2;
        $("#totalScore").html(score);
        ifScoreOver();
    });

    $('#pokemon-3').on('click', function () {
        score += pokemonVal3;
        $("#totalScore").html(score);
        ifScoreOver();
    });

    // Game Logic
    var ifScoreOver = function () {
        if (score === randNum) {
            wins += 1;
            $('#win-or-lost').html('You Won!');
            resetGame();
        } else if (score > randNum) {
            losses += 1;
            $('#win-or-lost').html('You Lost :C');
            resetGame();
        }
    }

    // Display Content functions

    var Display = function () {
        $('#randNum').html("Random Number: " + randNum);

        $('#wins-losses').html("Wins: " + wins + "<br>Losses: " + losses);

        $('#totalScore').html(0);
    }

    // Run Game Function
    var runGame = function () {
        randNum = Math.floor(Math.random() * 90) + 15;
        score = 0;
        wins = 0;
        losses = 0;

        setPokemonVal();
        Display();
        console.log("RANDOM NUMBER: " + randNum);
        console.log("VAL1: " + pokemonVal0);
        console.log("VAL2: " + pokemonVal1);
        console.log("VAL3: " + pokemonVal2);
        console.log("VAL4: " + pokemonVal3);
    }

    var resetGame = function() {
        randNum = Math.floor(Math.random() * 90) + 15;
        score = 0;
        setPokemonVal();
        Display();
    }

    runGame();
});