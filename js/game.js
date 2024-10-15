let canavas;
let ctx;
let world = new World();

function init() {
    canavas = document.getElementById('canvas')
    ctx = canavas.getContext('2d');

    console.log('My Character is', world.character);
    console.log('enimes', world.enemies);


}