class Apple extends Thing {
    constructor(size, position) {
        super(position, size);
    }

    update(state) {
        if (random(10) < 0.005) {
            if (state.apples.length < 250) {
                state.apples.push(new Apple(Apple.size.copy(), new p5.Vector(
                    random(this.position.x - 100, this.position.x + 100),
                    random(this.position.y - 100, this.position.y + 100)
                )));
            }
        }
    }

    draw() {
        push();
        fill('red');
        noStroke();
        ellipse(this.position.x, this.position.y, this.size.x, this.size.y);
        pop();
    }
}

Apple.size = new p5.Vector(25, 25);
