const tensElement = document.getElementById("tens");
const secElement = document.getElementById("sec");
const minElement = document.getElementById("min");
const btnStart = document.getElementById("start");
const btnPause = document.getElementById("pause");
const btnReset = document.getElementById("reset");

let tens = 0;
let sec = 0;
let min = 0;
let interval;

const startTimer = () => {
	clearInterval(interval);
	interval = setInterval(() => {
		++tens;
		if(tens === 60) {
			tens = 0;
			++sec;
			secElement.textContent = sec < 10 ? '0' + sec : sec + '';
		}
		tensElement.textContent = tens < 10 ? '0' + tens : tens;

		if(sec === 60) {
			sec = 0;
			++min;
			minElement.textContent = min < 10 ? '0' + min : min + '';
		}
	}, 10);
};

const pauseTimer = () => {
	clearInterval(interval);
};

const resetTimer = () => {
	clearInterval(interval);
	tens = "00";
	sec = "00";
	min = "00";
	tensElement.textContent = tens;
	secElement.textContent = sec;
};

btnStart.addEventListener("click", startTimer);
btnPause.addEventListener("click", pauseTimer);
btnReset.addEventListener("click", resetTimer);
