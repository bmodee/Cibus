import React from 'react';
import { connect } from 'react-redux';
import NavigationBar from '../components/NavigationBar';
import RecipeBrowser from '../components/RecipeBrowser';

class SearchResults extends React.Component {
    render(){
        return(
           <div>
               <NavigationBar />
                <div class="row justify-content-center">
                    <h1>Results</h1>
                </div>
               <RecipeBrowser recipes={this.props.recipes} />
           </div>
        )
    }
}

const mapStateToProps = state => ({
    recipes: state.search.recipes,
    user: state.user
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);