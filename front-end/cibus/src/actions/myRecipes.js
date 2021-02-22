import Types from './types';
import { axiosPost } from "./communication.js"; 

export function fetchRecipes(user) {
    return axiosPost("user/recipes", user,  {headers: {'content-type': 'application/json'}}, fetchRecipesStart, fetchRecipesSuccess, fetchRecipesError);
}

function fetchRecipesStart() {
    return {
        type: Types.FETCH_RECIPES
    }
}

function fetchRecipesSuccess(path, data, previousAction) {
    return {
        type: Types.FETCH_RECIPES_SUCCESS,
        path,
        data,
        previousAction
    }
}

function fetchRecipesError(path, data, previousAction) {
    return {
        type: Types.FETCH_RECIPES_ERROR,
        path,
        data,
        previousAction
    }
}

export function insertRecipe(recipe) {
    return {
        type: Types.INSERT_RECIPE,
        recipe
    }
}

export function openRecipe(index) {
    return {
        type: Types.OPEN_RECIPE,
        index
    }
}

export function closeRecipe() {
    return {
        type: Types.CLOSE_RECIPE
    }
}