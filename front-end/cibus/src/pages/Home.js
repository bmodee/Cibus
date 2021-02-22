import React from 'react';
import {connect} from 'react-redux'
import NavigationBar from '../components/NavigationBar';
import bowlGIF from '../assets/bowlGIF.gif';
import { Button, Form, Container, Row, Col } from "react-bootstrap";
import {axiosGet} from "../actions/communication";
import { fetchRecipes } from "../actions/myRecipes";


 class Home extends React.Component {
    render(){
        return(
           <div>
                <NavigationBar />
                <Container>
                    <div class="row justify-content-center">
                        <img src={bowlGIF} alt="bowl of ramen" />
                    </div>  
                </Container>
            </div>
        )
    }
}
const mapStateToProps = state => ({
  });
  
  const mapDispatchToProps = {
    axiosGet,
    fetchRecipes
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Home);