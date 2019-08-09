
function startGame(){

    document.getElementById("gameContainer").innerHTML = 'GAME STARTED. Good Luck!<br/> 
    <div class="col-lg-12" id="questions">
            
    <p>Which of these superheroes was created by Marvel?</p>';


}


document.getElementById("goToGame").addEventListener("click", startGame); //listen for initialization click to start the game