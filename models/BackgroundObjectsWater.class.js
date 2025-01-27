class BGOWater extends MovableObjects {

    width = 720;
    height = 405;


    constructor(ImagePath, x) {
        super().loadImage(ImagePath);
        this.width = this.width;
        this.height = this.height;
        this.y = 0;
        this.x = x;
    }

}