abstract class Shape {
    abstract getArea(): number;
}

class Circle extends Shape {
    private radius: number;

    constructor(radius: number) {
        super();
        this.radius = radius;
    }

    public getArea(): number {
        return Math.PI * this.radius * this.radius;
    }
}

const circle = new Circle(5);
console.log(`Dairenin Alanı: ${circle.getArea()}`);

export {};