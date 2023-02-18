const appendItemList = () => {
	const item = document.getElementById("todo").value;
	const itemCon = document.getElementById("itemCon");

	if (!item) return;
	const p = document.createElement("p");
	p.classList.add("item");
	p.textContent = item;

	const btn = document.createElement("p");
	btn.classList.add("btn");
	btn.setAttribute("id", "btn");
	btn.addEventListener("click", removeItem);

	p.append(btn);
	itemCon.append(p);
}

function removeItem () {
	this.parentElement.remove();
};

form.addEventListener("submit", appendItemList);
