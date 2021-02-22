import React from 'react';
import { connect } from 'react-redux';
import styles from './RecipeBrowser.module.css';
import { fetchRecipes, openRecipe } from '../actions/myRecipes';
import Ingredient from './Ingredient';
import { CloseButton } from 'react-bootstrap';
import { closeRecipe } from '../actions/myRecipes';

class Recipe extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div className={styles.recipe} onClick={this.openRecipe}>
                <div>
                    <CloseButton onClick={this.props.closeRecipe}/>
                    <h1>{this.props.recipe.title}</h1>
                    <br />
                    {this.props.recipe.image !== undefined ? <img className={styles.recipeImage} src={this.props.recipe.image} />: ""}
                    <h2>By {this.props.recipe.creatorName}</h2>
                </div>
                <div>
                    <h4>You will need:</h4>
                    {this.props.recipe.ingredients.map((ingredient, index) => <Ingredient key={"ingredient_" + index} ingredient={ingredient}/>)}
                </div>
                <div>
                    <h4>How to make it:</h4>
                    {this.props.recipe.instructions.map((step, index) => <p key={"step_" + index} className={styles.recipeStep}><b>Step {index + 1}</b>: {step}</p>)}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {
    closeRecipe
};

export default connect(mapStateToProps, mapDispatchToProps)(Recipe);