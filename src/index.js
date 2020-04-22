/**
 * Imports
 */
// Stylus
import './style/main.styl'

/**
 * Images
 */
// Savoir
import savoirImage from './images/savoir.png'

const savoirImageContainer = document.querySelector('.js-savoir-image')
const $savoirImage = new Image()
$savoirImage.src = savoirImage
savoirImageContainer.appendChild($savoirImage)
$savoirImage.setAttribute('alt', 'SAVOIR image')

// Ode Brew Grinder
import odeBrewGrinderImage from './images/ode-brew-grinder.png'

const odeBrewGrinderImageContainer = document.querySelector('.js-ode-brew-grinder-image')
const $odeBrewGrinderImage = new Image()
$odeBrewGrinderImage.src = odeBrewGrinderImage
odeBrewGrinderImageContainer.appendChild($odeBrewGrinderImage)
$odeBrewGrinderImage.setAttribute('alt', 'Ode Brew Grinder image')

// EO Securite
import eoSecuriteImage from './images/eo-securite.png'

const eoSecuriteImageContainer = document.querySelector('.js-eo-securite-image')
const $eoSecuriteImage = new Image()
$eoSecuriteImage.src = eoSecuriteImage
eoSecuriteImageContainer.appendChild($eoSecuriteImage)
$eoSecuriteImage.setAttribute('alt', 'EO Sécurité image')

// Boveroux
import boverouxImage from './images/boveroux.png'

const boverouxImageContainer = document.querySelector('.js-boveroux-image')
const $boverouxImage = new Image()
$boverouxImage.src = boverouxImage
boverouxImageContainer.appendChild($boverouxImage)
$boverouxImage.setAttribute('alt', 'Boveroux & Fils image')

// Loup
import loupImage from './images/loup-lemaire.jpg'

const loupImageContainer = document.querySelector('.js-loup-image')
const $loupImage = new Image()
$loupImage.src = loupImage
loupImageContainer.appendChild($loupImage)
$loupImage.setAttribute('alt', 'Loup Lemaire image')

/**
 * Scroll
 */
// Transition opacity
const scrollTransition = () => {
    const scrollTransitions = document.querySelectorAll('.js-scroll-transition')

    scrollTransitions.forEach(_scrollTransition => {
        _scrollTransition.style.opacity = 0

        setTimeout(function() {
            _scrollTransition.style.opacity = 1
        }, 400)
    })
}

// See work arrow
const seeWorkArrow = document.querySelector('.js-see-work-arrow')
seeWorkArrow.addEventListener('click', () => {
    // Transition opacity
    scrollTransition()

    setTimeout(function() {
        window.scrollBy(0, window.innerHeight)
    }, 400)
})

// Block the scroll
let canScroll = true

// Desktop
window.addEventListener('wheel', (_event) => {
    _event.preventDefault()

    if(canScroll){
        // Accept the scroll
        setTimeout(function() {
            canScroll = true
        }, 2000)

        // Scroll down
        if(_event.deltaY > 0){
            // Transition opacity
            scrollTransition()

            setTimeout(function() {
                window.scrollBy(0, window.innerHeight)
            }, 400)

            // Block the scroll
            canScroll = false
        }

        // Scroll up
        if(_event.deltaY < 0){
            // Transition opacity
            scrollTransition()

            setTimeout(function() {
                window.scrollBy(0, - window.innerHeight)
            }, 400)

            // Block the scroll
            canScroll = false
        }
    }
})

// Mobile
let touchStartY = null
let touchEndY = null

window.addEventListener('touchstart', (_event) => {
    _event.preventDefault()

    touchStartY = _event.touches[0].pageY
})

window.addEventListener('touchend', (_event) => {
    // Don't execute if touchStartY is null
    if(touchStartY === null){
        return
    }

    if(canScroll){
        // Accept the scroll
        setTimeout(function() {
            canScroll = true
        }, 2000)

        touchEndY = _event.changedTouches[0].pageY

        // Determined the scroll down or up
        const offset = touchEndY - touchStartY

        // Scroll down
        if(offset < -50){
            // Transition opacity
            scrollTransition()

            setTimeout(function() {
                window.scrollBy(0, window.innerHeight)
            }, 400)

            // Block the scroll
            canScroll = false
        }

        // Scroll up
        if(offset > 50){
            // Transition opacity
            scrollTransition()

            setTimeout(function() {
                window.scrollBy(0, - window.innerHeight)
            }, 400)

            // Block the scroll
            canScroll = false
        }

        // Reset
        touchStartY = null
        touchEndY = null
    }
})

/**
 * Open and close the about
 */
// Open
const aboutOpenButtons = document.querySelectorAll('.js-about-open-button')
const aboutPage = document.querySelector('.js-about')

aboutOpenButtons.forEach(_aboutOpenButton => {
    // Open
    _aboutOpenButton.addEventListener('click', () => {
        aboutPage.classList.remove('is-visible')
        
        // Start opacity 1ms after the display to have the opacity transition
        setTimeout(function() {
            aboutPage.style.opacity = 1
        }, 1)
    })
})

// Close
const aboutCloseButton = document.querySelector('.js-about-close-button')

aboutCloseButton.addEventListener('click', () => {
    aboutPage.style.opacity = 0

    // Start display 400ms after the opacity to close the aboutPage after the 0.4s transition
    setTimeout(function() {
        aboutPage.classList.add('is-visible')
    }, 400)
})

/**
 * Logo button
 */
const home = document.querySelector('.js-home')
const logos = document.querySelectorAll('.js-logo')

logos.forEach(_logo => {
    _logo.addEventListener('click', () => {
        home.style.opacity = 0

        // Reload the site
        window.location.reload()
    })
})