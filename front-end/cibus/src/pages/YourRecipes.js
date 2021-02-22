import React from 'react';
import NavigationBar from '../components/NavigationBar';
import { Form, Container, Row, Col } from "react-bootstrap";



class YourRecipes extends React.Component {
    render(){
        return(
            <div>
                <NavigationBar/>
                <Container>
                    <Row>
                        <h1>Number of Recipes: index</h1>
                        
                    </Row>

                    <Row>Recipe #1 Link </Row>

                    <Row>Recipe #2 Link </Row>

                    <Row>Recipe #3 Link </Row>

                    <Row>Recipe #4 Link </Row>
                </Container>
            </div>
        )
    }
}

export default YourRecipes