type GetReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

function greet(name: string) {
    return `Hello, ${name}`;
}

function getNumber() {
    return 123;
}

type GreetReturnType = GetReturnType<typeof greet>;
type NumberReturnType = GetReturnType<typeof getNumber>;

const greeting: GreetReturnType = "Hello TS";
const num: NumberReturnType = 456;

console.log("Greeting:", greeting);
console.log("Number:", num);

export {};