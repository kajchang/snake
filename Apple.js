class Apple extends Thing {
    constructor(size) {
        super(new p5.Vector(random(width * xf - size.x), random(height * yf - size.y)),
              size);
    }

    draw() {
        push();
        fill('red');
        noStroke();
        ellipse(this.position.x, this.position.y, this.size.x, this.size.y);
        pop();
    }
}
