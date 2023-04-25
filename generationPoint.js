class Generation{

    constructor(upPoints = 0, downPoints = 0){
        this.upPoints = upPoints;
        this.downPoints = downPoints;
    };

    addUpPoint(newUpPoint){
        return this.upPoints + newUpPoint;
    };

    addDownPoint(newDownPoint){
        return this.downPoints + newDownPoint;
    };

    static generateRandomUpPoints(numberOfUpPoints){
        let newGeneration = new Generation();
        for (let i = 0; i < numberOfUpPoints; i++) {
            let newUpPoint = Point.generateRandomUpPoint();
            newGeneration.addUpPoint(newUpPoint);
        };
        return newGeneration;
    };

    static generateRandomDownPoints(numberOfDownPoints){
        let newGeneration = new Generation();
        for (let i = 0; i < numberOfDownPoints; i++) {
            let newDownPoint = Point.generateRandomDownPoint();
            newGeneration.addDownPoint(newDownPoint);
        };
        return newGeneration;
    };

    drawUpPoints(cxt, canvasHeight){
        for (let i = 0; i < this.upPoints; i++) {
            let point = this.upPoints;
            point.draw(cxt);
            point.changePosition(canvasHeight);
        };
    };

    drawDownPoints(cxt, canvasHeight){
        for (let i = 0; i < this.downPoints; i++) {
            let point = this.downPoints;
            point.draw(cxt);
            point.changePosition(canvasHeight);
        };
    };

};