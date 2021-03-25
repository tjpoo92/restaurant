const content = document.querySelector("#content");

let homeRender = (function () {
	//DOM/Node Creation
	const h1 = document.createElement("h1");
	const br = document.createElement("br");
	const p = document.createElement("p");
	const name = document.createTextNode("Dairy Joe's on West O!");
	const tag = document.createTextNode("Come by from some ice cream or coffee");
	const months = document.createTextNode("Open March - October");
	const sunThur = document.createTextNode("Sun - Thur 10:30 AM - 9:30 PM");
	const friSat = document.createTextNode("Fri/Sat 10:30 AM - 10:30 PM");

	content
		.appendChild(h1)
		.appendChild(name)
		.insertBefore(br, null)
		.insertAdjacentElement("afterend", p)
		.appendChild(tag)
		.insertAdjacentElement("afterend", br)
		.insertAdjacentElement("afterend", p)
		.appendChild(months)
		.insertAdjacentElement("afterend", p)
		.appendChild(sunThur)
		.insertAdjacentElement("afterend", p)
		.appendChild(friSat);
})();

export default homeRender;
