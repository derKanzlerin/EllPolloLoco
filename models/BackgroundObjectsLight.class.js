class BGOLight extends MovableObjects {

    width = 1440;
    height = 405;
    opacity = 0;


    constructor(ImagePath, x) {
        super().loadImage(ImagePath);
        this.width = this.width;
        this.height = this.height;
        this.y = 0;
        this.x = x;
        // this.img = this.img;
        this.animate();
    }


    animate() {
        setInterval(() => {
            this.opacity = Math.random(); // Update the opacity
        }, 1000 / (Math.random() * 10)); // Run 60 times per second
    }

    // animate() {
    //     let fadeIn = true; // Start with fade-in effect
    //     this.opacity = 0; // Start fully transparent

    //     setInterval(() => {
    //         if (fadeIn) {
    //             this.opacity += 0.01; // Gradually increase opacity
    //             if (this.opacity >= 1) {
    //                 fadeIn = false; // Switch to fade-out when fully opaque
    //             }
    //         } else {
    //             this.opacity -= 0.01; // Gradually decrease opacity
    //             if (this.opacity <= 0) {
    //                 fadeIn = true; // Switch to fade-in when fully transparent
    //             }
    //         }
    //     }, 1000 / (Math.random() * 15)); // Run 60 times per second for smooth transition
    // }




}