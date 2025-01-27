class PufffishRed extends MovableObjects {
    path = [
        'graphics/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png',
        'graphics/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim1.png',
        'graphics/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim1.png',
    ];

    width = 120;
    height = 99;

    IMAGES_IDLE_GREEN = [
        'graphics/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png',
        'graphics/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim2.png',
        'graphics/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim3.png',
        'graphics/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim4.png',
        'graphics/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim5.png',
    ];
    IMAGES_IDLE_RED = [
        'graphics/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim1.png',
        'graphics/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim2.png',
        'graphics/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim3.png',
        'graphics/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim4.png',
        'graphics/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim5.png',
    ];
    IMAGES_IDLE_PINK = [
        'graphics/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim1.png',
        'graphics/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim2.png',
        'graphics/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim3.png',
        'graphics/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim4.png',
        'graphics/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim5.png',
    ];

    currentImage = 0;

    constructor() {
        // Initialize the parent class
        super();

        // Select a random image path from the path array
        // let randomIndex = Math.floor(Math.random() * this.path.length);
        let selectedImagePath = this.path[2];

        // Call the inherited loadImage method with the randomly selected image
        this.loadImage(selectedImagePath);

        this.loadImages(this.IMAGES_IDLE_PINK);

        this.speed = 0.15 + Math.random() * 0.25;

        this.width = this.width;
        this.height = this.height;


        this.x = 200 + Math.random() * 500;
        this.y = Math.random() * (200 - 50);

        this.animate();
    }

    animate() {
        this.moveLeft();
        setInterval(() => {
            let i = this.currentImage % this.IMAGES_IDLE_PINK.length; // modulos -> Makes a loop over the lenghth of the array 0 to 5 to 0 
            let path = this.IMAGES_IDLE_PINK[i];
            this.img = this.imageCache[path];
            this.currentImage++;
        }, 180);
        this.currentImage = 0;
    }


}