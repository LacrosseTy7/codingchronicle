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
    static width = 48
    static height = 48
    constructor({position}) {
        this.position = position
        this.width = 48
        this.height = 48
    }

    draw() {
        c.fillStyle = 'rgba(255, 0, 0, 0)'
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
}

const offset = {
    x: -1074,
    y: -475
}

const boundaries = []

collisionsMap.forEach((row, i) => {
    row.forEach((symbol, j) => {
        if (symbol === 1037)
        boundaries.push(new Boundary({
            position: {
                x: j * Boundary.width + offset.x,
                y: i * Boundary.height + offset.y
            }
        }))
    })
})

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
        image,
        frames = {max: 1}
    }) {
        this.position = position
        this.image = image
        this.frames = frames

        this.image.onload = () => {
            this.width = this.image.width / this.frames.max
            this.height = this.image.height
        }
    }

    draw() {
        c.drawImage(
            this.image, 
            0,
            0,
            this.image.width / this.frames.max,
            this.image.height,
            this.position.x,
            this.position.y,            
            this.image.width / this.frames.max,
            this.image.height
    )
    }
}

const player = new Sprite({
    position: {
        x: canvas.width / 2 - 192 / 4 / 2,
        y: canvas.height / 2 - 68 / 2
    },
    image: playerImage,
    frames: {
        max: 4
    }
})

// this makes a background that's moveable
const background = new Sprite({
    position: {
        x: offset.x,
        y: offset.y
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

const moveables = [background, ...boundaries]

function rectangularCollision({rectangle1, rectangle2}) {
    return (
        rectangle1.position.x + rectangle1.width >= rectangle2.position.x && 
        rectangle1.position.x <= rectangle2.position.x + rectangle2.width && 
        rectangle1.position.y <= rectangle2.position.y + rectangle2.height && 
        rectangle1.position.y + rectangle1.height >= rectangle2.position.y
    )
}

// this does a lot, it runs an animation loop
function animate() {
    // this line makes it an infinite loop
    window.requestAnimationFrame(animate)

    // this line uses the sprite to make the background
    background.draw()

    boundaries.forEach(boundary => {
        boundary.draw()
    })
    player.draw()

    let moving = true

    // this sees if a letter has been pressed and it was the last one pressed and executes what to do depending on the letter
    if (keys.w.pressed && lastKey === 'w') {
        for (let i = 0; i < boundaries.length; i++) {
            const boundary = boundaries[i]
            if (
                rectangularCollision({
                    rectangle1: player,
                    rectangle2: {...boundary, position: {
                        x: boundary.position.x,
                        y: boundary.position.y + 3
                    }}
                })
            ) {
                console.log('colliding')
                moving = false
                break
            }
        }

        if (moving)
        moveables.forEach((moveable) => {
            moveable.position.y += 3
        })
    } else if (keys.s.pressed && lastKey === 's') {
        for (let i = 0; i < boundaries.length; i++) {
            const boundary = boundaries[i]
            if (
                rectangularCollision({
                    rectangle1: player,
                    rectangle2: {...boundary, position: {
                        x: boundary.position.x,
                        y: boundary.position.y - 3
                    }}
                })
            ) {
                console.log('colliding')
                moving = false
                break
            }
        }

        if (moving)
        moveables.forEach((moveable) => {
            moveable.position.y -= 3
        })
    } else if (keys.a.pressed && lastKey === 'a') {
        for (let i = 0; i < boundaries.length; i++) {
            const boundary = boundaries[i]
            if (
                rectangularCollision({
                    rectangle1: player,
                    rectangle2: {...boundary, position: {
                        x: boundary.position.x + 3,
                        y: boundary.position.y
                    }}
                })
            ) {
                console.log('colliding')
                moving = false
                break
            }
        }

        if (moving)
        moveables.forEach((moveable) => {
            moveable.position.x += 3
        })
    } else if (keys.d.pressed && lastKey === 'd') {
        for (let i = 0; i < boundaries.length; i++) {
            const boundary = boundaries[i]
            if (
                rectangularCollision({
                    rectangle1: player,
                    rectangle2: {...boundary, position: {
                        x: boundary.position.x - 3,
                        y: boundary.position.y
                    }}
                })
            ) {
                console.log('colliding')
                moving = false
                break
            }
        }

        if (moving)
        moveables.forEach((moveable) => {
            moveable.position.x -= 3
        })
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