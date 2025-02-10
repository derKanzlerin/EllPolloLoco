class Jellyfish extends MovableObjects {
    width = 400;
    height = 324;
    // size = 0.5;
    x = 1040;

    speed = 5;

    IMAGES_IDLE = [
        'graphics/2.Enemy/2 Jelly fish/Súper dangerous/Green 1.png',
        'graphics/2.Enemy/2 Jelly fish/Súper dangerous/Green 2.png',
        'graphics/2.Enemy/2 Jelly fish/Súper dangerous/Green 3.png',
        'graphics/2.Enemy/2 Jelly fish/Súper dangerous/Green 4.png',
        'graphics/2.Enemy/2 Jelly fish/Súper dangerous/Pink 1.png',
        'graphics/2.Enemy/2 Jelly fish/Súper dangerous/Pink 2.png',
        'graphics/2.Enemy/2 Jelly fish/Súper dangerous/Pink 3.png',
        'graphics/2.Enemy/2 Jelly fish/Súper dangerous/Pink 4.png',
    ];



    world;

    swim_sound = new Audio('sounds/768868_14799839-sharkie swim.mp3')

    currentImage = 0;

    constructor() {
        super().loadImage('graphics/2.Enemy/3 Final Enemy/1.Introduce/1.png');

        this.loadImages(this.IMAGES_IDLE);


        this.width = this.width;
        this.height = this.height;

        this.animate();
    }

    animate() {
        // this.swim_sound.play(); need to updatet
        setInterval(() => {
            let i = this.currentImage % this.IMAGES_IDLE.length;
            let path = this.IMAGES_IDLE[i];
            this.img = this.imageCache[path];
            this.currentImage++;
        }, 1000 / 5);
    }

}