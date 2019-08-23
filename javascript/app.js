// Defining global variables

let wins = 0;
let losses = 0;
let buttonValues = [];
let targetScore = 0;


// The function to start a new round

function startGame() {

    // Resetting the score to zero
    totalScore = 0;

    // Creating a random target score from 19-120
    targetScore = Math.floor(Math.random() * 101) + 19;

    // Updating text when startgame is called
    $("#total-score").text(`Total Score : ${totalScore}`);
    $("#wins-total").text(`Wins : ${wins}`);
    $("#losses-total").text(`Losses : ${losses}`);
    $("#target-score").text(`Target Score : ${targetScore}`);


    // Assign attributes for each crystal by using a for loop
    buttonValues = [];
    for (let i = 0; i < 4; i++) {

        buttonNumber = (Math.floor(Math.random() * 12) + 1);
        buttonValues.push(buttonNumber)


    }
    console.log(buttonValues);
    $("#button-1").attr("data-value", buttonValues[0]);
    $("#button-2").attr("data-value", buttonValues[1]);
    $("#button-3").attr("data-value", buttonValues[2]);
    $("#button-4").attr("data-value", buttonValues[3]);

}

// Whenever a crystal is clicked, runs the score updated function
function scoreUpdate() {

    // Convert the data-value into a number and add to the score based on the clicked crystal
    totalScore = totalScore + (Number($(this).attr("data-value")));
    $("#total-score").text(`Total Score : ${totalScore}`);
    $("#directions-text").html(`<h2>Good luck! </h2>`);
    $("#popup").text(``);
    console.log(totalScore);

    // Win condition
    if (totalScore === targetScore) {
        $("#target-score").text(targetScore);
        $("#popup").text(`Good Job! Your Total Score Matched The Target Score!`);

        wins++;
        $("#wins-total").text(wins);
        startGame();

    }
    // Lose condition
    else if (totalScore > targetScore) {
        $("#target-score").text(targetScore);
        $("#popup").text(`Nice Try, Your Guess Was ${totalScore}! You needed ${targetScore}!`);

        losses++;
        $("#losses-total").text(losses);
        startGame();

    }
}

// Checks to see if the user reached 5 wins or 5 losses
function completeChecker() {
    if (wins === 5) {

        $("#popup").html(`You Are A Guess Master!<br>Click A Gem To Play Again!`);
        freshStart();
    }
    else if (losses === 5) {

        $("#popup").html(`You Lost! <br>Click A Gem To Play Again!`);
        freshStart();
    }
}
// Resetting all relevant variables when the game starts over
function freshStart() {
    totalScore = 0;
    wins = 0;
    losses = 0;
    $("#wins-total").text(`Wins : ${wins}`);
    $("#losses-total").text(`Losses : ${losses}`);
    $("#directions-text").html(`Each Diamond Has A Random Value. <br> Try To Match The Target Score Given The Random Values <br> Try To Get To 5 Wins Before 5 Losses!`);

}

// Calling Functions
startGame();
$(".btn-score").on("click", scoreUpdate);
$(".btn-score").on("click", completeChecker);



