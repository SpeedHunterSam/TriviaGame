

let timer = 2; // set timer to 59 seconds
let timerRunning = true;


function startGame() {

    document.getElementById("gameContainer").innerHTML = timer + " Seconds left"; //display starting timer

    if(timerRunning === true){
        setInterval(updateCountdown, 1000);
        console.log(timer);
        console.log(timerRunning);
        }else{
            return;
        }
}

function gameOver() {

    document.getElementById("gameContainer").innerHTML = "Game Over";

}

function updateCountdown() {

    console.log(timer);
    console.log(timerRunning);
    document.getElementById("gameContainer").innerHTML = timer + " Seconds left";
    if (timer <= 0) {
        timerRunning = false;
        gameOver();
    }else{
        timer--;
    }
}

document.getElementById("goToGame").addEventListener("click", startGame); //listen for initialization click to start the game
