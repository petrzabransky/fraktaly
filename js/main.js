window.onload = function() {
    smoothScroll();
    navMenu();
}

function smoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    for (let i = 0; i < links.length; i++) links[i].onclick = function() {
        const target = document.querySelector(this.attributes.href.nodeValue),
            targetY = target.offsetTop;
        var speed, dir, step, dist, screenY,
            anim = setInterval((function() {
                screenY = document.documentElement.scrollTop + document.body.scrollTop,
                    dir = screenY <= targetY ? 1 : -1,
                    dist = Math.abs(screenY - targetY),
                    (speed = dist / 10) < 1 && (speed = 1), step = dir * speed, dist < 1 ? clearInterval(anim) : scrollBy(0, step)
            }), 10);
        return !1
    }
}

function navMenu() {
    const hamb = document.querySelector(".nav__hamb");
    const menu = document.querySelector(".nav__menu");
    const close = document.querySelector(".nav__close");

    hamb.addEventListener("click", function() {
        menu.style.display = "flex";
        hamb.style.display = "none";
        close.style.display = "block";
    });

    close.addEventListener("click", function() {
        menu.style.display = "none";
        hamb.style.display = "block";
        close.style.display = "none";
    });
}