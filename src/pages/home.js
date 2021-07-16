let homeRender = (function () {
	const content = document.querySelector("#content");

	// while (content.hasChildNodes()) {
	// 	content.removeChild(content.firstChild);
	// }

	//DOM/Node Creation
	const h1 = document.createElement("h1");
	const br = document.createElement("br");
	const pTag = document.createElement("p");
	const pMonths = document.createElement("p");
	const pDayTime = document.createElement("p");

	h1.textContent = "Dairy Joe's on West O!";
	pTag.textContent = "Come by for some ice cream and coffee";
	pMonths.textContent = "Open March - October";
	pDayTime.textContent = "Tues - Sun 10:30 AM - 9:30 PM";

	content
		.appendChild(h1)
		.insertAdjacentElement("afterend", br)
		.insertAdjacentElement("afterend", pTag)
		.insertAdjacentElement("afterend", br)
		.insertAdjacentElement("afterend", pMonths)
		.insertAdjacentElement("afterend", pDayTime);
})();

export { homeRender };
