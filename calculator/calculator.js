let num1;
let num2;
let getSign;
const input = document.getElementById("input");

// Numbers
const numbersContainer = document.getElementById("sub-grid-1");
const numbers = numbersContainer.querySelectorAll("div");

numbers.forEach((number, ) => {
	number.addEventListener("click", () => {
		if (number.innerText !== "=") input.value += number.innerText;
	});
});


// Operators
const signsContainer = document.getElementById("sub-grid-2");
const signs = signsContainer.querySelectorAll("div");

signs.forEach((sign, ) => {
	sign.addEventListener("click", () => {
		num1 = input.value;
		getSign = sign.textContent;
		input.value = '';
	});
});

const add = (num1, num2) => parseFloat(num1) + parseFloat(num2);
const substract = (num1, num2) => parseFloat(num1) - parseFloat(num2);
const multiply = (num1, num2) => parseFloat(num1) * parseFloat(num2);
const divide = (num1, num2) => parseFloat(num1) / parseFloat(num2);
const result = document.getElementById("result");

document.getElementById("equal").addEventListener("click", () => {
	num2 = input.value;
	if (getSign === "+") result.textContent = `Result: ${add(num1, num2)}`;
	else if (getSign === "-") result.textContent = `Result: ${substract(num1, num2)}`;
	else if (getSign === "x") result.textContent = `Result: ${multiply(num1, num2)}`;
	else result.textContent = `Result: ${divide(num1, num2)}`;
	input.value = '';
});

// Clear input and result
document.getElementById("clear").addEventListener("click", () => {
	input.value = '';
	result.textContent = "Result: ";
});
