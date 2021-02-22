import Types from "../actions/types.js";

export default function addRecipeReducers(state = {title: "Title", description: "Description", ingredients: [{ name: "Ingredient", quantity:"0", unit:"Deciliter"}], instructions: ["Step"]}, action) {
    let newState = Object.assign({}, state);

    switch(action.type) {
        case Types.CHANGE_TITLE:
            newState.title = action.title;
            break;
        case Types.CHANGE_DESCRIPTION:
            newState.description = action.description;
            break;
        case Types.INSERT_INGREDIENT:
            newState.ingredients.push({ name: "Ingredient", quantity:"0", unit:"Deciliter"});
            break;
        case Types.REMOVE_INGREDIENT:
            newState.ingredients.splice(action.idx, 1);
            break;
        case Types.CHANGE_INGREDIENT_NAME:
            newState.ingredients[action.idx].name = action.name;
            break;
        case Types.CHANGE_INGREDIENT_QUANTITY:
            newState.ingredients[action.idx].quantity = action.quantity;
            break;
        case Types.CHANGE_INGREDIENT_UNIT:
            newState.ingredients[action.idx].unit = action.unit;
            break;
        case Types.INSERT_STEP:
            newState.instructions.push("Step");
            break;
        case Types.REMOVE_STEP:
            newState.instructions.splice(action.idx, 1);
            break;
        case Types.CHANGE_STEP:
            newState.instructions[action.idx] = action.step;
            break;
        case Types.MOVE_INSTRUCTION:
            switch(action.direction) {
                case "UP":
                    var target = action.idx -1;
                    if (action.idx === 0) target = newState.instructions.length;
                    newState.instructions.splice(target, 0, newState.instructions.splice(action.idx, 1)[0]);
                    break;
                case "DOWN":
                    var target = action.idx + 1;
                    if (action.idx === newState.instructions.length - 1) target = 0;
                    newState.instructions.splice(target, 0, newState.instructions.splice(action.idx, 1)[0]);
                    break;
            }
            break;

    }
    return newState;
}