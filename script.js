let buttons = document.querySelectorAll(".btn");
let hScoreNode = document.querySelector(".h-score");
let bScoreNode = document.querySelector(".b-score");
let roundInfo = document.querySelector(".round-info");
let botScore = 0;
let humanScore = 0;

// get bot choice
function getBotChoice() {
	let randomNumber = Math.random();

	if (randomNumber <= 0.33) {
		return "rock";
	} else if (randomNumber <= 0.66) {
		return "paper";
	} else {
		return "scissors";
	}
}

//play 1 round
function playRound(humanChoice, botChoice) {
	if (humanChoice === botChoice) {
		roundInfo.innerHTML = `<p>You choose ${humanChoice}, Bot choose ${botChoice}</p>
							<p>Its a <strong>DRAW!<strong/></p>`;
	} else if (
		(humanChoice === "rock" && botChoice === "scissors") ||
		(humanChoice === "paper" && botChoice === "rock") ||
		(humanChoice === "scissors" && botChoice === "paper")
	) {
		humanScore++;
		roundInfo.innerHTML = `<p>You choose ${humanChoice}, Bot choose ${botChoice}.</p>
							<p>${humanChoice} beats ${botChoice}.</p>
							<p>You <strong>WIN!<strong/></p>`;
	} else {
		botScore++;
		roundInfo.innerHTML = `<p>You choose ${humanChoice}, Bot choose ${botChoice}</p>
							<p>${botChoice} beats ${humanChoice}.</p>
							<p>You <strong>Loose!<strong/></p>`;
	}

	hScoreNode.textContent = `Your Score: ${humanScore}`;
	bScoreNode.textContent = `Bot Score: ${botScore}`;
}

buttons.forEach((button) => {
	button.addEventListener("click", () => {
		playRound(button.id, getBotChoice());
	});
});
