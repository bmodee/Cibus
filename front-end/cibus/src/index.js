import React from 'react';
import ReactDOM from 'react-dom';
import Client from './client'
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import {createStore, applyMiddleware, compose} from 'redux';
import reducers from './reducers/reducers';
import { Provider } from 'react-redux';
import { axiosMiddleware } from "./middleware/axios.js";
import Units from "./units";
import { insertRecipe } from "./actions/myRecipes.js"; 

const FB_APP_ID = "259726835241059";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers,
    composeEnhancers(
        applyMiddleware(axiosMiddleware)
    )
);
window.fbAsyncInit = function() {
window.FB.init({
    appId      : FB_APP_ID,
    status     : true,
    xfbml      : true,
    version    : 'v3.1' // or v2.6, v2.5, v2.4, v2.3
  });
};

ReactDOM.render(
    <Provider store={store}>
        <Client />
    </Provider>, 
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
