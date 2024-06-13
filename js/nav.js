let navToggler = document.querySelector(".nav-toggler");
let nav = document.querySelector("#main-nav");
let header = document.querySelector("header");

function openNav() {
	navToggler.setAttribute("aria-expanded", "true");
	navToggler.classList.add("opened");
	nav.setAttribute("data-visible", "true");
	// prevent body from scrolling when menu is opened
	document.querySelector("html").style.overflowY = "hidden";
}
function closeNav() {
	navToggler.setAttribute("aria-expanded", "false");
	navToggler.classList.remove("opened");
	nav.setAttribute("data-visible", "false");
	document.querySelector("html").style.overflowY = "scroll";
}
function toggleNav() {
	const visibility = nav.getAttribute("data-visible");
	visibility === "false" ? openNav() : closeNav();

}
// Change between transparent and colored nav
window.addEventListener("scroll", () => {
	window.scrollY > 25
		? header.classList.add("colored-nav")
		: header.classList.remove("colored-nav");
});
// Change active state and close nav if opened
function setActiveClass(index) {
	activeLink.value = index;
	const visibility = nav.value.getAttribute("data-visible");
	if (visibility === "true") closeNav();
}

// close menu on mobile when clicking a link

document.querySelectorAll(".nav-link > a").forEach((link) => {
	link.addEventListener("click", () => {
		const isNavOpened = nav.getAttribute("data-visible");
		isNavOpened ? closeNav() : ''
	})
})


// copywrite footer text

const footer = document.querySelector('footer');
footer.innerText = `© ${new Date().getFullYear()} PIXATECH`
