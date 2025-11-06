function mergeArrays<T, U>(arr1: T[], arr2: U[]): (T | U)[] {
    return [...arr1, ...arr2];
}

const numbers = [1, 2, 3];
const strings = ['a', 'b', 'c'];

const merged = mergeArrays(numbers, strings);
console.log(merged);