let star = '*';
let space = ' ';
for (let row = 0; row < 10; row++) {
	for (let col = 10 ; col > row; col--) {
		space += ' ';
	}
	console.log(space + star);
	star += "*";
	space = ' ';
}
