let contactUsRender = function () {
	const content = document.querySelector("#content");
	const home = document.querySelector(".home");
	const menu = document.querySelector(".menu");
	const contactUs = document.querySelector(".contact-us");

	home.classList.remove("active");
	menu.classList.remove("active");
	contactUs.classList.add("active");

	while (content.hasChildNodes()) {
		content.removeChild(content.firstChild);
	}

	// DOM/Node Creation
	const h3 = document.createElement("h3");
	const br = document.createElement("br");
	const pName1 = document.createElement("p");
	const pPhone1 = document.createElement("p");
	const pDayTime = document.createElement("p");
	h3.textContent = "Manager";
	pName1.textContent = "John Doe";
	pPhone1.textContent = "555-123-4567";
	pDayTime.textContent = "Tues - Sun 10:30 AM - 9:30 PM";
	content
		.appendChild(h3)
		.insertAdjacentElement("afterend", br)
		.insertAdjacentElement("afterend", pName1)
		.insertAdjacentElement("afterend", pPhone1);
};

export { contactUsRender };
