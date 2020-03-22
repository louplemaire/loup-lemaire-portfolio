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
// See work arrow
const seeWorkArrow = document.querySelector('.js-see-work-arrow')
seeWorkArrow.addEventListener('click', () => {
    window.scrollBy(0, window.innerHeight)
})

// Block the scroll
let canScroll = true

window.addEventListener('wheel', (_event) => {
    if(canScroll){
        _event.preventDefault()

        // Accept the scroll
        setTimeout(function() {
            canScroll = true
            console.log(canScroll);
        }, 2000)

        // Scroll down
        if(_event.deltaY > 0){
            console.log('scroll down');
            window.scrollBy(0, window.innerHeight)

            // Block the scroll
            canScroll = false
        }

        // Scroll up
        if(_event.deltaY < 0){
            console.log('scroll up');
            window.scrollBy(0, - window.innerHeight)

            // Block the scroll
            canScroll = false
        }
    }
})

console.log(canScroll);