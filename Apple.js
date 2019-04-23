class Apple {
    constructor() {
        this.position = new p5.Vector(
            floor(random(width) / Snake.size) * Snake.size,
            floor(random(height) / Snake.size) * Snake.size
        );
    }

    draw() {
        push();
        fill('red');
        rect(this.position.x, this.position.y, Snake.size, Snake.size);
        pop();
    }
}
