type LastParameter<T> = T extends (...args: infer P) => any
  ? P extends [...any[], infer Last]
    ? Last
    : unknown
  : never;

function func1(a: string, b: number) {}
function func2(a: boolean) {}
function func3() {}

type LastParam1 = LastParameter<typeof func1>;
type LastParam2 = LastParameter<typeof func2>;
type LastParam3 = LastParameter<typeof func3>;

const param1: LastParam1 = 123;
const param2: LastParam2 = true;
const param3: LastParam3 = undefined; 

console.log("Param 1:", param1);
console.log("Param 2:", param2);
console.log("Param 3 (No params):", param3);

export {};