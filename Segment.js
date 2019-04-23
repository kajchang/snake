class Segment {
    constructor(position, predecessor) {
        this.position = position;
        this.predecessor = predecessor;
    }

    update(direction) {
        this.position = this.predecessor.position.copy();
    }

    draw() {
        push();
        rect(this.position.x, this.position.y, Snake.size, Snake.size);
        pop();
    }
}
