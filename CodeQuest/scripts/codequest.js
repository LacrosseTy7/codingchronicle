// makes canvas
const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

// sets width and height
canvas.width = 1024
canvas.height = 576

// this creates the collisions and groups them
const collisionsMap = []
for (let i = 0; i < collisions.length; i += 70) {
    collisionsMap.push(collisions.slice(i, i + 70))
}

class Boundary {
    constructor({position}) {
        this.position = position
        this.width = 48
        this.height = 48
    }

    draw() {
        c.fillRect(this.position.x, this.position.y, this.position.width, this.height)
    }
}

// builds backdround
const image = new Image()
image.src = './images/map.png'

// builds player
const playerImage = new Image()
playerImage.src = './images/playerDown.png'

// when sprite is used you can draw easier
class Sprite {
    constructor({
        position,
        velocity,
        image
    }) {
        this.position = position
        this.image = image
    }

    draw() {
        c.drawImage(this.image, this.position.x, this.position.y)
    }
}

// this makes a background that's moveable
const background = new Sprite({
    position: {
        x: -1074,
        y: -450
    },
    image: image
})

// this makes an object for all the keys
const keys = {
    w: {
        pressed: false
    },
    a: {
        pressed: false
    },
    s: {
        pressed: false
    },
    d: {
        pressed: false
    }
}

// this does a lot, it runs an animation loop
function animate() {
    // this line makes it an infinite loop
    window.requestAnimationFrame(animate)

    // this line uses the sprite to make the background
    background.draw()

    // this makes the player centered and draws it
    c.drawImage(
    playerImage, 
    0,
    0,
    playerImage.width / 4,
    playerImage.height,
    canvas.width / 2 - (playerImage.width / 4) / 2, 
    canvas.height / 2 - playerImage.height / 2,
    playerImage.width / 4,
    playerImage.height
    )

    // this sees if a letter has been pressed and it was the last one pressed and executes what to do depending on the letter
    if (keys.w.pressed && lastKey === 'w') {
        background.position.y += 3
    } else if (keys.s.pressed && lastKey === 's') {
        background.position.y -= 3
    } else if (keys.a.pressed && lastKey === 'a') {
        background.position.x += 3
    } else if (keys.d.pressed && lastKey === 'd') {
        background.position.x -= 3
    }
}

// this starts the animation loop
animate()

// this makes a variable for know which letter was last
let lastKey = ''

// this uses the object to change if the keys are pressed or not
window.addEventListener('keydown', (e) => {
    switch (e.key) {
        case 'w':
            keys.w.pressed = true
            lastKey = 'w'
            break
        
        case 'a':
            keys.a.pressed = true
            lastKey = 'a'
            break
        
        case 's':
            keys.s.pressed = true
            lastKey = 's'
            break

        case 'd':
            keys.d.pressed = true
            lastKey = 'd'
            break
    }
})
window.addEventListener('keyup', (e) => {
    switch (e.key) {
        case 'w':
            keys.w.pressed = false
            break
        
        case 'a':
            keys.a.pressed = false
            break
        
        case 's':
            keys.s.pressed = false
            break

        case 'd':
            keys.d.pressed = false
            break
    }
})