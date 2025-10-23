const name = prompt("Hi there!\nWhat's your name?");

let humanScore = 0;
let computerScore = 0;

function getHumanChoice() {
    return prompt(`Hi ${name}, what's your pick? (Rock, Paper, or Scissors)`);
}

function getComputerChoice() {
    const randomNum = Math.random();
    if (randomNum < 0.33) return "Rock";
    if (randomNum < 0.66) return "Paper";
    return "Scissors";
}

function playGame() {
    function playRound(humanSelection, computerSelection) {
        const p = humanSelection.trim().toLowerCase();
        const c = computerSelection.trim().toLowerCase();
        
        if (p === c) {
            return "** Draw! **";
        }
        
        const playerWins =
            (p === "rock" && c === "scissors") ||
            (p === "paper" && c === "rock") ||
            (p === "scissors" && c === "paper");
            
        if (playerWins) {
            humanScore++;
            console.log(`** You win! ${capitalize(p)} beats ${capitalize(c)}! **`);
        } else {
            computerScore++;
            console.log(`** You lose! ${capitalize(c)} beats ${capitalize(p)}! **`);
        }
    }
    
    function capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }
    
    for (let round = 1; round <= 5; round++) {
        console.log(`\nRound ${round}`);
        const human = getHumanChoice();
        const computer = getComputerChoice();
        
        console.log(`${name}: ${human}`);
        console.log(`Computer: ${computer}`);
        
        playRound(human, computer);
        
        console.log(`Score\n${name}: ${humanScore} | Computer: ${computerScore}`);
        
        alert(
            `Round ${round}\n\n` +
            `You picked: ${human}\n` +
            `Computer picked: ${computer}\n\n` +
            `Current Score:\nYou: ${humanScore}\nComputer: ${computerScore}`
        );
    }
    
    console.log(`\n\nGame Over!`);
    console.log(`Final Score:\n${name}: ${humanScore}\nComputer: ${computerScore}`);
    
    if (humanScore > computerScore) console.log(`You're the winner!`);
    else if (humanScore < computerScore) console.log(`Computer wins!`);
    else console.log(`It's a draw!`);
    
    console.log(`Thanks for playing, ${name}!`); 
}

playGame();