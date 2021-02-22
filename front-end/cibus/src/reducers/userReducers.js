import Types from "../actions/types.js";

export default function loginReducers (state = {name: undefined}, action) {
    let newState = Object.assign({}, state);

    switch(action.type) {
        case Types.USER_LOGIN:
            newState.name = action.name;
            newState.email = action.email;
            newState.id = action.id;
            newState.token = action.token;
            break;
        case Types.USER_LOGOUT:
            newState.name = undefined;
            newState.email = undefined;
            newState.id = undefined;
            newState.token = undefined;
            break;
        default:
            break;
    }
    return newState;
}