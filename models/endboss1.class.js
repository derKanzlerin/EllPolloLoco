class Endboss extends MovableObjects {

    width = 400;
    height = 324;
    // size = 0.5;

    x = 720;

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

    constructor() {
        super();

        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_INTRO);

        this.width = this.width;
        this.height = this.height;

        this.animate();
    }


    animate() {
        setInterval(() => {
            
                let i = this.currentImage % this.IMAGES_INTRO.length; // modulos -> Makes a loop over the lenghth of the array 0 to 5 to 0 
                let path = this.IMAGES_INTRO[i];
                this.img = this.imageCache[path];
                this.currentImage++;
                
            
        }, 1000 / 60)
    };



    jump(){
        setInterval(() => {
            
            let i = this.currentImage % this.IMAGES_IDLE.length; // modulos -> Makes a loop over the lenghth of the array 0 to 5 to 0 
            let path = this.IMAGES_IDLE[i];
            this.img = this.imageCache[path];
            this.currentImage++;
        
    }, 160);
        
        ;}
}