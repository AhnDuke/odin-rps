const para = document.querySelector('.results');
const picks = document.querySelector('.picks');
document.querySelector('.rock').addEventListener("click", rockGame);
document.querySelector('.paper').addEventListener("click", paperGame);
document.querySelector('.scissors').addEventListener("click", scissorGame);

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

function rockGame (randomNum){
    const computerChoice = getComputerChoice(randomNum)
    console.log(computerChoice)
    const playerChoice = 'Rock'
    playRound (computerChoice, playerChoice);
    console.log(displayResult);
    picks.textContent = "You Picked " + playerChoice + "                 The Computer Picked " + computerChoice;
    para.textContent = displayResult;
}

function paperGame (randomNum){
    const computerChoice = getComputerChoice(randomNum)
    console.log(computerChoice)
    const playerChoice = 'Paper'
    playRound (computerChoice, playerChoice);
    console.log(displayResult);
    picks.textContent = "You Picked " + playerChoice + "                 The Computer Picked " + computerChoice;
    para.textContent = displayResult;
}

function scissorGame (randomNum){
    const computerChoice = getComputerChoice(randomNum)
    console.log(computerChoice)
    const playerChoice = 'Scissors'
    playRound (computerChoice, playerChoice)
    console.log(displayResult);
    picks.textContent = "You Picked " + playerChoice + "                 The Computer Picked " + computerChoice;
    para.textContent = displayResult;
}