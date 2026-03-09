import { users } from "../fixtures/users.json";

export function auth(login: string, password: string) {
  const isFound = users.some(
    (e) => e.username === login && e.password === password,
  );

  if (isFound) {
    console.log(login, password);
    return 200;
  }
  return 404;
}
