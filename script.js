let computerScore = 0;
let humanScore = 0;

// get computer choice
function getComputerChoice() {
	let randomNumber = Math.random();

	if (randomNumber <= 0.33) {
		return "rock";
	} else if (randomNumber <= 0.66) {
		return "paper";
	} else {
		return "scissors";
	}
}

// get human choice
function getHumanChoice() {
	// when press esc or cancel prompt it returns null, returns empty string if user press ok without entering in input
	let input = prompt("Enter between rock/paper/scissors: ");

	if (input === null) {
		return null;
	}

	input = input.toLowerCase();
	if (input === "rock" || input === "paper" || input === "scissors") {
		return input;
	} else {
		alert("Error: Invalid input. Enter between rock/paper/scissors");

		// add return for recursive calling. read below to understand
		// When you call a function recursively, you need to ensure that each recursive call returns a value back to the original caller. Otherwise, the original function call won't get the result from the subsequent call.
		return getHumanChoice();
	}
}

//play 1 round
function playRound(humanChoice, computerChoice) {
	if (humanChoice === computerChoice) {
		alert(
			`Draw! Both choose ${humanChoice}.\nYour score: ${humanScore}.\nComputer score: ${computerScore}.`
		);
	} else if (
		(humanChoice === "rock" && computerChoice === "scissors") ||
		(humanChoice === "paper" && computerChoice === "rock") ||
		(humanChoice === "scissors" && computerChoice === "paper")
	) {
		alert(`You win! ${humanChoice} beats ${computerChoice}.\nYour score: ${++humanScore}.\nComputer score: ${computerScore}.`);
	} else {
		alert(`You lose! ${computerChoice} beats ${humanChoice}.\nYour score: ${humanScore}.\nComputer score: ${++computerScore}`);
	}
}
// playRound(getHumanChoice(), getComputerChoice());

function playGame() {
	for (let i = 1; i <= 5; i++) {
		const computerChoice = getComputerChoice();
		const humanChoice = getHumanChoice();

		// if human choice null then don't call playRound
		if (humanChoice) {
			playRound(humanChoice, computerChoice);
		} else {
			alert("Game Cancelled!");
			return;
		}
	}
}

playGame();
if (humanScore === computerScore) {
	alert(`And the winner is ...... drum rolls .......No one!`);
} else if (humanScore > computerScore) {
	alert(`And the winner is ...... drum rolls .......You!\nYou won!!`);
} else {
	alert(`And the winner is ...... drum rolls .......Computer!\nYou loose :(`);
}
