import Types from "./types.js";

export function login(name, email, id, token) {
    return {
        type: Types.USER_LOGIN,
        name,
        email,
        id,
        token
    }
}

export function logout() {
    return {
        type: Types.USER_LOGOUT,
    }
}
