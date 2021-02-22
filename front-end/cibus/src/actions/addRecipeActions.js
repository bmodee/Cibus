import Types from './types';

export function changeTitle(title) {
    return {
        type: Types.CHANGE_TITLE,
        title
    }
}

export function changeDescription(description) {
    return {
        type: Types.CHANGE_DESCRIPTION,
        description
    }
}

export function insertIngredient() {
    return {
        type: Types.INSERT_INGREDIENT,
    }
}

export function removeIngredient(idx) {
    return {
        type: Types.REMOVE_INGREDIENT,
        idx
    }
}

export function changeIngredientName(idx, name) {
    return {
        type: Types.CHANGE_INGREDIENT_NAME,
        idx,
        name
    }
}

export function changeIngredientQuantity(idx, quantity) {
    return {
        type: Types.CHANGE_INGREDIENT_QUANTITY,
        idx,
        quantity
    }
}

export function changeIngredientUnit(idx, unit) {
    return {
        type: Types.CHANGE_INGREDIENT_UNIT,
        idx,
        unit
    }
}

export function insertStep() {
    return {
        type: Types.INSERT_STEP
    }
}

export function removeStep(idx) {
    return {
        type: Types.REMOVE_STEP,
        idx
    }
}

export function changeStep(idx, step) {
    return {
        type: Types.CHANGE_STEP,
        idx,
        step
    }
}

export function moveInstruction(idx, direction) {
    return {
        type: Types.MOVE_INSTRUCTION,
        idx,
        direction
    }
}