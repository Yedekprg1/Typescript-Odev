interface User {
    id: number;
    name: string;
    isActive: boolean;
}

const users: User[] = [
    { id: 1, name: "Ahmet", isActive: true },
    { id: 2, name: "Ayşe", isActive: false },
    { id: 3, name: "Ahmet", isActive: true },
    { id: 4, name: "Can", isActive: true },
];

function search(query: number): User | undefined;
function search(query: string): User[];
function search(query: string | number): User | User[] | undefined {
    if (typeof query === 'number') {
        return users.find(user => user.id === query);
    } else {
        return users.filter(user => user.name === query);
    }
}

const userById = search(2);
console.log("ID ile bulunan:", userById);

const usersByName = search("Ahmet");
console.log("İsim ile bulunan:", usersByName);

export {};