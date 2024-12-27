let humanScore = 0;
let computerScore = 0;

function getComputerChoise() {
	let randNum = Math.random();
	if (randNum < 0.33) {
		return "rock";
	} else if (randNum < 0.66) {
		return "paper";
	} else {
		return "scissor";
	}
}

function getHumanChoise() {
	let humanChoise = prompt("Enter your choice(rock/paper/scissor): ");

	if (humanChoise.toLocaleLowerCase() === "rock") {
		return "rock";
	} else if (humanChoise.toLocaleLowerCase() === "paper") {
		return "paper";
	} else if (humanChoise.toLocaleLowerCase() === "scissor") {
		return "scissor";
	} else {
		return null;
	}
}

function playRound(humanChoise, computerChoise) {
	const computerChoise = getComputerChoise();
	const humanChoise = getHumanChoise();
	console.log(`Your choice: ${humanChoise} 
                 Computer choise: ${computerChoise}`);

	if (computerChoise === humanChoise) {
		console.log("Draw! No one wins");
	} else if (computerChoise === "rock") {
		if (humanChoise === "paper") {
			console.log(`You win! Paper beats Rock`);
			humanScore++;
		} else {
			console.log(`You lose! Scissor beats Rock`);
			computerScore++;
		}
	} else if (computerChoise === "scissor") {
		if (humanChoise === "rock") {
			console.log(`You win! Rock beats scissor`);
			humanScore++;
		} else {
			console.log(`You lose! Scissor beats Paper`);
			computerScore++;
		}
	} else if (computerChoise === "paper") {
		if (humanChoise === "scissor") {
			console.log(`You win! Scissor beats paper`);
			humanScore++;
		} else {
			console.log(`You lose! Paper beats Rock`);
			computerScore++;
		}
	}
}

function playGame() {
	for (let i = 1; i <= 5; i++) {
        
    }
}
