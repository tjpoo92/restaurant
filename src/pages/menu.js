let menuRender = function () {
	const content = document.querySelector("#content");
	const home = document.querySelector(".home");
	const menu = document.querySelector(".menu");
	const contactUs = document.querySelector(".contact-us");

	home.classList.remove("active");
	contactUs.classList.remove("active");
	menu.classList.add("active");

	while (content.hasChildNodes()) {
		content.removeChild(content.firstChild);
	}

	// DOM/Node Creation
	const table = document.createElement("table");
	const tr1 = document.createElement("tr");
	const tr2 = document.createElement("tr");
	const tr3 = document.createElement("tr");
	const tr4 = document.createElement("tr");
	const tr5 = document.createElement("tr");
	const thDairy = document.createElement("th");
	const thJoe = document.createElement("th");
	const tdDairy1 = document.createElement("td");
	const tdDairy2 = document.createElement("td");
	const tdDairy3 = document.createElement("td");
	const tdDairy4 = document.createElement("td");
	const tdJoe1 = document.createElement("td");
	const tdJoe2 = document.createElement("td");
	const tdJoe3 = document.createElement("td");
	const tdJoe4 = document.createElement("td");

	thDairy.textContent = "Dairy";
	thJoe.textContent = "Joe";
	tdDairy1.textContent = "$1 Single Scoop";
	tdDairy2.textContent = "$3 Double Scoop";
	tdDairy3.textContent = "$4 Milkshake";
	tdDairy4.textContent = "Ice cream flavors change monthly";
	tdJoe1.textContent = "$1 Coffee";
	tdJoe2.textContent = "$3 Latte";
	tdJoe3.textContent = "$2 Iced Coffee";
	tdJoe4.textContent = "Vanilla, Hazelnut, and more";

	content
		.appendChild(table)
		.appendChild(tr1)
		.appendChild(thDairy)
		.insertAdjacentElement("afterend", thJoe);

	table
		.appendChild(tr2)
		.appendChild(tdDairy1)
		.insertAdjacentElement("afterend", tdJoe1);

	table
		.appendChild(tr3)
		.appendChild(tdDairy2)
		.insertAdjacentElement("afterend", tdJoe2);

	table
		.appendChild(tr4)
		.appendChild(tdDairy3)
		.insertAdjacentElement("afterend", tdJoe3);

	table
		.appendChild(tr5)
		.appendChild(tdDairy4)
		.insertAdjacentElement("afterend", tdJoe4);
};

export { menuRender };
