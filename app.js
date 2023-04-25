const myCanvas = document.getElementById('my-canvas');
const cxt = myCanvas.getContext('2d');

const circlePoints = {
    x: 400,
    y: 400
};

let newUpGeneration = Generation.generateRandomUpPoints(100);
let newDownGeneration = Generation.generateRandomDownPoints(100);

function createCanvas(){
    cxt.fillStyle = 'rgb(215, 215, 215)';
    cxt.fillRect(0, 0, myCanvas.width, myCanvas.height);
    cxt.fillStyle = 'white';
    cxt.fillRect(290, 400, 220, 20);
};

function createCircle(){
    cxt.beginPath();
    cxt.arc(circlePoints.x, circlePoints.y, 100, 0, 2*Math.PI);
    circlePoints.x += (Math.random()*2)-1;
    circlePoints.y += (Math.random()*2)-1;
    cxt.lineWidth = 2;
    cxt.strokeStyle = 'blue';
    cxt.stroke();
    cxt.fillStyle = 'rgb(30, 144, 255)';
    cxt.fill();
};

function step(){

    createCanvas();
    newUpGeneration.drawUpPoints(cxt, myCanvas.height);
    newDownGeneration.drawDownPoints(cxt, myCanvas.height);
    createCircle();

    window.requestAnimationFrame(step);

};

window.requestAnimationFrame(step);