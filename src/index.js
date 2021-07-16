import { homeRender } from "./pages/home";
import { menuRender } from "./pages/menu";
import contactUsRender from "./pages/contact-us";

const home = document.querySelector(".home");
home.addEventListener("click", homeRender);

const menu = document.querySelector(".menu");
menu.addEventListener("click", menuRender);

// contactUsRender(content);
