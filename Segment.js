class Segment extends Thing {
    constructor(position, size, maxVelocity, velocity, target) {
        super(position, size);

        this.maxVelocity = maxVelocity;
        this.velocity = velocity;
        this.target = target;
    }

    update() {
        const steering = this.followTarget(this.target);
        this.velocity.add(steering).truncate(this.maxVelocity);
        this.position.add(this.velocity);
    }

    followTarget(target) {
        const maxForce = 0.1;

        const bufferRadius = target.size.x / 2;
        const angle = Math.atan2(target.velocity.y, target.velocity.x);

        const buffer = new p5.Vector(-Math.cos(angle) * bufferRadius, -Math.sin(angle) * bufferRadius);

        const targetPosition = target.position.copy().add(buffer);

        const targetVelocity = targetPosition.sub(this.position).normalize().mult(this.maxVelocity);


        const steering = targetVelocity.sub(this.velocity);

        steering.truncate(maxForce);

        return steering;
    }

    draw() {
        push();
        noStroke();
        ellipse(this.position.x, this.position.y, this.size.x, this.size.y);
        pop();
    }
}
