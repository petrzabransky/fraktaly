"use strict";
import { Fractal } from "./modules/Fractal.js";
import { Tree } from "./modules/Tree.js";
//
// Components
//
// Navigation menu
document.querySelector(".nav__hamburger").addEventListener("click", function () {
    var menu = document.querySelector(".nav__menu");
    var hamburger = document.querySelector(".nav__hamburger");
    if (menu.classList.contains("nav__menu--active")) {
        menu.classList.remove("nav__menu--active");
        hamburger.setAttribute("src", "./img/ikony/hamburger.svg");
    }
    else {
        menu.classList.add("nav__menu--active");
        hamburger.setAttribute("src", "./img/ikony/zavrit.svg");
    }
});
//
// Start app
//
new Fractal("spiral");
new Tree("tree");
