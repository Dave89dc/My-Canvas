const myCanvas = document.getElementById('my-canvas');
const cxt = myCanvas.getContext('2d');

const point = {
    x: 400,
    y: 400
};

// RETTANGOLO:

// cxt.rect(point.x, point.y, 100, 100);
// cxt.lineWidth = 10;
// cxt.strokeStyle = 'red';
// cxt.stroke();

// cxt.fillStyle = 'blueviolet';
// cxt.fillRect(point.x, point.y, 100, 100);

// cxt.rect(100, 100, 100, 100);
// cxt.lineWidth = 10;
// cxt.strokeStyle = 'red';
// cxt.stroke();

// cxt.fillStyle = 'blueviolet';
// cxt.fillRect(point.x, point.y, 100, 100);
// cxt.fill();

// CERCHIO:

// let x = Math.random()*myCanvas.width;
// let y = Math.random()*myCanvas.height;
// let r = Math.random()*100;

let pointUpX = 400;
let pointUpY = 350;
let pointDownX = 400;
let pointDownY = 450;

function step(){
    cxt.fillStyle = 'rgb(215, 215, 215)';
    cxt.fillRect(0, 0, myCanvas.width, myCanvas.height);
    cxt.fillStyle = 'white';
    cxt.fillRect(290, 380, 220, 20);
    cxt.beginPath();
    generateRandom();
    cxt.arc(point.x, point.y, 100, 0, 2*Math.PI);
    point.x += (Math.random()*2)-1;
    point.y += (Math.random()*2)-1;
    cxt.lineWidth = 2;
    cxt.strokeStyle = 'blue';
    cxt.stroke();
    cxt.fillStyle = 'rgb(30, 144, 255)';
    cxt.fill();
    
    
    window.requestAnimationFrame(step);
};

window.requestAnimationFrame(step);

// cxt.beginPath();
// cxt.arc(100, 100, 50, 0, 2 * Math.PI);
// cxt.fillStyle = "#00ff00";
// cxt.fill();
// cxt.strokeStyle = "#000000";
// cxt.stroke();

// cxt.arc(point.x, point.y, 100, 0, 2 * Math.PI);
// cxt.fillStyle = "#00ff00";
// cxt.fill();
// cxt.strokeStyle = "#000000";
// cxt.stroke();

// cxt.arc(60, 700, 40, 0, 2 * Math.PI);
// cxt.fillStyle = "#00ff00";
// cxt.fill();
// cxt.strokeStyle = "#000000";
// cxt.stroke();


let speedX = (Math.random()*18)-9;

function generateRandom(){

    cxt.fillStyle = `rgb(${Math.random()*255}, 0, 0)`;
    cxt.fillRect(pointUpX, pointUpY, 30, 4);

    cxt.fillStyle = `rgb(${Math.random()*255}, 0, 0)`;
    cxt.fillRect(pointDownX, pointDownY, 30, 4);

    let speedUpY = -6;
    let speedDownY = 6;

    if(pointUpY < 0){
        speedX = (Math.random()*18)-9;
        pointUpX = 400;
        pointUpY = 350;
    };

    if(pointDownY > myCanvas.height){
        speedX = (Math.random()*18)-9;
        pointDownX = 400;
        pointDownY = 450;
    };

    pointUpX += speedX;
    pointUpY += speedUpY;

    pointDownX += speedX;
    pointDownY += speedDownY;

};

