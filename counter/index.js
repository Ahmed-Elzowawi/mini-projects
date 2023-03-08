const up = document.getElementById("up");
const down = document.getElementById("down");
const count = document.getElementById("count");
let currentCount = 0;

up.addEventListener("click", () => {
	++currentCount;
	count.textContent = currentCount;
});

down.addEventListener("click", () => {
	--currentCount;
	count.textContent = currentCount;
});
