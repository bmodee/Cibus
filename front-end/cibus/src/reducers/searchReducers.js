import Types from "../actions/types.js";

export default function search(state = {recipes: [], searchWord: "", status: undefined}, action) {
    let newState = Object.assign({}, state);
    switch(action.type) {
        case Types.CHANGE_SEARCH_WORD:
            newState.searchWord = action.searchWord;
            break;
            case Types.SEARCH_RECIPES:
                newState.status = "LOADING";
                break;
            case Types.SEARCH_RECIPES_SUCCESS:
                newState.recipes = action.data.data.recipes;
                newState.status = "DONE";
                break;
            case Types.SEARCH_RECIPES_ERROR:
                newState.status = "ERROR";
                break;
    }
    return newState;
}