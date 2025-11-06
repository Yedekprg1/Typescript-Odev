type Brand<T, U> = T & { __brand: U };

type UserID = Brand<string, "UserID">;
type PostID = Brand<string, "PostID">;

function getPostById(id: PostID): string {
    return `Post details for ID ${id}`;
}

function getUserById(id: UserID): string {
    return `User details for ID ${id}`;
}

const userId: UserID = "user-123" as UserID;
const postId: PostID = "post-456" as PostID;

console.log(getUserById(userId));
console.log(getPostById(postId));

try {
    // @ts-expect-error
    console.log(getPostById(userId)); 
} catch (e) {
    console.log("UserID, PostID olarak kullanılamaz.");
}

try {
    // @ts-expect-error
    console.log(getUserById(postId)); 
} catch (e) {
    console.log("PostID, UserID olarak kullanılamaz.");
}

export {};