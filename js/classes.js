class Block {
    constructor(x, y, w, h, m, v, ctx) {
        this.pos = new Vector(x, ctx.canvas.height - h)
        this.vel = new Vector(v, 0)
        this.size = new Vector(w, h)
        this.ctx = ctx
        this.mass = m

    }
    draw() {
        this.ctx.fillStyle = '#fff'
        this.ctx.fillRect(this.pos.x, this.pos.y, this.size.x, this.size.y)
        this.update()
    }
    update() {
        this.pos.add(this.vel)
    }


    bounce(other) {
        let sumM = this.mass + other.mass
        let newV = (this.mass - other.mass) / sumM * this.vel.x
        newV += (2 * other.mass / sumM) * other.vel.x
        return newV
    }
    bounceWall() {
        this.vel.x *= -1
    }

    isColliding(other) {
        return this.pos.x < other.pos.x + other.size.x && this.pos.x + this.size.x > other.pos.x
    }
    isHittingRightWall() {
        if (this.pos.x >= height - this.size.x)
            return true
        return false
    }

}

class Vector {
    constructor(x, y) {
        this.x = x
        this.y = y
    }
    add(vector) {
        this.x += vector.x
        this.y += vector.y
    }
    addConstrain(vector, minVector, maxVector) {
        this.x = constrain(this.x + vector.x, minVector.x, maxVector.x)
        this.y = constrain(this.y + vector.y, minVector.y, maxVector.y)
    }
    sub(vector) {
        this.x -= vector.x
        this.y -= vector.y
    }
}