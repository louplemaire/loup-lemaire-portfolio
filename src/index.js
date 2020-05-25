/**
 * Imports
 */
// Stylus
import './style/main.styl'

// Three.js home
import * as THREE from 'three'
import particleImageSource from './assets/particle/bubble.png'

/**
 * Images
 */
// Savoir
import savoirImage from './assets/images/savoir.png'

const savoirImageContainer = document.querySelector('.js-savoir-image')
const $savoirImage = new Image()
$savoirImage.src = savoirImage
savoirImageContainer.appendChild($savoirImage)
$savoirImage.setAttribute('alt', 'SAVOIR image')

// Ode Brew Grinder
import odeBrewGrinderImage from './assets/images/ode-brew-grinder.png'

const odeBrewGrinderImageContainer = document.querySelector('.js-ode-brew-grinder-image')
const $odeBrewGrinderImage = new Image()
$odeBrewGrinderImage.src = odeBrewGrinderImage
odeBrewGrinderImageContainer.appendChild($odeBrewGrinderImage)
$odeBrewGrinderImage.setAttribute('alt', 'Ode Brew Grinder image')

// EO Securite
import eoSecuriteImage from './assets/images/eo-securite.png'

const eoSecuriteImageContainer = document.querySelector('.js-eo-securite-image')
const $eoSecuriteImage = new Image()
$eoSecuriteImage.src = eoSecuriteImage
eoSecuriteImageContainer.appendChild($eoSecuriteImage)
$eoSecuriteImage.setAttribute('alt', 'EO Sécurité image')

// Boveroux
import boverouxImage from './assets/images/boveroux.png'

const boverouxImageContainer = document.querySelector('.js-boveroux-image')
const $boverouxImage = new Image()
$boverouxImage.src = boverouxImage
boverouxImageContainer.appendChild($boverouxImage)
$boverouxImage.setAttribute('alt', 'Boveroux & Fils image')

// Loup
import loupImage from './assets/images/loup-lemaire.jpg'

const loupImageContainer = document.querySelector('.js-loup-image')
const $loupImage = new Image()
$loupImage.src = loupImage
loupImageContainer.appendChild($loupImage)
$loupImage.setAttribute('alt', 'Loup Lemaire image')

/**
 * Set the innerHeight
 */
const vh = window.innerHeight * 0.01

document.documentElement.style.setProperty('--vh', `${vh}px`)

/**
 * Home title animation
 */
const letters = document.querySelectorAll('.home-title span')

letters.forEach(_letter => {
    const delay = Math.random() / 2

    _letter.style.animationDelay = `${delay}s`
})

/**
 * Functions
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

// Scroll down
const scrollDown = () => {
    // Transition opacity
    scrollTransition()

    setTimeout(function() {
        window.scrollBy(0, window.innerHeight)
    }, 400)

    // Block the scroll
    canScroll = false
}

// Scroll up
const scrollUp = () => {
    // Transition opacity
    scrollTransition()

    setTimeout(function() {
        window.scrollBy(0, - window.innerHeight)
    }, 400)

    // Block the scroll
    canScroll = false
}

/**
 * Scroll
 */
// Accept the scroll
let canScroll = true

// Number of projects
const projectsNumber = 4

// Desktop
window.addEventListener('wheel', (_event) => {
    _event.preventDefault()

    if(canScroll){
        // Accept the scroll
        setTimeout(function() {
            canScroll = true
        }, 2000)

        // Scroll down
        if(_event.deltaY > 0 && window.scrollY != window.innerHeight * projectsNumber){
            scrollDown()
        }

        // Scroll up
        if(_event.deltaY < 0 && window.scrollY != 0){
            scrollUp()
        }
    }
})

// Scroll down buttons
const scrollButtons = document.querySelectorAll('.js-scroll-button')

scrollButtons.forEach(_scrollButton => {
    _scrollButton.addEventListener('click', () => {
        if(canScroll){
            // Accept the scroll
            setTimeout(function() {
                canScroll = true
            }, 2000)

            scrollDown()
        }
    })
})

