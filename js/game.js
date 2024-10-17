let canvas;
let Earth;


function init() {
    canvas = document.getElementById('canvas')
    Earth = new World(canvas);

    console.log('My Character is', Earth.character);
    console.log('enemies', Earth.enemies);


}