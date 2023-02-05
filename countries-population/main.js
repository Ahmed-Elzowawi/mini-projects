const fetchCountry = async () => {
	const enteredCountry = document.getElementById("country").value;
	const options = {
		method: "GET",
		headers: {
			"X-RapidAPI-Key": "9efe90ddfdmshac27a2d56d6e250p1c23c6jsn5be49353c548",
			"X-RapidAPI-Host": "rest-country-api.p.rapidapi.com",
		},
	};
	let response = null;
	try {
		response = await fetch(
			`https://rest-country-api.p.rapidapi.com/${enteredCountry}`,
			options,
		);
		if (!response.ok) throw "error";
		const fetchedCountry = await response.json();
		return fetchedCountry;
	} catch (e) {
		if (e === "error") return "error";
		else return "server error;";
	}
};

const fetchAndAppendPopulation = async () => {
	const paragraph = document.getElementById("population");
	const loader = document.getElementById("loader");

	paragraph.textContent = "";
	loader.classList.add("loader");
	const country = await fetchCountry();
	loader.classList.remove("loader");

	if (country === "error") {
		paragraph.textContent =
			"Please enter an existing country or check the spelling of the country you have entered";
	} else if (country === "resver error") {
		paragraph.textContent =
			"An occured on our side. Please resubmit the country again";
	} else {
		paragraph.textContent =
			"Population: " + country["population"].toLocaleString("en-US");
	}
};

const btn = document.getElementById("btn");
btn.addEventListener("click", fetchAndAppendPopulation);
