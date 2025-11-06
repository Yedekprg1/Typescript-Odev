interface User {
  id: number;
  name: string;
  age: number;
  email: string;
}

const currentUser: User = {
  id: 1,
  name: 'Ahmet',
  age: 30,
  email: 'ahmet@example.com',
};

function updateUser(user: User, updates: Partial<User>): Readonly<User> {
  return { ...user, ...updates };
}

const updates: Partial<User> = {
  name: 'Ahmet Yilmaz',
  age: 31,
};

const updatedUser = updateUser(currentUser, updates);
console.log(updatedUser);

try {
    
    //    updatedUser.name = 'Mehmet'; // Error: Cannot assign to 'name' because it is a read-only property.
} catch (e) {
    console.log("Readonly özellik değiştirilemez.");
}

export {};