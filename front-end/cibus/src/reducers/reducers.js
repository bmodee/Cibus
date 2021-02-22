import { combineReducers } from 'redux';
import myRecipesReducer from './myRecipes';
import addRecipeReducers from './addRecipeReducer';
import loginReducers from './userReducers';
import searchReducers from './searchReducers';

const reducers =  combineReducers({
    myRecipes: myRecipesReducer, 
    addRecipe: addRecipeReducers,
    user: loginReducers,
    search: searchReducers});
    

export default reducers;