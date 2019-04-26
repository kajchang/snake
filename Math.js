const truncate = (value, max) => {
    if (value > max) {
        return max;
    } else if (value < -max) {
        return -max;
    } else {
        return value;
    }
};

p5.Vector.prototype.truncate = max => {
    this.x = truncate(this.x, max);
    this.y = truncate(this.y, max);
    // this.x = truncate(this.x, max);
    return this;
};

const collision = (a, b) => {
    return (
        a.position.x < b.position.x + b.size.x &&
        a.position.x + a.size.x > b.position.x &&
        a.position.y < b.position.y + b.size.y &&
        a.position.y + a.size.x > b.position.y
    );
};

const RADIANS = 180 / Math.PI;

const xf = 3;
const yf = 3;
