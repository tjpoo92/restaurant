function myFunction() {
	var x = document.getElementById("tab");
	if (x.className === "tab") {
		x.className += " responsive";
	} else {
		x.className = "tab";
	}
}
