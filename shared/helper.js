import jwt_decode from "jwt-decode";

export const getDecodedTokenFromLocalStorage = () => {
    const token = typeof window !== 'undefined' ? window.localStorage.getItem("certmate_token") : null;
    let decodedToken = token ? jwt_decode(token) : null;
    return decodedToken;
}

export const clearLocalStorage = () => {
    const token = typeof window !== 'undefined' ? window.localStorage.getItem("certmate_token") : null;
    if (token) localStorage.removeItem("certmate_token");
}