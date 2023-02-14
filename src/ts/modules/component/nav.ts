export const nav = () => {
	const menu: Element = document.querySelector(".nav__menu");
	const hamburger: Element = document.querySelector(".nav__hamburger");
	const close: Element = document.querySelector(".nav__close");

	hamburger.addEventListener("click", () => {
		menu.classList.add("nav__menu--active");
		hamburger.classList.add("d-none");
		close.classList.remove("d-none");
	});

	close.addEventListener("click", () => {
		menu.classList.remove("nav__menu--active");
		close.classList.add("d-none");
		hamburger.classList.remove("d-none");
	});
}