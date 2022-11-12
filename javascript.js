const para = document.querySelector('.results');
const picks = document.querySelector('.picks');
const wCounter = document.querySelector('.winCounter');
const lCounter = document.querySelector('.lossCounter');
let winCounter = 0;
let lossCounter = 0;
document.querySelector('.rock').addEventListener("click", rockGame);
document.querySelector('.paper').addEventListener("click", paperGame);
document.querySelector('.scissors').addEventListener("click", scissorGame);
document.querySelector('.reset').addEventListener("click", resetButton);

function getComputerChoice (){
const randomNum = Math.random();
    if (randomNum < 1/3){
        return computerChoice = 'Rock'
    }
    else if (randomNum > 2/3){
        return computerChoice = 'Scissors'
    }
    else 
        return(computerChoice = 'Paper')
}

function playRound (computerChoice, playerChoice){
    if (computerChoice === playerChoice)
    return displayResult = "It's a Tie!"
    else if (computerChoice === 'Rock' && playerChoice === 'Paper')
    return displayResult = "You Win!"
    else if (computerChoice === 'Paper' && playerChoice === 'Scissors')
    return displayResult = "You Win!"
    else if (computerChoice === 'Scissors' && playerChoice === 'Rock')
    return displayResult = "You Win!"
    else (displayResult = "You Lose!")
}

function rockGame (randomNum, winCounter, lossCounter){
    const computerChoice = getComputerChoice(randomNum)
    console.log(computerChoice)
    const playerChoice = 'Rock'
    playRound (computerChoice, playerChoice);
    console.log(displayResult);
    picks.textContent = "You Picked " + playerChoice + " The Computer Picked " + computerChoice;
    para.textContent = displayResult;
    counter(displayResult);
}

function paperGame (randomNum, winCounter, lossCounter){
    const computerChoice = getComputerChoice(randomNum)
    console.log(computerChoice)
    const playerChoice = 'Paper'
    playRound (computerChoice, playerChoice);
    console.log(displayResult);
    picks.textContent = "You Picked " + playerChoice + " The Computer Picked " + computerChoice;
    para.textContent = displayResult;
    counter(displayResult);
}

function scissorGame (randomNum, winCounter, lossCounter){
    const computerChoice = getComputerChoice(randomNum)
    console.log(computerChoice)
    const playerChoice = 'Scissors'
    playRound (computerChoice, playerChoice)
    console.log(displayResult);
    picks.textContent = "You Picked " + playerChoice + " The Computer Picked " + computerChoice;
    para.textContent = displayResult;
    counter(displayResult);
}

function counter (displayResult){
    if (displayResult === "You Win!" && winCounter<5)
    winCounter ++;
    else if (displayResult === "You Lose!" && lossCounter<5)
    lossCounter ++;
    else;
    console.log (winCounter, lossCounter);
    gameOver(winCounter, lossCounter);
    wCounter.textContent = winCounter;
    lCounter.textContent = lossCounter;
}

function gameOver (winCounter, lossCounter){
    if (winCounter == 5)
    window.alert("You Beat the Computer!"),
    resetGame ()
    else if (lossCounter == 5)
    window.alert("You Lost to the Computer!")
    resetGame ()
 }
 function resetButton(){
    winCounter = 0,
    lossCounter = 0
    console.log ("bruh2", winCounter, lossCounter)
    wCounter.textContent = winCounter
    lCounter.textContent = lossCounter
 }

 function resetGame (){
    if(winCounter == 5 || lossCounter == 5)
    winCounter = 0,
    lossCounter = 0
    console.log ("bruh", winCounter, lossCounter)
 }