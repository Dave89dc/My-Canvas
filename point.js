class Point{

    constructor(x, y, speedY, color){
        this.x = x;
        this.y = y;
        this.speedY = speedY;
        this.color = color;
    };

    draw(ctx){
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, 6, 6);
    };

    static generatePointUp(canvasWidth){

        const color = `rgb(150, 0, 20)`;

        const randomX1 = Math.random()*canvasWidth;
        const Y1 = 0;

        const speedY1 = (Math.random()*2)-1;

        const newPoint1 = new Point(randomX1, Y1, speedY1, color);

        return newPoint1;

    };

    static generatePointDown(canvasWidth){

        const color = `rgb(150, 0, 20)`;

        const randomX2 = Math.random()*canvasWidth;
        const Y2 = 800;

        const speedY2 = (Math.random()*-2)+1;

        const newPoint2 = new Point(randomX2, Y2, speedY2, color);

        return newPoint2;

    };

};