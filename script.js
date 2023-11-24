// Rock Paper scissors

// get computer choice
//1.  give each rock, paper, and scissors a number from 1 to 3
//2. generate random number 1-3
//3. convert number 1-3 to one of rock, paper, or scissors according to step 1
//4, return which rock, paper, or scissors according to the conversion of step 3.

function getComputerChoice() {
    //Pair Rock to number 1, Paper to number 2, Scissor to number 3

    //Computer choice is either 1, 2, or 3
    let computerChoice = Math.floor(Math.random()*3) + 1;

    switch(computerChoice) {
        case 1:
            return "rock";
        case 2:
            return "paper"
        case 3:
            return "scissors"
    }
}

//player selection
// 1. define variable to accept user choice
// 2. ask user choice through prompt
// 3. get the user choice to lower case
// 4. validate the user choice
// 5. ask again until validation is met or user cancelled
// 6. return user choice

function getPlayerChoice() {
    const choiceList = ["rock", "paper", "scissors"];

    let userChoice = "";

    while (!choiceList.includes(userChoice)) {
        userChoice = prompt("Choose, by typing 'rock', 'paper', or 'scissors' (without single quotes)");  
        
        if (userChoice === null || userChoice === "") {
            userChoice = 'paper'
            alert("We chose paper for you.")
        }

        userChoice = userChoice.trim();
        userChoice = userChoice.toLowerCase();  
    }

    return userChoice;
}

//single round
// 1. compare computer selection and player selection
// 2. determine if player win or loose
// 3. return the string according to step 2

function playSingleRound(playerSelection, computerSelection) {
        
    let gameStatus = "draw";

    if (playerSelection !== computerSelection) {
        switch(playerSelection) {
            case 'rock':
                gameStatus = computerSelection==="scissors" ? "win" : "lose";
                break;
            case 'paper':
                gameStatus = computerSelection==="rock" ? "win" : "lose";
                break;
            case 'scissors':
                gameStatus = computerSelection==="paper" ? "win" : "lose";
        }
    }

    switch(gameStatus) {
        case "win":
            return `You win! Your ${playerSelection} beats ${computerSelection}.`;
        case "lose":
            return `You lose! Your ${playerSelection} is defeated by ${computerSelection}.`
        case "draw":
            return `It's a draw. You both choose ${playerSelection}.`
    }
}


let gameCounter = 0;
let win = 0;
let draw = 0;

let endResult = ""

const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');

const gameDisplay = document.querySelector(".game-display");
const resultDisplay = document.querySelector(".result-display");
const endDisplay = document.querySelector(".end-display");

gameDisplay.textContent = `Number of game: ${gameCounter}`;


rock.addEventListener('click', clickToPlay);
paper.addEventListener('click', clickToPlay);
scissors.addEventListener('click', clickToPlay);

function clickToPlay(event) {
    result = playSingleRound(event.target.value, getComputerChoice());
    gameCounter++;
    gameDisplay.textContent = `Number of game: ${gameCounter}`;
    resultDisplay.textContent = result;

    if(result.includes("win")) {
        win++;
    } else if(result.includes("draw")) {
        draw++
    }
    endDisplay.textContent = `win: ${win}, draw: ${draw}, lose: ${gameCounter - win - draw}`;

    if(gameCounter>=5) {
        if(win > gameCounter - win - draw) {
            endResult = "You win the game."
        } else if(win === gameCounter - win - draw) {
            endResult =  "The game is a draw."
        } else {
            endResult =  "You lose the game."
        }

        alert(`${endResult}\nYou have ${win} win, ${draw} draw, and ${gameCounter - win - draw} lose.`) ;

        gameCounter = 0;
        win = 0;
        draw = 0;
        gameDisplay.textContent = `Number of game: ${gameCounter}`;
        resultDisplay.textContent = "";
        endDisplay.textContent = "";
    }
}



















// play game
// play 5 game, keep score, and determine the winnor


//1. initialize score
//2. play game 
//3. update score
//4. do step 2 and 3 5 times
//5 find the winner or loser
//6. tell the user who is the winner

function playGame() {
    let games = 5;
    let win = 0;
    let draw = 0;
    let result = ""


    for(let i = 1; i <= 5; i++) {
        console.log(`game: ${i}`)

        let playerSelection = getPlayerChoice();
        let computerSelection = getComputerChoice();
        result = playSingleRound(playerSelection, computerSelection);

        console.log(`${result}`)

        if(result.includes("win")) {
            win++;
        } else if(result.includes("draw")) {
            draw++
        }
        console.log(`win: ${win}`);
        console.log(`draw: ${draw}`)
        console.log(`lose: ${i - win - draw}`);
    }
    
    if(win > games - win - draw) {
        result = "You win the game."
    } else if(win === games - win - draw) {
        result =  "The game is a draw."
    } else {
        result =  "You lose the game."
    }

    console.log(`${result}\nYou have ${win} win, ${draw} draw, and ${games - win - draw} lose.`) ;
}