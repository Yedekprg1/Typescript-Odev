type DeepReadonly<T> = {
  readonly [K in keyof T]: T[K] extends object ? DeepReadonly<T[K]> : T[K]
};

interface Config {
    endpoint: string;
    user: {
        id: number;
        name: string;
        settings: {
            theme: 'dark' | 'light';
            notifications: boolean;
        }
    }
}

type ReadonlyConfig = DeepReadonly<Config>;

const config: ReadonlyConfig = {
    endpoint: "/api",
    user: {
        id: 1,
        name: "Admin",
        settings: {
            theme: 'dark',
            notifications: true
        }
    }
};

console.log("Readonly Config:", config);

export {};