class Snake {
    constructor() {
        this.segments = [new Head(
            new p5.Vector(width * xf / 2, height * yf / 2),
            Snake.size.copy(),
            Snake.maxVelocity,
            new p5.Vector(Snake.maxVelocity, 0)
        )];
    }

    addSegment() {
        const lastSegment = this.segments[this.segments.length - 1];

        this.segments.push(
            new Segment(
                new p5.Vector(lastSegment.position.x, lastSegment.position.y)
                    .sub(lastSegment.velocity.normalize().mult(Snake.size.x)),
                Snake.size.copy(),
                Snake.maxVelocity,
                lastSegment.velocity,
                lastSegment
            )
        );
    }

    update() {
        for (const segment of this.segments) {
            segment.update();
        }
    }

    draw() {
        for (const segment of this.segments) {
            segment.draw();
        }
    }
}

Snake.size = new p5.Vector(25, 25);
Snake.maxVelocity = 5;
