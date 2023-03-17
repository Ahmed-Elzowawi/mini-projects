const readline = require("readline").createInterface({
	input: process.stdin,
	output: process.stdout,
});

const printTriangle = () => {
	readline.question("Enter a number: ", (userInputNumber) => {
		console.log('\n');
		let star = '*';
		let space = ' ';
		for (let row = 0; row < userInputNumber; row++) {
			for (let col = userInputNumber ; col > row; col--) {
				space += ' ';
			}
			console.log(space + star);
			star += "*";
			space = ' ';
		}
	console.log('\n');
	printTriangle();
	});
};

printTriangle();
