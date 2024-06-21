const navToggler = document.querySelector('.nav-toggler')
const nav = document.querySelector('#main-nav')
const links = document.querySelectorAll('.nav-link > a')
const sections = document.querySelectorAll('section')
const header = document.querySelector('header')
const footer = document.querySelector('footer')
const headerHeight = header.offsetHeight

footer.innerText = `© ${new Date().getFullYear()} PIXATECH`

// open navigation bar on mobile
function openNav() {
	navToggler.setAttribute('aria-expanded', 'true')
	navToggler.classList.add('opened')
	nav.setAttribute('data-visible', 'true')
	// prevent body from scrolling when menu is opened
	document.querySelector('html').style.overflowY = 'hidden'
}

// close navigation bar on mobile
function closeNav() {
	navToggler.setAttribute('aria-expanded', 'false')
	navToggler.classList.remove('opened')
	nav.setAttribute('data-visible', 'false')
	document.querySelector('html').style.overflowY = 'scroll'
}

// toggle navigation bar on/off state on mobile
function toggleNav() {
	const visibility = nav.getAttribute('data-visible')
	visibility === 'false' ? openNav() : closeNav()
}

// change between transparent and colored nav
window.addEventListener('scroll', () => {
	window.scrollY > 25
		? header.classList.add('colored-nav')
		: header.classList.remove('colored-nav')
})

// close menu on mobile when clicking a link
links.forEach((link) => {
	link.addEventListener('click', () => {
		const isNavOpened = nav.getAttribute('data-visible')
		isNavOpened && closeNav()
	})
})

// change active link on scroll
window.addEventListener('scroll', () => {
	sections.forEach(section => {
		const top = window.scrollY
		const offset = section.offsetTop - headerHeight
		const height = section.offsetHeight
		const id = section.getAttribute('id')

		if (top >= offset && top < offset + height) {
			links.forEach(link => {
				link.classList.remove('active')
				const activeLink = document.querySelector(`.nav-link > a[href*=${id}]`)
				activeLink && activeLink.classList.add('active')
			})
		}
	})
})

// send contact us email
function sendEmail(form) {
	console.log(form)
}
