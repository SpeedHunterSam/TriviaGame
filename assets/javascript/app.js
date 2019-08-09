

let timer = 2; // set timer to 59 seconds
let timerRunning = true;


function startGame() {

    document.getElementById("gameContainer").innerHTML = timer + " Seconds left"; //display starting timer

        const fullStop = setInterval(updateCountdown, 1000);  //set interval to run countdown function
        console.log("Game Function Running"); //a check to get status of timer in console
        console.log(timerRunning);

    function gameOver() {

        //game over function will inform user that game is over, stop the timer and display the score
        console.log(timerRunning) //a double check to make sure everything stops
        console.log("Game has Stopped")
        clearInterval(fullStop);
        document.getElementById("gameContainer").innerHTML = "Game Over";


    }

    function updateCountdown() {

        //this function displays time remaining to the viewport

        document.getElementById("gameContainer").innerHTML = timer + " Seconds left";
        if (timer <= 0) {
            timerRunning = false;
            console.log(timerRunning);  //a check to make sure everything stops
            gameOver();
        } else {
            timer--;
        }
    }

}

document.getElementById("goToGame").addEventListener("click", startGame); //listen for initialization click to start the game
