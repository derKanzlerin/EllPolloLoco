class MovableObjects {

    // paste Postion of graphics
    x = 0;
    y = 0;
    img;
    width = 100;
    height = 100;

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    };

    moveRight() {
        console.log("move right");

    };

    moveLeft() {};
}