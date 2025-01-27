class MovableObjects {

    // paste Postion of graphics
    x = 0;
    y = 0;
    img;
    width;
    height;
    opacity;

    imageCache = {};
    speed = 0.1;
    otherDirection = false;

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    };

    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }

    moveRight() {
        console.log("move right");

    };

    moveLeft() {
        setInterval(() => {
            this.x -= this.speed;
        }, 1000 / 60);
    };
}