/**
 * Todo:
 * 
 * -Fix this pile of spaghetti-code:
 * right now its a mix between css(?) with divs and bootstrap for styling
 * 
 * -Add dish name, no its not done
 * 
 * -Fix remove button to remove the right ingredient:
 * ATM it removes the latest added ingredient no matter
 * which remove button is clicked (check idx in handeRemoveIngredient)
 * 
 * -Fix styling [check?]
 * 
 * -Connect with back-end to send the right data
 * 
 * 
 */


import React from "react";
import { connect } from "react-redux";
import NavigationBar from '../components/NavigationBar';
import AddIngredient from '../components/AddIngredient';
import { Button, Form, Container, Row, Col, InputGroup, Divider } from "react-bootstrap";
import { changeTitle, changeDescription, insertIngredient, removeIngredient, insertStep, removeStep, changeStep, moveInstruction } from "../actions/addRecipeActions";
import { axiosPost, axiosGet } from "../actions/communication";
import {Link} from 'react-router-dom';

class AddRecipe extends React.Component {
  constructor() {
    super();

    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangeDescription = this.handleChangeDescription.bind(this);
    this.handleInsertIngredient = this.handleInsertIngredient.bind(this);
    this.handleRemoveIngredient = this.handleRemoveIngredient.bind(this);
    this.handleInsertStep = this.handleInsertStep.bind(this);
    this.handleRemoveStep = this.handleRemoveStep.bind(this);
    this.handleHandleChangeStep = this.handleHandleChangeStep.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleMoveInstruction = this.handleMoveInstruction.bind(this);
  }

  handleChangeTitle(event) {
    this.props.changeTitle(event.target.value);
    //this.forceUpdate();
  }

  handleChangeDescription(event) {
    this.props.changeDescription(event.target.value);
    //this.forceUpdate();
  }
  
  handleInsertIngredient() {
    this.props.insertIngredient();
    //this.forceUpdate();
  }
  
  handleRemoveIngredient(idx) {
    this.props.removeIngredient(idx);
    //this.forceUpdate();
  }
  
  handleInsertStep() {
    this.props.insertStep();
    //this.forceUpdate();
  }

  handleRemoveStep(idx) {
    this.props.removeStep(idx);
    //this.forceUpdate();
  }

  handleHandleChangeStep(event, idx) {
    this.props.changeStep(idx, event.target.value);
    //this.forceUpdate();
  }

  handleMoveInstruction(idx, direction) {
    this.props.moveInstruction(idx, direction);
  }

  handleSubmit() {
    this.props.recipe.creatorName = this.props.user.name;
    this.props.recipe.creatorId = this.props.user.id;
    this.props.axiosPost("addRecipe", {"recipe": this.props.recipe}, {});
  }

  render() {    
    if (this.props.user.name === undefined) return (
      <>
      <NavigationBar />
      <h1>Please log in to see this page</h1>
      </>
    )
    return (
    <div>
      <NavigationBar />

      <Container>
      <h1>Add a recipe</h1>
      <label>Title</label>
      <Form.Control value={this.props.recipe.title} onChange={(event) => this.handleChangeTitle(event)} />
      <div className="mt-4">
      <label>Description:</label>
        <Form.Control
          as="textarea" 
          value={this.props.recipe.description}
          rows='5' 
          cols='55' 
          name='description' 
          onChange={(event) => this.handleChangeDescription(event)}
        />
      </div>
      <hr />
      </Container>
            

      <Container>
        {this.props.ingredients.map((ingredient, idx) => (                
          <Row className="mt-4" key={"row_" + idx}> 
            <div className="ingredient" className="input-group">
              <AddIngredient ingredient={this.props.recipe.ingredients[idx]} idx={idx} />
      
              <button 
              type="button"
              onClick={() => this.handleRemoveIngredient(idx)}
              className="small"
              className="btn btn-danger">
              -
              </button>
            </div>
          </Row>
        ))}

        <Row>
            <Col>
            <div className='mt-2'>
                <button
                    type="button"
                    onClick={this.handleInsertIngredient}
                    className="small"
                    className="btn btn-success"> 
                Add ingredient
                </button>
            </div>
            </Col>
        </Row>
      <hr />
      </Container>


      <Container>
      {this.props.instructions.map((instruction, idx) => (
          <div key={"instruction_"+idx} className='mt-4'>
            <label>Step {idx + 1}</label>
            <div className="ml-10">
              <button 
                  type="button"
                  onClick={() => this.handleRemoveStep(idx)}
                  className="btn btn-danger">
                  -
              </button>
              <button 
              type="button"
              onClick={() => this.handleMoveInstruction(idx, "UP")}
              className="btn btn-primary ml-4">
              Up
              </button>
              <button 
              type="button"
              onClick={() => this.handleMoveInstruction(idx, "DOWN")}
              className="btn btn-primary ml-2">
              Down
              </button>
            </div>
            <Form.Control
            as="textarea"
            className="mt-2"
            rows='3' 
            cols='55' 
            name='description'
            value={this.props.recipe.instructions[idx]}
            onChange={(event) => this.handleHandleChangeStep(event, idx)}
            />
          </div>
      ))}
      <Row>
        <Col>
        <div className='mt-2'>
            <button
                type="button"
                onClick={this.handleInsertStep}
                className="small"
                className="btn btn-success"> 
            Add step
            </button>
        </div>
        </Col>
      </Row>
      <hr />
      </Container>
      
      <Container>
        <div className='m-6'>
        <Link to="/my-recipes">
          <Button
              onClick={this.handleSubmit}
              variant="success">
              Submit recipe
          </Button>
        </Link>
        </div>
      </Container>
    </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    ingredients: state.addRecipe.ingredients,
    instructions: state.addRecipe.instructions,
    recipe: state.addRecipe,
    user: state.user,
  }
}

const mapDispatchToProps = {
  changeTitle: changeTitle,
  changeDescription: changeDescription,
  insertIngredient: insertIngredient,
  removeIngredient: removeIngredient,
  insertStep: insertStep,
  removeStep: removeStep,
  changeStep: changeStep,
  axiosPost: axiosPost,
  axiosGet: axiosGet,
  moveInstruction: moveInstruction
};

export default connect(mapStateToProps, mapDispatchToProps)(AddRecipe);
