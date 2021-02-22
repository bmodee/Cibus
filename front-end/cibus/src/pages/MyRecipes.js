import React from 'react';
import { connect } from 'react-redux';
import NavigationBar from '../components/NavigationBar';
import RecipeBrowser from '../components/RecipeBrowser';
import { fetchRecipes } from '../actions/myRecipes';

class Login extends React.Component {
    componentDidMount() {
        if (this.props.user.name !== undefined) this.props.fetchRecipes({creatorId: this.props.user.id});
    }

    render(){
        if (this.props.user.name === undefined) return (
            <>
                <NavigationBar />
                <h1>Please log in to see this page</h1>
            </>
        )
        return(
        <div>
                <NavigationBar />
                <div className="row justify-content-center">
                    <h1>My recipes</h1>
                </div>
                {(this.props.user.name === undefined) ? <div /> : <RecipeBrowser recipes={this.props.recipes}/>}
        </div>
        )
    }
}

const mapStateToProps = state => ({
    user: state.user,
    recipes: state.myRecipes.recipes
});

const mapDispatchToProps = {
    fetchRecipes
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);