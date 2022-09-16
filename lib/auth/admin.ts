import { isExpired } from "react-jwt";

export const isValidAdmin = (token: string | undefined) => {
    if (token) {
        if (isExpired(token)) return false;
    } else return false;
    return true;
};
