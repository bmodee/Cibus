import React from 'react';
import { connect } from 'react-redux';
import NavigationBar from '../components/NavigationBar';
import { Container, Row, Col } from "react-bootstrap";



class Profile extends React.Component {
    render(){
        return(
            <div>
                <NavigationBar/>
                {(this.props.user.name === undefined) ? <h1>Please log in to see this page</h1> : 
                    <Container>
                        <Row>
                            <h1>page: Profile</h1>
                        </Row>

                        <Row>Name: {this.props.user.name}</Row>

                        <Row>Number of Recipes:</Row>

                        <Row>Email: {this.props.user.email}</Row>

                    </Container>
                }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    user: state.user
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);