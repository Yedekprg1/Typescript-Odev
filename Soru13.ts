type CreateGetters<T> = {
    [K in keyof T as `get${Capitalize<string & K>}`]: () => T[K]
};

type User = {
    id: number;
    name: string;
    age: number;
};

type UserGetters = CreateGetters<User>;

const userGetters: UserGetters = {
    getId: () => 1,
    getName: () => "Ahmet",
    getAge: () => 30
};

console.log(userGetters.getId());
console.log(userGetters.getName());
console.log(userGetters.getAge());

export {};