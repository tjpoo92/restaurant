let homeRender = function () {
	const content = document.querySelector("#content");
	const home = document.querySelector(".home");
	const menu = document.querySelector(".menu");
	const contactUs = document.querySelector(".contact-us");

	home.classList.remove("active");
	contactUs.classList.remove("active");
	menu.classList.remove("active");

	while (content.hasChildNodes()) {
		content.removeChild(content.firstChild);
	}

	// DOM/Node Creation
	const h1 = document.createElement("h1");
	const br = document.createElement("br");
	h1.textContent = "Dairy Joe's on West O!";

	function createHomeTags(tagString) {
		const createdElement = document.createElement("p");
		createdElement.textContent = tagString;
		return createdElement;
	}

	content.appendChild(h1).insertAdjacentElement("afterend", br);

	br.insertAdjacentElement(
		"afterend",
		createHomeTags("Tues - Sun 10:30 AM - 9:30 PM")
	);
	br.insertAdjacentElement("afterend", createHomeTags("Open March - October"));
	br.insertAdjacentElement(
		"afterend",
		createHomeTags("Come by for some ice cream and coffee")
	);
};

export { homeRender };
