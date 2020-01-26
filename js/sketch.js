const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
const divRanges = document.getElementById('div')
const range = document.createElement('input')
const counter = document.createElement('h1')
const rangeLabel = document.createElement('h2')
divRanges.appendChild(counter)
range.setAttribute("type", "range")
range.setAttribute("min", 1)
range.setAttribute("max", 3)
range.addEventListener('input', () => {
    nDigits = range.value
    rangeLabel.innerText = range.value + " Digits"
    count = 0
    block1 = new Block(100, 0, 50 * nDigits, 50 * nDigits, Math.pow(100, nDigits - 1), 2, ctx)
    block2 = new Block(500, 0, 50, 50, 1, 0, ctx)

})
divRanges.appendChild(range)
divRanges.appendChild(rangeLabel)
range.value = 2
const width = 700
const height = 700
canvas.width = width
canvas.height = height
let speed = range.value
rangeLabel.innerText = range.value + " Digits"

let nDigits = range.value
block1 = new Block(100, 0, 50 * nDigits, 50 * nDigits, Math.pow(100, nDigits - 1), 2, ctx)
block2 = new Block(500, 0, 50, 50, 1, 0, ctx)

let count = 0

function update() {
    ctx.clearRect(0, 0, width, height)



    block1.draw()
    block2.draw()
    counter.innerText = count / Math.pow(10, nDigits - 1)


    if (block1.isColliding(block2)) {
        let block1V = block1.bounce(block2)
        let block2V = block2.bounce(block1)
        block1.vel.x = block1V
        block2.vel.x = block2V
        count++
    }

    if (block2.isHittingRightWall()) {
        block2.bounceWall()
        count++
    }



}

setInterval(() => {
    update()
}, getMs(60));