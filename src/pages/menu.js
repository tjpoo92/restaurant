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
};

export { menuRender };
