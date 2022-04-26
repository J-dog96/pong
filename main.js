console.log("ello")

var canvas = document.querySelector('canvas')
var ctx = canvas.getContext("2d")

canvas.width = window.innerWidth
canvas.height = window.innerHeight



var cube = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    w: canvas.width * 0.05,
    h: canvas.width * 0.05,
    xDir: -1,
    yDir: 1,
    speed: 5,
    color: "blue",
    move: function() {
        this.x += this.xDir * this.speed
        this.y += this.yDir * this.speed
    },
    detectBounce:function() {
        // detect horizontal
        if (cube.x <= 0 || cube.x >= canvas.width) {
            this.xDir = -this.xDir
        }
        // detect vertical
        if (cube.y <= 0 || cube.y >= canvas.height) {
            this.yDir = -this.yDir
        }

        console.log(this.x, paddle.x)
        if (this.x <= paddle.x) {
            console.log('AHDJs')
            this.xDir = -this.xDir
        }
    },
    draw: function() {
        ctx.beginPath()
        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, this.w, this.h)
    }
}

var paddle ={
    x: 200,
    y: 75,
    w: 44,
    h: 96,


    move: function() {
        if (playerInput.wKey == true && this.y >= 0) {
            this.y += -5
        }
        if (playerInput.sKey == true && this.y + this.h <= window.innerHeight) {
            console.log("fire")
            this.y += 5
        }
    },
    draw: function() {
        ctx.beginPath()
        ctx.fillRect(this.x, this.y, this.w, this.h)
    }
}

var playerInput = {
    wKey: false,
    sKey: false
}

document.addEventListener('keydown', function(event){
    if ( event.key == 'w' ) {
        playerInput.wKey = true
    }
    if ( event.key == 's') {
        playerInput.sKey = true
    }
})
document.addEventListener('keyup', function(event){
    if ( event.key == 'w' ) {
        playerInput.wKey = false
    }
    if ( event.key == 's') {
        playerInput.sKey = false
    }
})


function frameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    cube.move()
    cube.detectBounce()
    cube.draw()

    paddle.draw()
    paddle.move()

    requestAnimationFrame(frameLoop)
}

frameLoop()