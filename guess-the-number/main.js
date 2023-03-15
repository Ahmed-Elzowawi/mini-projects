const nums = [];

for (let index = 0; index < 101; index++) {
	nums[index] = index;
}

const form = document.getElementById("form");
const result = document.getElementById("result");
let chosenNumber = nums[Math.floor(Math.random() * nums.length)];

form.addEventListener("submit", () => {
	const userNumber = document.getElementById("input").value;
	if (chosenNumber === parseInt(userNumber)) {
		result.style.color = "green";
		result.textContent = "That is correct";
		chosenNumber = nums[Math.floor(Math.random() * nums.length)];
	} else {
		result.style.color = "red";
		result.textContent = "Wrong number please try again";
	}
});
