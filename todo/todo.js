const appendItemList = () => {
	const form = document.getElementById("form");
	const item = document.getElementById("todo").value;
	const itemCon = document.getElementById("itemCon");

	if (!item) return;
	const p = document.createElement("p");
	p.classList.add("item");
	p.textContent = item;
	itemCon.append(p);
}
form.addEventListener("submit", appendItemList)
