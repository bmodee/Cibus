import React from 'react';
import { connect } from 'react-redux';
import styles from './RecipeBrowser.module.css';
import { fetchRecipes, openRecipe } from '../actions/myRecipes';

export default class Ingredient extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div className={styles.ingredient}>
                {this.props.ingredient.quantity} {this.props.ingredient.unit} of {this.props.ingredient.name}
            </div>
        )
    }
}