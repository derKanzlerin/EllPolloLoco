let canvas;
let Earth;

let KeyB = new Keyboard();


function init() {
    canvas = document.getElementById('canvas')
    Earth = new World(canvas, KeyB);
};

// KEYs updated the Keyboard class -> change the Animation and position in the character class

window.addEventListener("keydown", (e) => {

    if (e.key == 'ArrowUp' || e.key == 'w') {
        KeyB.UP = true;
    }
    if (e.key == 'ArrowDown' || e.key == 's') {
        KeyB.DOWN = true;
    }
    if (e.key == 'ArrowLeft' || e.key == 'd') {
        KeyB.LEFT = true;
    }
    if (e.key == 'ArrowRight' || e.key == 'a') {
        KeyB.RIGHT = true;
    }
    if (e.key == "Spacebar" || e.key == '0') {
        KeyB.SPACEBAR = true;
    }
});

window.addEventListener("keyup", (e) => {

    if (e.key == 'ArrowUp' || e.key == 'w') {
        KeyB.UP = false;
    }
    if (e.key == 'ArrowDown' || e.key == 's') {
        KeyB.DOWN = false;
    }
    if (e.key == 'ArrowLeft' || e.key == 'd') {
        KeyB.LEFT = false;
    }
    if (e.key == 'ArrowRight' || e.key == 'a') {
        KeyB.RIGHT = false;
    }
    if (e.key == "Spacebar" || e.key == '0') {
        KeyB.SPACEBAR = false;
    }
});