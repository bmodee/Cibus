import React from 'react';
import { connect } from 'react-redux';
import styles from './RecipeBrowser.module.css';
import { fetchRecipes, openRecipe } from '../actions/myRecipes';

export class RecipeSummary extends React.Component {
    constructor(props) {
        super(props);

        this.openRecipe = this.openRecipe.bind(this);
    }
    render(){
        return(
            <div className={styles.recipeSummary} onClick={this.openRecipe}>
                <h4>{this.props.recipe.title}</h4>
                {this.props.recipe.image !== undefined ? <img className={styles.recipeSummaryImage} src={this.props.recipe.image} />: ""}
                <label>By {this.props.recipe.creatorName}</label>
                <br/>
                <p>{this.props.recipe.description}</p>
            </div>
        )
    }

    openRecipe() {
        this.props.openRecipe(this.props.index);
        //console.log(this.props.recipes[this.props.index]);
    }
}

const mapStateToProps = state => ({
    recipes: state.myRecipes.recipes
});

const mapDispatchToProps = {
    openRecipe
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipeSummary);