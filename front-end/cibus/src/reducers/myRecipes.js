import Types from "../actions/types.js";

export default function myRecipes(state = {recipes: [], status: undefined}, action) {
    let newState = Object.assign({}, state);

    switch(action.type) {
        case Types.INSERT_RECIPE:
            newState.recipes.push(action.recipe);
            break;
        case Types.OPEN_RECIPE:
            newState.openRecipe = action.index;
            break;
        case Types.CLOSE_RECIPE:
            newState.openRecipe = undefined;
            break;
        case Types.FETCH_RECIPES:
            newState.status = "LOADING";
            break;
        case Types.FETCH_RECIPES_SUCCESS:
            newState.recipes = action.data.data.recipes;
            newState.status = "DONE";
            break;
        case Types.FETCH_RECIPES_ERROR:
            newState.status = "ERROR";
            break;
    }
    return newState;
}