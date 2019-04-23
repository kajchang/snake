const DIRECTIONS = {
    LEFT: 'LEFT',
    RIGHT: 'RIGHT',
    UP: 'UP',
    DOWN: 'DOWN'
};

class Snake {
    constructor() {
        this.segments = [new Head(new p5.Vector(
            floor(width / 2 / Snake.size) * Snake.size,
            floor(height / 2 / Snake.size) * Snake.size
        ), null)];
        this.direction = DIRECTIONS.RIGHT;
    }

    addSegment() {
        const lastSegment = this.segments[this.segments.length - 1];

        this.segments.push(
            new Segment(
                new p5.Vector(lastSegment.position.x, lastSegment.position.y).sub(Snake.getDirectionVector(this.direction, Snake.size)),
                lastSegment
            )
        );
    }

    static getDirectionVector(direction, size) {
        switch (direction) {
            case DIRECTIONS.RIGHT:
                return new p5.Vector(size, 0);
            case DIRECTIONS.LEFT:
                return new p5.Vector(-size, 0);
            case DIRECTIONS.UP:
                return new p5.Vector(0, -size);
            case DIRECTIONS.DOWN:
                return new p5.Vector(0, size);
        }
    }

    update() {
        for (const segment of this.segments.slice(1).reverse()) {
            segment.update();
        }

        this.segments[0].update(this.direction);
    }

    draw() {
        for (const segment of this.segments) {
            segment.draw();
        }
    }
}

Snake.size = 25;
