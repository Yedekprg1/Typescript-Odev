type PickByValueType<T, V> = {
    [K in keyof T as T[K] extends V ? K : never]: T[K]
};

interface Data {
    id: number;
    name: string;
    age: number;
    isActive: boolean;
    isVerified: boolean;
}

type StringProperties = PickByValueType<Data, string>;
type NumberProperties = PickByValueType<Data, number>;
type BooleanProperties = PickByValueType<Data, boolean>;

const strings: StringProperties = {
    name: "Ahmet"
};

const numbers: NumberProperties = {
    id: 1,
    age: 30
};

const booleans: BooleanProperties = {
    isActive: true,
    isVerified: false
};

console.log("Strings:", strings);
console.log("Numbers:", numbers);
console.log("Booleans:", booleans);

export {};