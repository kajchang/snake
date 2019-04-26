let snake, apples, started;

function setup() {
    createCanvas(windowWidth, windowHeight);

    snake = new Snake();

    apples = [];

    for (let i = 0; i < 100; i++) {
        apples.push(new Apple(Snake.size.copy()));
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

        snake.update();

        for (let i = 0; i < apples.length; i++) {
            const apple = apples[i];

            if (collision(snake.segments[0], apple)) {
                snake.addSegment();
                apples[i] = new Apple(Snake.size.copy());
            }
        }

        if (snake.segments.slice(1).some(segment => snake.segments[0].position.dist(segment.position) === 0)) {
            setup();
        }

        if (snake.segments[0].position.x >= width * xf - snake.segments[0].size.x / 2) {
            snake.segments[0].position.x = width * xf - snake.segments[0].size.x / 2;
        } else if (snake.segments[0].position.x <= snake.segments[0].size.x / 2) {
            snake.segments[0].position.x = snake.segments[0].size.x / 2;
        }

        if (snake.segments[0].position.y >= height * yf - snake.segments[0].size.y / 2) {
            snake.segments[0].position.y = height * yf - snake.segments[0].size.y / 2;
        } else if (snake.segments[0].position.y <= snake.segments[0].size.y / 2) {
            snake.segments[0].position.y = snake.segments[0].size.y / 2;
        }

        push();

        translate(xTrans, yTrans);

        for (const apple of apples) {
            apple.draw();
        }

        snake.draw();

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

    const cameraFocus = snake.segments[0];

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
