type UnwrapPromise<T> = T extends Promise<infer U> ? U : T;

type PromiseString = Promise<string>;
type JustNumber = number;

type UnwrappedString = UnwrapPromise<PromiseString>;
type UnwrappedNumber = UnwrapPromise<JustNumber>;

const testString: UnwrappedString = "Hello";
const testNumber: UnwrappedNumber = 123;

console.log("Test String:", testString);
console.log("Test Number:", testNumber);

export {};