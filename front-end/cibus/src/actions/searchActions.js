import Types from './types';
import { axiosPost } from "./communication";

export function changeSearchWord(searchWord) {
    return {
        type: Types.CHANGE_SEARCH_WORD,
        searchWord
    }
}

export function searchRecipes(searchWord) {
    return axiosPost("search", {searchWord: searchWord},  {headers: {'content-type': 'application/json'}}, searchRecipesStart, searchRecipesSuccess, searchRecipesError);
}

function searchRecipesStart() {
    return {
        type: Types.SEARCH_RECIPES
    }
}

function searchRecipesSuccess(path, data, previousAction) {
    return {
        type: Types.SEARCH_RECIPES_SUCCESS,
        path,
        data,
        previousAction
    }
}

function searchRecipesError(path, data, previousAction) {
    return {
        type: Types.SEARCH_RECIPES_ERROR,
        path,
        data,
        previousAction
    }
}