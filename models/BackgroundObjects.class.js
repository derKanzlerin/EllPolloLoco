class Backgroundobjects extends MovableObjects {

    width = 720;
    height = 405;
    x = 0;
    y = 75;


    constructor(ImagePath, x, y) {
        super().loadImage(ImagePath);
        this.width = this.width;
        this.height = this.height;
        this.x = x;
        this, y = y;
    }

}