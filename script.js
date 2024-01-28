function getPlayerChoice(){
    playerSelection=prompt("Ingresa tu elección: ROCK PAPER SCISSORS");
    playerSelection=playerSelection.toUpperCase();
    return playerSelection;
}

function getComputerChoice(){
    randomNumber=Math.floor(Math.random()*3);
    if(randomNumber===0){
        computerSelection="ROCK"
    }
    else if(randomNumber===1){
        computerSelection="PAPER"
    }
    else{
        computerSelection="SCISSORS"
    }
    return computerSelection
}

playerSelection=getPlayerChoice();
computerSelection=getComputerChoice();
let playerPoints=0
let computerPoints=0

function playRound(playerSelection,computerSelection){
    if (playerSelection===computerSelection){
        console.log("It's a TIE")
    }
    else if((playerSelection==="ROCK"&&computerSelection==="SCISSORS")||
            (playerSelection==="SCISSORS"&&computerSelection==="PAPER")||
            (playerSelection==="PAPER"&&computerSelection==="ROCK")){
        console.log(playerSelection+" beats " +computerSelection+" YOU WIN");
        playerPoints++;
    }
    else{
        console.log(computerSelection+" beats " +playerSelection+" YOU LOSE")
        computerPoints++;
    }
}


function game(){
    console.log("ROUND 1")
    console.log("Your choice: "+playerSelection);
    console.log("CPU choice: "+computerSelection);
    playRound(playerSelection,computerSelection);
        playerSelection=getPlayerChoice();
        computerSelection=getComputerChoice();
    console.log("ROUND 2")
    console.log("Your choice: "+playerSelection);
    console.log("CPU choice: "+computerSelection);
    playRound(playerSelection,computerSelection);
        playerSelection=getPlayerChoice();
        computerSelection=getComputerChoice();
    console.log("ROUND 3")
    console.log("Your choice: "+playerSelection);
    console.log("CPU choice: "+computerSelection);
    playRound(playerSelection,computerSelection);
        playerSelection=getPlayerChoice();
        computerSelection=getComputerChoice();
    console.log("ROUND 4")
    console.log("Your choice: "+playerSelection);
    console.log("CPU choice: "+computerSelection);
    playRound(playerSelection,computerSelection);
        playerSelection=getPlayerChoice();
        computerSelection=getComputerChoice();
    console.log("ROUND 5")
    console.log("Your choice: "+playerSelection);
    console.log("CPU choice: "+computerSelection);
    playRound(playerSelection,computerSelection);
    if(playerPoints>computerPoints){
        console.log("CONGRATS YOU WIN THE GAME "+playerPoints+" - "+computerPoints)
    }
    else{
        console.log("YOU LOSE THE GAME "+playerPoints+" - "+computerPoints)
    }
}

game();