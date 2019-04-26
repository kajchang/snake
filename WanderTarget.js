class WanderTarget {
    constructor() {
        this.size = new p5.Vector(0, 0);
        this.velocity = new p5.Vector(0, 0);
        this.targetPosition = new p5.Vector(random(width * xf - this.size.x), random(height * yf - this.size.y));
    }

    set(snake) {
        this.snake = snake;
    }

    get position() {
        if (this.targetPosition.dist(this.snake.segments[0].position) < this.snake.segments[0].size.x) {
            this.targetPosition = new p5.Vector(random(width * xf - this.size.x), random(height * yf - this.size.y));
        }
        return this.targetPosition;
    }
}