// Scroll arrows keys and close about with esc key
window.addEventListener('keydown', (_event) => {
    if(canScroll){
        // Accept the scroll
        setTimeout(function() {
            canScroll = true
        }, 2000)

        // Scroll down with arrow down
        if(_event.keyCode == 40 && window.scrollY != window.innerHeight * projectsNumber){
            scrollDown()
        }

        // Scroll up with arrow up
        if(_event.keyCode == 38 && window.scrollY != 0){
            scrollUp()
        }
    }

    // Close about with esc key
    if(_event.keyCode == 27){
        aboutPage.style.opacity = 0

        // Start display 400ms after the opacity to close the aboutPage after the 0.4s transition
        setTimeout(function() {
            aboutPage.classList.add('is-visible')
        }, 400)
    }
})

// Scroll mobile
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
        if(offset < -50 && window.scrollY != window.innerHeight * projectsNumber){
            scrollDown()
        }

        // Scroll up
        if(offset > 50 && window.scrollY != 0){
            scrollUp()
        }

        // Reset the touch
        touchStartY = null
        touchEndY = null
    }
})

/**
 * About open and close
 */
// Open
const aboutOpenButtons = document.querySelectorAll('.js-about-open-button')
const aboutPage = document.querySelector('.js-about')

aboutOpenButtons.forEach(_aboutOpenButton => {
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
const logos = document.querySelectorAll('.js-logo')

logos.forEach(_logo => {
    _logo.addEventListener('click', () => {
        // Transition opacity
        scrollTransition()

        // Reload the site
        setTimeout(function() {
            window.scrollTo(0, 0)
            window.location.reload(true)
        }, 380)
    })
})

/**
 * Sizes for canvas cursor and three.js home
 */
const sizes = {}
sizes.width = window.innerWidth
sizes.height = window.innerHeight

/**
 * Canvas cursor
 */
const $canvas = document.querySelector('.js-canvas-cursor')
const context = $canvas.getContext('2d')

// Cursor
const cursor = {}
cursor.x = 0
cursor.y = 0

window.addEventListener('mousemove', (_event) => {
    cursor.x = _event.clientX
    cursor.y = _event.clientY
})

// Ball
const ball = {}
ball.x = 200
ball.y = 200
ball.radius = 18

// Hover animation
window.addEventListener('mouseover', (_event) => {
    if(_event.target.classList.contains('js-canvas-hover')){
        ball.radius = 30
    } else{
        ball.radius = 18
    }
})

// Resize
const canvasCursorResize = () => {
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    $canvas.width = sizes.width
    $canvas.height = sizes.height
}

window.addEventListener('resize', canvasCursorResize)
canvasCursorResize()

/**
 * Three.js home
 */
// Scene
const scene = new THREE.Scene()

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.z = 8
scene.add(camera)

// Geometry
const particlesGeometry = new THREE.Geometry()

for(let i = 0; i < 500; i++){
    // Vertice
    const vertice = new THREE.Vector3(
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10
    )
    particlesGeometry.vertices.push(vertice)
}

// Material
const textureLoader = new THREE.TextureLoader()
const particleTexture = textureLoader.load(particleImageSource)

const particlesMaterial = new THREE.PointsMaterial({
    size: 0.2,
    sizeAttenuation: true,
    alphaMap: particleTexture,
    transparent: true,
    color: new THREE.Color(0XFAF8F8),
    blending: THREE.AdditiveBlending,
    depthWrite: false
})

// Particles
const particles = new THREE.Points(particlesGeometry, particlesMaterial)
scene.add(particles)

// Renderer
const home = document.querySelector('.js-home')
const renderer = new THREE.WebGLRenderer({ alpha: true })
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(window.devicePixelRatio)
renderer.setClearAlpha(0)
renderer.domElement.classList.add('three-js-home')
home.appendChild(renderer.domElement)

// Resize
window.addEventListener('resize', () => {
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    renderer.setSize(sizes.width, sizes.height)
})

/**
 * Loop
 */
const loop = () => {
    window.requestAnimationFrame(loop)

    /**
     * Canvas cursor
     */
    // Update position
    ball.x += (cursor.x - ball.x) * 0.1
    ball.y += (cursor.y - ball.y) * 0.1

    // Erase the canvas
    context.clearRect(0, 0, $canvas.width, $canvas.height)

    // Drawing
    context.beginPath()
    context.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2)
    context.globalAlpha = 1
    context.strokeStyle = '#E40404'
    context.stroke()

    /**
     * Three.js home
     */
    // Particles
    particles.rotation.y += 0.003
    particles.rotation.z += 0.002

    // Camera
    camera.lookAt(scene.position)

    // Render
    renderer.render(scene, camera)
}

loop()