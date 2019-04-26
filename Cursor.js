const Cursor = {
    get position() {
        const [xTrans, yTrans] = center();
        return new p5.Vector(mouseX - xTrans, mouseY - yTrans);
    },
    size: new p5.Vector(0, 0),
    velocity: new p5.Vector(0, 0)
};
