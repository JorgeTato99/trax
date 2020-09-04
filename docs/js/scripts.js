const showMenu = (toggleId, navId) => {
	const toggle = document.getElementById(toggleId),
		nav = document.getElementById(navId);

	if (toggle && nav) {
		toggle.addEventListener("click", () => {
			nav.classList.toggle("show");
		});
	}
};
showMenu("main-manu-toggle", "main-nav");

const showSubmenu = (submenuId) => {
	const submenu = document.getElementById(submenuId);

	if (submenu) {
		submenu.addEventListener("click", () => {
			submenu.classList.toggle("showSubmenu");
		});
	}
};
showSubmenu("main-menu-item");

window.addEventListener("scroll", function () {
	var header = document.querySelector("header");
	var nav = document.querySelector("nav");
	var submenu = document.querySelector("ul");
	header.classList.toggle("main-header-scroll", window.scrollY > 0);
	nav.classList.toggle("main-nav-scroll", window.scrollY > 0);
	submenu.classList.toggle("submenu-scroll", window.scrollY > 0);
});
