class ComputerSnake extends Snake {
    constructor() {
        const target = new WanderTarget();
        super(target, new p5.Vector(random(width * xf - Snake.size.x), random(height * yf - Snake.size.y)));
        target.set(this);
    }
}
