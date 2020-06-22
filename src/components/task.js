import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { ListGroup, Button } from "react-bootstrap";
import { connect } from "react-redux";
class Task extends React.Component {
  
 
  render() {
      
    return (
        
        <div className="taskStyle" >
        <ListGroup.Item as="li" >{this.props.task}</ListGroup.Item>
        <Button variant="danger" onClick={() => this.props.deletTask(this.props.index)}> X </Button>
        <Button variant="success" onClick={() =>  this.props.editTask(this.props.index)}>Edit</Button>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    deletTask: (data) => dispatch({ type: "DELETE", data }),
    editTask: (data) => dispatch({ type: "EDIT", data }),
  };
}
export default connect(null, mapDispatchToProps)(Task);
