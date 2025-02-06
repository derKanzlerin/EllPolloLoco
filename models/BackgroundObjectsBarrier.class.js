class Barrier extends MovableObjects {

    width = 400;
    height = 300;


    constructor(ImagePath, x) {
        super().loadImage(ImagePath);
        this.width = this.width;
        this.height = this.height;
        this.y = 250;
        this.x = x;
    }

}