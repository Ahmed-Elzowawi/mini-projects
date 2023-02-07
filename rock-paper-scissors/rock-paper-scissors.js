const readline = require("readline").createInterface({
	input: process.stdin,
	output: process.stdout,
});
const choices = ["rock", "paper", "scissors"];
const computerChoice = () => choices[Math.floor(Math.random() * choices.length)];
const game = () => {
	readline.question("\nChoose (rock) or (paper) or (scissors): ", (playerChoice) => {
		if (!choices.includes(playerChoice)) game();
		else if (computerChoice() === playerChoice) console.log("It's a tie\n");
		else if (computerChoice() === "rock" && playerChoice === "scissors")
			console.log("Computer wins\n");
		else if (computerChoice() === "paper" && playerChoice === "rock")
			console.log("Computer wins\n");
		else console.log("You win\n");
		playAgain();
	});
};

const playAgain = () => {
	readline.question("Would you like to play again? (y/n): ", (answer) => {
		if (answer === "y") game();
		else if (answer === "n") {
			console.log("Thanks for playing!");
			readline.close();
		} else {
			console.log("\nPlease enter y for 'yes' or n for 'no'");
			playAgain();
		}
	});
};

console.log("\nWelcome to rock paper scissors!: ");
game();
