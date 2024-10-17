class Pufffish extends MovableObjects {
    path = [
        'graphics/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png',
        'graphics/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim1.png',
        'graphics/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim1.png',
    ];

    width = 75;
    height = 50;



    constructor() {
        // Initialize the parent class
        super();

        // Select a random image path from the path array
        let randomIndex = Math.floor(Math.random() * this.path.length);
        let selectedImagePath = this.path[randomIndex];

        // Call the inherited loadImage method with the randomly selected image
        this.loadImage(selectedImagePath);

        this.width = this.width;
        this.height = this.height;

        // this.path.forEach(fish => {
        //     loadImage(fish);
        // });

        this.x = 100 + Math.random() * 200;
        this.y = Math.random() * (200 - 50);

    }


}