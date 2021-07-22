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

	function createHeader(headerText) {
		const th = document.createElement("th");
		th.textContent = headerText;
		return th;
	}
	function createRow() {
		const tr = document.createElement("tr");
		return tr;
	}

	function createCell(cellText) {
		const td = document.createElement("td");
		td.textContent = cellText;
		return td;
	}

	content
		.appendChild(table)
		.appendChild(createRow())
		.appendChild(createHeader("Dairy"))
		.insertAdjacentElement("afterend", createHeader("Joe"));

	table
		.appendChild(createRow())
		.appendChild(createCell("$1 Single Scoop"))
		.insertAdjacentElement("afterend", createCell("$1 Coffee"));

	table
		.appendChild(createRow())
		.appendChild(createCell("$3 Double Scoop"))
		.insertAdjacentElement("afterend", createCell("$3 Latte"));

	table
		.appendChild(createRow())
		.appendChild(createCell("$4 Milkshake"))
		.insertAdjacentElement("afterend", createCell("$2 Iced Coffee"));

	table
		.appendChild(createRow())
		.appendChild(createCell("Ice cream flavors change monthly"))
		.insertAdjacentElement(
			"afterend",
			createCell("Vanilla, Hazelnut, and more")
		);
};

export { menuRender };
