buttonOne=document.querySelector('.rock');
buttonTwo=document.querySelector('.paper');
buttonThree=document.querySelector('.scissors');
cpuChoice=document.querySelector('.cpu-text');
computerCount=document.querySelector('.cpu-count');
playerCount=document.querySelector('.player-count');
winnerText=document.querySelector('.winner');
center=document.querySelector('.center-main');
const restartButton = document.createElement('button');
restartButton.textContent='RESTART';
restartButton.setAttribute('class','restart-button');

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
    cpuChoice.textContent=computerSelection;
    return computerSelection
}



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
        playerCount.textContent=playerPoints;
    }
    else{
        console.log(computerSelection+" beats " +playerSelection+" YOU LOSE")
        computerPoints++;
        computerCount.textContent=computerPoints;
    }
}

function noStyleCpu(){
    cpuChoice.textContent='?';
}

function noStyle(){
    buttonOne.style='';
    buttonTwo.style='';
    buttonThree.style='';
}

function disableButton(){
    buttonOne.disabled = true;
    buttonTwo.disabled = true;
    buttonThree.disabled = true;
}

function enableButton(){
    buttonOne.disabled = false;
    buttonTwo.disabled = false;
    buttonThree.disabled = false;
}

function winner(playerPoints,computerPoints){
    if(computerPoints===5){
        winnerText.textContent='¡YOU LOSE!'
        center.appendChild(restartButton);
        disableButton();
    }
    else if(playerPoints===5){
        winnerText.textContent='¡YOU WIN!';
        center.appendChild(restartButton);
        disableButton()
    }
    else{}
}

buttonOne.addEventListener('click',()=>{
    playerSelection="ROCK";
    buttonOne.style.transform="scale(1.25)";
    buttonOne.style.backgroundColor="#0f81ec";
    console.log("You choice ROCK");
    computerSelection=getComputerChoice();
    playRound(playerSelection,computerSelection);
    setTimeout(noStyle,1500);
    setTimeout(noStyleCpu,2000);
    winner(playerPoints,computerPoints);
})

buttonTwo.addEventListener('click',()=>{
    playerSelection="PAPER";
    buttonTwo.style.transform="scale(1.25)";
    buttonTwo.style.backgroundColor="#0f81ec";
    console.log("You choice PAPER")
    computerSelection=getComputerChoice();
    playRound(playerSelection,computerSelection)
    setTimeout(noStyle,1500);
    setTimeout(noStyleCpu,2000);
    winner(playerPoints,computerPoints)
})

buttonThree.addEventListener('click',()=>{
    playerSelection="SCISSORS";
    buttonThree.style.transform="scale(1.25)";
    buttonThree.style.backgroundColor="#0f81ec";
    console.log("You choice SCISSORS");
    computerSelection=getComputerChoice();
    playRound(playerSelection,computerSelection)
    setTimeout(noStyle,1500);
    setTimeout(noStyleCpu,2000);
    winner(playerPoints,computerPoints)
})

restartButton.addEventListener('click',()=>{
    winnerText.textContent='';
    center.removeChild(restartButton);
    computerPoints=0;
    playerPoints=0;
    computerCount.textContent=computerPoints;
    playerCount.textContent=playerPoints;
    enableButton();
})
