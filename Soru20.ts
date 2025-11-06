type ParseRouteParams<T extends string> =
  T extends `${string}/:${infer Param}/${infer Rest}`
    ? { [K in Param]: string } & ParseRouteParams<`/${Rest}`>
  : T extends `${string}/:${infer Param}`
    ? { [K in Param]: string }
  : {};

type UserRoute = "/users/:id";
type PostRoute = "/posts/:postId/comments/:commentId";
type HomeRoute = "/";

type UserParams = ParseRouteParams<UserRoute>;
type PostParams = ParseRouteParams<PostRoute>;
type HomeParams = ParseRouteParams<HomeRoute>;

const userParams: UserParams = { id: "123" };
const postParams: PostParams = { postId: "abc", commentId: "def" };
const homeParams: HomeParams = {};

console.log("User Params:", userParams);
console.log("Post Params:", postParams);
console.log("Home Params:", homeParams);

export {};