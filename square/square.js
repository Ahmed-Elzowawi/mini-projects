const readline = require("readline").createInterface({
	input: process.stdin,
	output: process.stdout,
});

const printSquare = () => {
	readline.question("Enter a number: ", (userInputNumber) => {
		console.log('\n');
		let hash = '';
		for (let row = 0; row < userInputNumber; row++) {
			for (let col = 0 ; col < userInputNumber; col++) {
				hash += "#";
			}
			console.log(hash);
			hash = "";
		}
	console.log('\n');
	printSquare();
	});
};

printSquare();
