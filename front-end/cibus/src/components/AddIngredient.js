import React from 'react';
import { connect } from 'react-redux';
import { Form, Container, Row, Col } from 'react-bootstrap';
import { changeIngredientName, changeIngredientQuantity, changeIngredientUnit } from "../actions/addRecipeActions";


class AddIngredient extends React.Component {
  constructor(props) {
    super(props);

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleQuantityChange = this.handleQuantityChange.bind(this);
    this.handleUnitChange = this.handleUnitChange.bind(this);
  }

  handleNameChange(event) {
    this.props.changeIngredientName(this.props.idx, event.target.value);
    this.forceUpdate();
  }

  handleQuantityChange(event, data) {
    this.props.changeIngredientQuantity(this.props.idx, event.target.value);
    this.forceUpdate();
  }

  handleUnitChange(event, data) {
    this.props.changeIngredientUnit(this.props.idx, event.target.value);
    this.forceUpdate();
  }
  
  render(){
    return(
      <>
        <Col md="auto">
          <Form.Control type="text" value={this.props.ingredient.name} onChange={(event) => this.handleNameChange(event)} />
        </Col>

        <Col xs lg="2">
          <Form.Control type="text" value={this.props.ingredient.quantity} onChange={(event, data) => this.handleQuantityChange(event, data)} />
        </Col>     
            
        <Col xs lg="4">
          <Form.Control as="select" value={this.props.ingredient.unit} onChange={(event, data) => this.handleUnitChange(event, data)}>
            <option>Liter</option>
            <option>Deciliter</option>
            <option>Milliliter</option>
            <option>Tabelspoon</option>
            <option>Teaspoon</option>
            <option>Grams</option>
            <option>Kilograms</option>
            <option>Cup</option>
            <option>Pint</option>
            <option>Gallon</option>
            <option>Pinch</option>
            <option>Piece</option>
          </Form.Control>
        </Col>
      </>
    )
  }
}

const mapStateToProps = state => ({});
  
const mapDispatchToProps = {
    changeIngredientName: changeIngredientName,
    changeIngredientQuantity: changeIngredientQuantity,
    changeIngredientUnit: changeIngredientUnit,   
};
  
export default connect(mapStateToProps, mapDispatchToProps)(AddIngredient);
