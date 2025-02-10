class level {
    enemies;
    backgroundObjects;
    BGOLight;
    BGOWater;
    Barrier;
    levelEndX = 1750;

    constructor(backgroundObjects, BGOLight, BGOWater, Barrier, enemies) {
        this.enemies = enemies;
        this.backgroundObjects = backgroundObjects;
        this.BGOLight = BGOLight;
        this.BGOWater = BGOWater;
        this.Barrier = Barrier;
    }

}