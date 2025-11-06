class MathHelper {
    public static readonly PI: number = 3.14159;

    public static calculateCircumference(radius: number): number {
        return 2 * MathHelper.PI * radius;
    }
}

console.log(`PI Değeri: ${MathHelper.PI}`);

const radius = 5;
const circumference = MathHelper.calculateCircumference(radius);
console.log(`Çevre (r=${radius}): ${circumference}`);

export {};