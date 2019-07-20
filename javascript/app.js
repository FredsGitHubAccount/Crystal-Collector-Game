// Global Variables

let wins = 0;
let losses = 0;
let buttonValues = [];
let targetScore = 0;


// Defining startGame function

function startGame() {

totalScore = 0;

targetScore = Math.floor(Math.random() * 101) + 19;
$("#total-score").text(`Total Score : ${totalScore}`);
$("#wins-total").text(`Wins : ${wins}`);
$("#losses-total").text(`Losses : ${losses}`);
$("#target-score").text(`Target Score : ${targetScore}`);



buttonValues = [];
for (let i = 0; i < 4; i++){
    
buttonNumber = (Math.floor(Math.random() * 12 ) + 1);
buttonValues.push(buttonNumber)


}
console.log(buttonValues);
$("#button-1").attr("data-value", buttonValues[0]);
$("#button-2").attr("data-value", buttonValues[1]);
$("#button-3").attr("data-value", buttonValues[2]);
$("#button-4").attr("data-value", buttonValues[3]);

}

function scoreUpdate() {

totalScore = totalScore + (Number($(this).attr("data-value")));
$("#total-score").text(`Total Score : ${totalScore}`);
$("#directions-text").text(`Good luck!`);
$("#popup").text(``);
console.log(totalScore);

if  (totalScore === targetScore) {
    $("#target-score").text(targetScore);
    $("#popup").text(`Good Job! Your Total Score Matched The Target Score!`);
    alert("You Lose! Hit Space To Begin The Next Round")
    wins++;
    $("#wins-total").text(wins);
    startGame();
    
}

    else if (totalScore > targetScore) {
        $("#target-score").text(targetScore);
        $("#popup").text(`Nice Try, Your Guess Was ${totalScore}! You needed ${targetScore}!`);
        alert("You Lose! Hit Space To Begin The Next Round");
        losses++;
        $("#losses-total").text(losses);
        startGame();

    }
}


function completeChecker() {
    if (wins === 5) {
        alert(`You Are A Guess Master!`)
        $("#popup").text(`Click A Gem To Play Again!`);
        freshStart();
    }
    else if (losses === 5) {
        alert("Better Luck Next Time")
        $("#popup").text(`Click A Gem To Play Again!`);
        freshStart();
    }
}

function freshStart() {
    totalScore = 0;
    wins = 0;   
    losses = 0;
$("#wins-total").text(`Wins : ${wins}`);
$("#losses-total").text(`Losses : ${losses}`);
$("#directions-text").html(`Match The Target Score By Clicking The Mysterious Gems! <br> Try To Get To 5 Wins Before 5 Losses!`);

}

// Calling Functions
startGame();
$(".btn-score").on("click",scoreUpdate);
$(".btn-score").on("click",completeChecker);



