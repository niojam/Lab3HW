import jwt from "jwt-decode";

export const isTokenExpired = (jwtToken: string) => {
  const decoded: any = jwt(jwtToken);
  return decoded.exp < Date.now() / 1000 + 60 * 5;
};
