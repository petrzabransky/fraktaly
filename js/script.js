window.onload = function () {
    smoothScroll();
    navMenu();
}

function navMenu() {
    const hamb = document.querySelector(".nav__hamb");
    const menu = document.querySelector(".nav__menu");
    const close = document.querySelector(".nav__close");

    hamb.addEventListener("click", function () {
        menu.style.display = "flex";
        hamb.style.display = "none";
        close.style.display = "block";
    });

    close.addEventListener("click", function () {
        menu.style.display = "none";
        hamb.style.display = "block";
        close.style.display = "none";
    });
}