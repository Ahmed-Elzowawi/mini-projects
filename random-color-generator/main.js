const btn = document.getElementById("btn");
const getRandomColor = () => Math.floor(Math.random() * 255);
const changeColor = () => {
	const r = getRandomColor()
	const g = getRandomColor()
	const b = getRandomColor()
	btn.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}
btn.addEventListener("click", changeColor);
