type FilterUnion<T, U> = T extends U ? never : T;

type AllTypes = string | number | boolean | Date | string[];
type ToRemove = string | number;

type FilteredTypes = FilterUnion<AllTypes, ToRemove>;

const bool: FilteredTypes = true;
const date: FilteredTypes = new Date();
const arr: FilteredTypes = ["hello"];

console.log("Boolean:", bool);
console.log("Date:", date);
console.log("Array:", arr);

try {
    // @ts-expect-error
    const str: FilteredTypes = "string";
    console.log("Bu satır derlenmemeli:", str); 
} catch (e) {
    console.log("String tipine atanamaz.");
}

try {
    // @ts-expect-error
    const num: FilteredTypes = 123;
    console.log("Bu satır derlenmemeli:", num);
} catch (e) {
    console.log("Number tipine atanamaz.");
}

export {};