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
        ctx.fillRect(this.x, this.y, 30, 4);
    };

    static generateRandomUpPoint(){

        let color = `rgb(${Math.random()*255}, 0, 0)`;

        let x = 400;
        let y = 350;

        let speedX = (Math.random()*18)-9;
        let speedY = -6;

        let newPoint = new Point(x, y, speedX, speedY, color);

        return newPoint;

    };

    static generateRandomDownPoint(){

        let color = `rgb(${Math.random()*255}, 0, 0)`;

        let x = 400;
        let y = 450;

        let speedX = (Math.random()*18)-9;
        let speedY = 6;

        let newPoint = new Point(x, y, speedX, speedY, color);

        return newPoint;

    };

    changePosition(canvasHeight){

        if(this.y < 0){
            this.speedX = (Math.random()*18)-9;
            this.x = 400;
            this.y = 350;
        };

        if(this.y > canvasHeight){
            this.speedX = (Math.random()*18)-9;
            this.x = 400;
            this.y = 450;
        };

        this.x += this.speedX;
        this.y += this.speedY;

    };

};







