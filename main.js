const state = {
};

let started;

function setup() {
    createCanvas(windowWidth, windowHeight);

    state.snake = new PlayerSnake();

    state.computerSnakes = [];

    for (let i = 0; i < 5; i++) {
        state.computerSnakes.push(new ComputerSnake());
    }

    state.apples = [];

    for (let i = 0; i < 100; i++) {
        state.apples.push(new Apple(Apple.size.copy(),
                          new p5.Vector(random(width * xf - Apple.size.x), random(height * yf - Apple.size.y))));
    }

    started = false;

    document.onkeypress = ev => {
        if (ev.charCode === 32) {
            started = true;
            //document.querySelector('canvas').requestFullscreen();
            //document.onkeypress = () => {};
        }
    };
}

function draw() {
    background(0);

    if (started) {
        const [xTrans, yTrans] = center();

        for (const apple of state.apples) {
            apple.update(state);
        }

        for (const computerSnake of state.computerSnakes) {
            computerSnake.update(state);
        }

        state.snake.update(state);

        if (state.snake.segments[0].position.x >= width * xf - state.snake.segments[0].size.x / 2) {
            state.snake.segments[0].position.x = width * xf - state.snake.segments[0].size.x / 2;
        } else if (state.snake.segments[0].position.x <= state.snake.segments[0].size.x / 2) {
            state.snake.segments[0].position.x = state.snake.segments[0].size.x / 2;
        }

        if (state.snake.segments[0].position.y >= height * yf - state.snake.segments[0].size.y / 2) {
            state.snake.segments[0].position.y = height * yf - state.snake.segments[0].size.y / 2;
        } else if (state.snake.segments[0].position.y <= state.snake.segments[0].size.y / 2) {
            state.snake.segments[0].position.y = state.snake.segments[0].size.y / 2;
        }

        push();

        translate(xTrans, yTrans);

        for (const apple of state.apples) {
            apple.draw();
        }

        for (const computerSnake of state.computerSnakes) {
            computerSnake.draw();
        }

        state.snake.draw();

        pop();
    } else {
        push();
        textSize(100);
        fill(255);
        textAlign(CENTER);
        text('Press Space to Start', width / 2, height / 2);
        pop();
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

const center = () => {
    let xTrans, yTrans;

    const cameraFocus = state.snake.segments[0];

    if (cameraFocus.position.x > width * xf - width / 2) {
        xTrans = -width * (xf - 1);
    } else if (cameraFocus.position.x < width / 2) {
        xTrans = 0;
    } else {
        xTrans = -cameraFocus.position.x + width / 2;
    }

    if (cameraFocus.position.y > height * yf - height / 2) {
        yTrans = -height * (yf - 1);
    } else if (cameraFocus.position.y < height / 2) {
        yTrans = 0;
    } else {
        yTrans = -cameraFocus.position.y + height / 2;
    }

    return [xTrans, yTrans];
};
