class Jellyfish extends MovableObjects {
    path = [
        'graphics/2.Enemy/2 Jelly fish/Súper dangerous/Green 1.png',
    ];

    width = 120;
    height = 99;

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


    currentImage = 0;

    constructor() {
        // Initialize the parent class
        super();

        // Select a random image path from the path array
        // let randomIndex = Math.floor(Math.random() * this.path.length);
        let selectedImagePath = this.path;

        // Call the inherited loadImage method with the randomly selected image
        this.loadImage(selectedImagePath);

        this.loadImages(this.IMAGES_IDLE);

        this.speed = 0.15 + Math.random() * 0.25;

        this.width = this.width;
        this.height = this.height;


        this.x = 1040;
        this.y = 350;

        this.animate();
    }

    animate() {
        this.moveLeft();
        setInterval(() => {
            let i = this.currentImage % this.IMAGES_IDLE.length; // modulos -> Makes a loop over the lenghth of the array 0 to 5 to 0 
            let path = this.IMAGES_IDLE[i];
            this.img = this.imageCache[path];
            this.currentImage++;
        }, 180);
        this.currentImage = 0;
    }


}