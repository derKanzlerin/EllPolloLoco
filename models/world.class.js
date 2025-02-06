class World {

    character = new Character();

    enemies = [];

    level = level1;

    endboss = new Endboss();

    jellyfish = new Jellyfish();


    canvas;
    ctx;
    KeyB;
    camera_x = 0;

    constructor(canvas, KeyB) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.KeyB = KeyB;

        this.randomizeEnemies();
        this.draw();
        this.setworld();
    }


    randomizeEnemies() {
        // Define enemy classes
        const enemyClasses = [PufffishGreen, PufffishRed, PufffishPink];

        // Random number of total enemies between 3 and 5
        const totalEnemies = Math.floor(Math.random() * 3) + 3;

        // Create randomized enemies
        for (let i = 0; i < totalEnemies; i++) {
            // Randomly pick an enemy class
            const EnemyClass = enemyClasses[Math.floor(Math.random() * enemyClasses.length)];

            // Instantiate the enemy and add to the enemies array
            this.enemies.push(new EnemyClass());
        }
    };

    setworld() {
        this.character.world = this;
    }

    draw() {
        // Clear the Canvas
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)

        // add the Objects
        this.ctx.translate(this.camera_x, 0);
        this.addObjectsToMap(this.level.BGOWater);
        this.addObjectsToMap(this.level.backgroundObjects);
        this.addObjectsToMap(this.level.BGOLight);
        this.addObjectsToMap(this.level.Barrier);
        this.addToMap(this.jellyfish);
        this.addToMap(this.character);
        this.addObjectsToMap(this.enemies);
        this.addToMap(this.endboss);

        this.ctx.translate(-this.camera_x, 0);

        // redraw the Objects
        let self = this;
        requestAnimationFrame(function() {
            self.draw();
        })
    }

    // For each Loop
    addObjectsToMap(objects) {
        objects.forEach(OB => {
            this.addToMap(OB);


        })
    }



    // Draw the Image
    addToMap(mo) {
        if (mo.opacity !== undefined) {
            this.ctx.globalAlpha = mo.opacity; // Set opacity for light
        }
        if (mo.otherDirection) { // Character img mirroring by direction change 
            this.ctx.save();
            this.ctx.translate(mo.width, 0);
            this.ctx.scale(-1, 1);
            mo.x = mo.x * -1;
        }
        this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);
        if (mo.otherDirection) { //Character img mirroring by direction change resret
            mo.x = mo.x * -1;
            this.ctx.restore();

        }
        this.ctx.globalAlpha = 1; // Reset opacity for future drawings
    }
}