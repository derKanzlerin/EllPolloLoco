class Endboss extends MovableObjects {
    width = 400;
    height = 324;
    // size = 0.5;
    x = 2100;

    speed = 5;

    IMAGES_IDLE = [
        'graphics/2.Enemy/3 Final Enemy/2.floating/1.png',
        'graphics/2.Enemy/3 Final Enemy/2.floating/2.png',
        'graphics/2.Enemy/3 Final Enemy/2.floating/3.png',
        'graphics/2.Enemy/3 Final Enemy/2.floating/4.png',
        'graphics/2.Enemy/3 Final Enemy/2.floating/5.png',
        'graphics/2.Enemy/3 Final Enemy/2.floating/6.png',
        'graphics/2.Enemy/3 Final Enemy/2.floating/7.png',
        'graphics/2.Enemy/3 Final Enemy/2.floating/8.png',
        'graphics/2.Enemy/3 Final Enemy/2.floating/9.png',
        'graphics/2.Enemy/3 Final Enemy/2.floating/10.png',
        'graphics/2.Enemy/3 Final Enemy/2.floating/11.png',
        'graphics/2.Enemy/3 Final Enemy/2.floating/12.png',
        'graphics/2.Enemy/3 Final Enemy/2.floating/13.png'
    ];

    IMAGES_INTRO = [
        'graphics/2.Enemy/3 Final Enemy/1.Introduce/1.png',
        'graphics/2.Enemy/3 Final Enemy/1.Introduce/2.png',
        'graphics/2.Enemy/3 Final Enemy/1.Introduce/3.png',
        'graphics/2.Enemy/3 Final Enemy/1.Introduce/4.png',
        'graphics/2.Enemy/3 Final Enemy/1.Introduce/5.png',
        'graphics/2.Enemy/3 Final Enemy/1.Introduce/6.png',
        'graphics/2.Enemy/3 Final Enemy/1.Introduce/7.png',
        'graphics/2.Enemy/3 Final Enemy/1.Introduce/8.png',
        'graphics/2.Enemy/3 Final Enemy/1.Introduce/9.png',
        'graphics/2.Enemy/3 Final Enemy/1.Introduce/10.png'
    ];

    world;

    swim_sound = new Audio('sounds/768868_14799839-sharkie swim.mp3')

    currentImage = 0;

    constructor() {
        super().loadImage('graphics/2.Enemy/3 Final Enemy/1.Introduce/1.png');

        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_INTRO);

        this.width = this.width;
        this.height = this.height;

        this.animate();
    }

    animate() {
        // Check frequently whether the character has reached the trigger point.
        let introPlayed = false;
        const checkInterval = setInterval(() => {
            // Replace this condition as needed (>= 500 or === 500)
            if (Earth.character.x >= 1750 && !this.introPlayed) {
                clearInterval(checkInterval); // Stop checking once the intro is triggered
                this.playIntro();
                this.introPlayed = true;
            }
        }, 100);
    }

    playIntro() {
        let frameIndex = 0;
        const introInterval = setInterval(() => {
            if (frameIndex < this.IMAGES_INTRO.length) {
                const path = this.IMAGES_INTRO[frameIndex];
                this.img = this.imageCache[path];
                frameIndex++;
            } else {
                // Intro is finished: clear the interval and switch to idle animation
                clearInterval(introInterval);
                // Reset the frame counter for the idle animation if needed
                this.currentImage = 0;
                // Allow the character to move to Level EndX or wherever
                Earth.level.levelEndX = 2160;
                this.playIdle();
            }
        }, 1000 / 10); // Adjust the speed as necessary

        console.log('Intro played');
    }

    playIdle() {
        Earth.character.ChracterMove = true;
        setInterval(() => {
            let i = this.currentImage % this.IMAGES_IDLE.length;
            let path = this.IMAGES_IDLE[i];
            this.img = this.imageCache[path];
            this.currentImage++;
        }, 1000 / 5);

    }



    jump() {
        for (let i = 0; i < this.IMAGES_INTRO.length; i++) {
            let path = this.IMAGES_INTRO[i];
            this.img = this.imageCache[path];
        }
        let i = this.currentImage % this.IMAGES_INTRO.length; // modulos -> Makes a loop over the lenghth of the array 0 to 5 to 0 
        let path = this.IMAGES_INTRO[i];
        this.img = this.imageCache[path];
        this.currentImage++;

    }
}