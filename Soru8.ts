function sum(...numbers: number[]): number {
    return numbers.reduce((total, current) => total + current, 0);
}

const total1 = sum(1, 2, 3);
console.log(`Toplam (1, 2, 3): ${total1}`);

const total2 = sum(10, 20);
console.log(`Toplam (10, 20): ${total2}`);

const total3 = sum(5);
console.log(`Toplam (5): ${total3}`);

export {};