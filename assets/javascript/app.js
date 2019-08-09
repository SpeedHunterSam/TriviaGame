

let timer = 5; // set timer to 5 seconds
let timerRunning = true;
let answer1 = "";



function startGame() {

    document.getElementById("revealQuestion").style.color = "black";


    document.getElementById("gameContainer").innerHTML = timer + " Seconds left"; //display starting timer

        const fullStop = setInterval(updateCountdown, 1000);  //set interval to run countdown function
        console.log("Game Function Running"); //a check to get status of timer in console
        console.log(timerRunning);

    function gameOver() {

        //game over function will inform user that game is over, stop the timer and display the score
        console.log(timerRunning) //a double check to make sure everything stops
        console.log("Game has Stopped")
        clearInterval(fullStop);

        //getting the values of all of the radio buttons

        let ele = document.getElementsByName("question1"); 
        for(let i = 0; i < ele.length; i++) { 
            if(ele[i].checked){
                answer1 = ele[i].value;
            }
        } 


        console.log(answer1); //double checking the console for the correct string aka answer

        if(answer1 === "Black Panther"){
        
            document.getElementById("gameContainer").innerHTML = "Game Over... Congratulations " + answer1 + " is correct.  Thanos has spared you.";
        } else{
            document.getElementById("gameContainer").innerHTML = "Game Over..." + answer1 + " is not correct.  You have been sacrificed by Thanos for the greater good.";
        }


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
