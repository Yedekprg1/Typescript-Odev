type Flatten<T> = T extends (infer U)[] ? U : T;

type StrArray = string[];
type Num = number;

type FlattenedStr = Flatten<StrArray>;
type FlattenedNum = Flatten<Num>;

const str: FlattenedStr = "test";
const num: FlattenedNum = 123;

console.log("Flattened String:", str);
console.log("Flattened Number:", num);

export {};