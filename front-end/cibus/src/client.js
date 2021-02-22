/* 
this was named App.js first, found it too generic and not descriptive.

this handles the page logic
*/

import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { syncHistoryWithStore } from 'react-router-redux';
import { store } from './index.js';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Profile from './pages/Profile';
import MyRecipes from './pages/MyRecipes';
import AddRecipe from './pages/AddRecipe'
import YourRecipes from './pages/YourRecipes';
import SearchResults from './pages/SearchResults';





//ReactDOM.render(<Layout/>, document.getElementById('root'));

//const history = syncHistoryWithStore(browserHistory, store);

class Client extends Component{
    render(){
      return (
        <Router >
          <div className="Client">
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/about' component={About} />
              <Route exact path='/login' component={Login} />
              <Route exact path='/profile' component={Profile} />
              <Route exact path='/my-recipes' component={MyRecipes} />
              <Route exact path='/addrecipe' component={AddRecipe} />
              <Route exact path='/yourrecipes' component={YourRecipes} />
              <Route exact path='/searchResults' component={SearchResults} />
            </Switch>
          </div>
        </Router>
      );
    }
  }
  
  export default Client;
  