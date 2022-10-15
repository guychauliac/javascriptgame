var canvas = document.getElementById("gameCanvas");
var context = canvas.getContext("2d");

const WIDTH = canvas.width;
const HEIGHT = canvas.height;

document.onkeydown = keyPressed;

var dx = 0;
var dy = 0;

function keyPressed(key){
    console.log(key.code);

    if(key.code == 'ArrowRight'){
        dx -= 5;
    }

    if(key.code == 'ArrowLeft'){
        dx += 5;
    }
    
}

const background = new Image();
background.src = 'background1.jpg';

function draw() {
    context.clearRect(0,0,800,600);
    context.drawImage(background, dx, dy);

    console.log(dx);

    if(dx < 0){
        context.drawImage(background, dx + WIDTH, dy);
    }

    if(dx > 0){
        context.drawImage(background, dx - WIDTH, dy);
    }

    requestAnimationFrame(draw);
}

draw();
