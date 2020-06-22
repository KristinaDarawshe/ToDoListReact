import React from "react"
import { InputGroup, FormControl, Button, Modal } from "react-bootstrap";
import "../App.css";
import {connect} from "react-redux";

class Popup extends React.Component{
    state = { newTask: ""};
    updateInput = (e) =>{
  
      this.setState({newTask:e.target.value});
      
    }
    saveTask = () =>{
         this.props.saveNewTask(this.state.newTask);
    }

    render(){
    return(
        <Modal.Dialog className="POPUP">
        <Modal.Header closeButton onClick = {() => {this.props.close()}}>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text>With textarea</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl as="textarea" aria-label="With textarea" onChange={(e) => {this.updateInput(e)}} />
          </InputGroup>
        </Modal.Body>

        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => {
              this.props.close();
            }}
          >
            Close
          </Button>
          <Button variant="primary" onClick={() => {
              this.saveTask();
            }}>Save changes</Button>
        </Modal.Footer>
      </Modal.Dialog>
        );
    }
}


function mapDispatchToProps(dispatch) {
    return {
      close: () => dispatch({ type: "CLOSE"}),
      saveNewTask: (data) => dispatch({ type: "SAVE", data}),
    };
  }
export default connect(null,mapDispatchToProps)(Popup);