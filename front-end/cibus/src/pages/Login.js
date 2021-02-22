/**
 * TODO:
 * 
 * -Styling
 * 
 * -Connect with backend
 * 
 */


import React, {Component} from 'react';
import { connect } from 'react-redux';
import NavigationBar from '../components/NavigationBar';
import FacebookLogin from 'react-facebook-login';
import { Container } from 'react-bootstrap';
import { login } from '../actions/login';

const FB_APP_ID = "259726835241059";

class Login extends Component {

  render() {

    const responseFacebook = (response) => {
      this.props.login(response.name, response.email, response.id, response.accessToken);
    }   

    return (

      <div className="Login">
        <NavigationBar/>
          <Container>
            <div className="row justify-content-center">
              <FacebookLogin
                appId={FB_APP_ID }
                autoLoad={true}
                fields="name,email,picture"
                callback={responseFacebook}
              />
            </div>
            </Container>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {
    login
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);