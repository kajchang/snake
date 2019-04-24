let snake, apple, started;

function setup() {
    createCanvas(
        floor(windowWidth / Snake.size) * Snake.size,
        floor(windowHeight / Snake.size) * Snake.size
    );

    snake = new Snake();
    apple = new Apple();

    started = false;

    frameRate(15);

    document.onkeypress = ev => {
        if (ev.charCode === 32) {
            started = true;
            document.querySelector('canvas').requestFullscreen();
            document.onkeypress = () => {};
        }
    }
}

function draw() {
    background(0);

    if (started) {
        if (keyIsDown(LEFT_ARROW)) {
            snake.direction = DIRECTIONS.LEFT;
        } else if (keyIsDown(RIGHT_ARROW)) {
            snake.direction = DIRECTIONS.RIGHT;
        } else if (keyIsDown(UP_ARROW)) {
            snake.direction = DIRECTIONS.UP;
        } else if (keyIsDown(DOWN_ARROW)) {
            snake.direction = DIRECTIONS.DOWN;
        }

        apple.draw();

        if (snake.segments[0].position.dist(apple.position) === 0) {
            snake.addSegment();
            apple = new Apple();
        }

        if (
            snake.segments.slice(1).some(segment => snake.segments[0].position.dist(segment.position) === 0) ||
            snake.segments[0].position.x >= width || snake.segments[0].position.x <= 0 ||
            snake.segments[0].position.y >= height || snake.segments[0].position.y <= 0
        ) {
            setup();
        }

        snake.update();
        snake.draw();
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
    resizeCanvas(
        floor(windowWidth / Snake.size) * Snake.size,
        floor(windowHeight / Snake.size) * Snake.size
    );
}
