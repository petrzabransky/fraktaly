// Components

// Navigation menu
document.querySelector(".nav__hamburger").addEventListener("click", () => {
    const menu = document.querySelector(".nav__menu");
    const hamburger = document.querySelector(".nav__hamburger");

    if (menu.classList.contains("nav__menu--active")) {
        menu.classList.remove("nav__menu--active");
        hamburger.src = "./img/ikony/hamburger.svg";
    } else {
        menu.classList.add("nav__menu--active");
        hamburger.src = "./img/ikony/zavrit.svg";
    }
});

// App
new Fractal("spiral");
new Tree("tree");
