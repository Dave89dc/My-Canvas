class Point{

    constructor(x, y, speedX, speedY, color){
        this.x = x;
        this.y = y;
        this.speedX = speedX;
        this.speedY = speedY;
        this.color = color;
    };

    draw(ctx){
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, 10, 10);
    };

    static generatePoint(canvasWidth){

        const color = `rgb(150, 0, 20)`;

        const randomX = Math.random()*canvasWidth;
        const  

    };

};