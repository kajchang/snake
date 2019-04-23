class Head extends Segment {
    update(direction) {
        this.position = this.position.add(Snake.getDirectionVector(direction, Snake.size));
    }
}
