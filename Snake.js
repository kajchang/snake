class Snake {
    constructor(headTarget, headPosition) {
        this.segments = [new Head(
            headPosition,
            Snake.size.copy(),
            Snake.maxVelocity,
            headTarget
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

    update(state) {
        for (const segment of this.segments) {
            segment.update();
        }

        for (let i = 0; i < state.apples.length; i++) {
            const apple = state.apples[i];

            if (collision(this.segments[0], apple)) {
                this.addSegment();
                state.apples.splice(i, 1);
            }
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
