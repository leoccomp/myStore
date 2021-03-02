export function userRequest(user) {
  return {
    type: '@user/ADD_REQUEST',
    user
  };
}
