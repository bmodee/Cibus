import React from 'react'
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, Nav, Form, Button } from 'react-bootstrap';
import SearchBar from './SearchBar';
import { push } from 'react-router-redux';
import { logout } from "../actions/login";


class NavigationBar extends React.Component {
  constructor(props) {
    super(props);

    this.updateUrl = this.updateUrl.bind(this);
    this.handleLogOut = this.handleLogOut.bind(this);
  }
  
  handleLogOut(){
      window.FB.logout((response) => {
      //user is logged out
      //console.log(this)
      this.props.logout();
    });
  }

  updateUrl(path) {
    window.history.pushState({page: 1}, "test", path)
    this.forceUpdate();
  }

  render(){
      return(
        <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand path="/"> Cibus </Navbar.Brand>
            <Nav className="mr-auto">
              <Link to='/'> <span className="ml-2">Home</span></Link>
              <Link to='/about' > <span className="ml-2">About</span> </Link>
              {(this.props.user.name === undefined) ? <div /> :  
                <div>
                  <Link to="/profile"> <span className="ml-2">Profile</span> </Link>
                  <Link to="/addRecipe"> <span className="ml-2">Add Recipe</span> </Link>
                  <Link to="/my-recipes"> <span className="ml-2">My Recipes</span> </Link>
                </div>
              }
             
            </Nav>
          <SearchBar />
          <Nav className="ml-auto">
            {(this.props.user.name === undefined) ? <Link to="/login">Login</Link> : <Button onClick = {this.handleLogOut} >Logout</Button> }  
          </Nav>
      </Navbar>
      </div>
      );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = {
  logout
};

export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar);