class Character extends MovableObjects {
    width = 400;
    height = 326;
    // size = 0.5;
    x = 0;

    CharacterMove = true;

    speed = 5;

    IMAGES_IDLE = [
        'graphics/1.Sharkie/1.IDLE/1.png',
        'graphics/1.Sharkie/1.IDLE/2.png',
        'graphics/1.Sharkie/1.IDLE/3.png',
        'graphics/1.Sharkie/1.IDLE/4.png',
        'graphics/1.Sharkie/1.IDLE/5.png',
        'graphics/1.Sharkie/1.IDLE/6.png',
        'graphics/1.Sharkie/1.IDLE/7.png',
        'graphics/1.Sharkie/1.IDLE/8.png',
        'graphics/1.Sharkie/1.IDLE/9.png',
        'graphics/1.Sharkie/1.IDLE/10.png',
        'graphics/1.Sharkie/1.IDLE/11.png',
        'graphics/1.Sharkie/1.IDLE/12.png',
        'graphics/1.Sharkie/1.IDLE/13.png',
        'graphics/1.Sharkie/1.IDLE/14.png',
        'graphics/1.Sharkie/1.IDLE/15.png',
        'graphics/1.Sharkie/1.IDLE/16.png',
        'graphics/1.Sharkie/1.IDLE/17.png',
        'graphics/1.Sharkie/1.IDLE/18.png',
    ];

    IMAGES_SWIM = [
        'graphics/1.Sharkie/3.Swim/2.png',
        'graphics/1.Sharkie/3.Swim/3.png',
        'graphics/1.Sharkie/3.Swim/5.png',
        'graphics/1.Sharkie/3.Swim/6.png',
    ];

    world;

    swim_sound = new Audio('sounds/768868_14799839-sharkie swim.mp3')

    currentImage = 0;

    constructor() {
        super().loadImage('graphics/1.Sharkie/1.IDLE/1.png');

        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_SWIM);

        this.width = this.width;
        this.height = this.height;

        this.animate();
    }

    animate() {

        setInterval(() => {
            this.swim_sound.pause();
            if (this.world.KeyB.RIGHT && this.x < this.world.level.levelEndX) {
                this.x += this.speed;
                this.otherDirection = false;
                this.swim_sound.play();
            }
            if (this.world.KeyB.LEFT && this.x > 0) {
                this.x -= this.speed;
                this.otherDirection = true;
                this.swim_sound.play();
            }
            if (this.world.KeyB.UP) {
                this.y -= this.speed;
                this.swim_sound.play();
            }
            if (this.world.KeyB.DOWN) {
                this.y += this.speed;
                this.swim_sound.play();
            }
        }, 1000 / 40);

        setInterval(() => {
            if (this.world.KeyB.RIGHT || this.world.KeyB.UP || this.world.KeyB.DOWN || this.world.KeyB.LEFT) {
                let i = this.currentImage % this.IMAGES_SWIM.length; // modulos -> Makes a loop over the lenghth of the array 0 to 5 to 0 
                let path = this.IMAGES_SWIM[i];
                this.img = this.imageCache[path];
                this.currentImage++;
                this.world.camera_x = -this.x;
            }
        }, 1000 / 60)
        setInterval(() => {
            if (this.world.KeyB.RIGHT == false || this.world.KeyB.UP == false || this.world.KeyB.DOWN == false || this.world.KeyB.LEFT == false) {
                let i = this.currentImage % this.IMAGES_IDLE.length; // modulos -> Makes a loop over the lenghth of the array 0 to 5 to 0 
                let path = this.IMAGES_IDLE[i];
                this.img = this.imageCache[path];
                this.currentImage++;
            }
        }, 160);


        ;
    }


    jump() {

    }
}