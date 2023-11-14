
const menuToggleBtn = document.querySelector('.primary-nav-container button');
const navMenu = document.querySelector('.primary-nav ul');

const main = document.querySelector('main')
const footer = document.querySelector('footer .main-footer')

if (navMenu != null && navMenu instanceof HTMLUListElement) {
    const navMenuOptions = navMenu.querySelectorAll('a');
    navMenuOptions.forEach(option => {
        option.addEventListener('click', function() {
            if (isMobile()) toggleMenu();
        })
    })
}

if (menuToggleBtn != null && menuToggleBtn instanceof HTMLButtonElement) {
    menuToggleBtn.addEventListener('click', function() {
        console.log('menutoggle')
        if (isMobile()) {
            toggleMenu();
        }
    })
}

if (main != null) {
    main.addEventListener('click', () => {
        if (isVisible()) toggleMenu()
    })
}

if (footer!= null) {
    footer.addEventListener('click', () => {
        if (isVisible()) toggleMenu()
    })
}

if (isMobile()) {
    let start = 0
    let end = 0

    window.addEventListener('touchstart', (event) => {
        start = event.touches[0].clientX
    })
    window.addEventListener('touchmove', (event) => {
        if (!isVisible()) return
        end = event.touches[0].clientX

        if (end-start > 40) toggleMenu()
    })
}

function toggleMenu() {
    if (!isMobile) return
    if (menuToggleBtn == null) return
    if (navMenu == null) return

    if(!isVisible()) {
        navMenu.setAttribute('data-visible', 'true')
        menuToggleBtn.setAttribute('aria-expanded', 'true')
    }
    else {
        navMenu.setAttribute('data-visible', 'false')
        menuToggleBtn.setAttribute('aria-expanded', 'false')
    }
}
    
function isVisible() {
    if (navMenu == null) return false
    const visible = navMenu.getAttribute('data-visible')
    if (visible === 'true') return true
    return false
}

function isMobile() {
    const mobileSize = '992px'
    const mediaQuery = window.matchMedia('(max-width: ' + mobileSize + ')')
    if (mediaQuery.matches) return true
    return false
    
}
    

   

    
	
	