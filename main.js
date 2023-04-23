const myCanvas = document.getElementById('my-canvas');
const cxt = myCanvas.getContext('2d');

const point = {
    x: 400,
    y: 400
};

// RETTANGOLO:

cxt.rect(point.x, point.y, 100, 100);
cxt.lineWidth = 10;
cxt.strokeStyle = 'red';
cxt.stroke();

cxt.fillStyle = 'blueviolet';
cxt.fillRect(point.x, point.y, 100, 100);

cxt.rect(100, 100, 100, 100);
cxt.lineWidth = 10;
cxt.strokeStyle = 'red';
cxt.stroke();

cxt.fillStyle = 'blueviolet';
cxt.fillRect(point.x, point.y, 100, 100);
cxt.fill();

// CERCHIO:

// cxt.arc(point.x, point.y, 60, 0, 2*Math.PI);
// cxt.lineWidth = 4;
// cxt.strokeStyle = 'red';
// cxt.stroke();

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

