class Endboss extends MovableObjects {
    width = 400;
    height = 324;
    // size = 0.5;
    x = 850;

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
        let introPlayed = false; // Zustand, ob das Intro schon abgespielt wurde

        setInterval(() => {
            if (Earth.character.x < 500) {
                console.log('Character X', Earth.character.x);
            }
            if (Earth.character.x > 500 && !introPlayed) {

                setInterval(() => {
                    Earth.character.ChracterMove = false;
                    this.playIntro();
                    introPlayed = true;
                    console.log('Character X', Earth.character.x);
                    console.log('Intro', introPlayed);
                }, 2000);
            } else if (introPlayed) {
                this.playIdle();

            }
        }, 2000);

        //28.01.2025 - noch nicht smooth CGTP anfrage da

    }

    playIntro() {
        Earth.character.ChracterMove = false;
        setInterval(() => {
            let i = this.currentImage % this.IMAGES_INTRO.length;
            let path = this.IMAGES_INTRO[i];
            this.img = this.imageCache[path];
            this.currentImage++;
            if (i === this.IMAGES_INTRO.length - 1) { // Wenn das letzte Bild des Intros erreicht ist
                this.currentImage = 0; // Zurücksetzen des Bildindex für Idle-Animation
            }
        }, 1000 / 1);

        console.log('Introplayed');

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