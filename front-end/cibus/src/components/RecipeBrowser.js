import React from 'react';
import styles from './RecipeBrowser.module.css';
import { connect } from 'react-redux';
import RecipeSummary from './RecipeSummary';
import Recipe from "./Recipe.js";

class RecipeBrowser extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div className={styles.recipeWrapper}>
                {this.props.openRecipe !== undefined 
                    ? <Recipe recipe={this.props.recipes[this.props.openRecipe]}/> 
                    : <div className={styles.recipeBrowser}>
                        {this.props.recipes.map((recipe, index) => <RecipeSummary key={"recipeSummary_" + index} recipe={recipe} index={index} />)}
                      </div>}
                
            </div>
        )
    }
}

const mapStateToProps = state => ({
    user : state.user,
    openRecipe: state.myRecipes.openRecipe
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(RecipeBrowser);
