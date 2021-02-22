/**
 * TODO:
 * 
 * -Add functionality with back-end
 * 
 * -Fix Styling
 * 
 * 
 */

import React from 'react';
import { connect } from "react-redux";
import { Button, Form, FormControl, Row, Col } from "react-bootstrap";
import { changeSearchWord, searchRecipes } from "../actions/searchActions";
import {Link} from 'react-router-dom';

 class SearchBar extends React.Component {
    constructor() {
        super();

        this.handleSearchWordChange = this.handleSearchWordChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    handleSearchWordChange(event) {
        this.props.changeSearchWord(event.target.value);
    }


    handleSearch() {
        this.props.searchRecipes(this.props.searchWord);
    }

    render(){
        return(
            <div className="mr-sm-2">
                <Row>
                    <Col>
                        <FormControl type="text" placeholder="Search recipes"  onChange={(event) => this.handleSearchWordChange(event)} />
                    </Col>
                    <Col>
                        <Link to="/searchResults"><Button variant="success" onClick = {this.handleSearch} >Search</Button></Link>
                    </Col>
                </Row>
            </div>
            );
        }
}


const mapStateToProps = state => ({
    searchWord: state.search.searchWord
});

const mapDispatchToProps = {
    changeSearchWord,
    searchRecipes
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);