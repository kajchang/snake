class Head extends Segment {
    constructor(position, size, maxVelocity, headTarget) {
        super(position,
              size,
              maxVelocity,
              new p5.Vector(maxVelocity, 0),
              headTarget);
    }
}
