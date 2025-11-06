interface User {
    name: string;
    age: number;
    email: string;
}

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

const user: User = {
    name: "Ali",
    age: 30,
    email: "ali@example.com"
};

const userName = getProperty(user, 'name');
console.log(`Ad: ${userName}`);

const userAge = getProperty(user, 'age');
console.log(`Yaş: ${userAge}`);

export {};

