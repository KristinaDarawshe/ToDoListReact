import React from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import { connect } from "react-redux";
class TaskInsertion extends React.Component {
  state = { data: "" };
  updateInput = (e) => {
    this.setState({ data: e.target.value });
  };
  insertTaskToList() {
    this.props.insertTask(this.state.data);
  }
  render() {
    return (
      <div className="insertCont">
        <InputGroup>
          <InputGroup.Prepend>
            <InputGroup.Text id="inputGroup-sizing-sm">Task </InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            placeholder="what you have to do ? "
            aria-label="what you have to do ? "
            aria-describedby="basic-addon2"
            onChange={(e) => {
              this.updateInput(e);
            }}
          />
          <InputGroup.Append>
            <Button
              variant="outline-secondary"
              onClick={() => this.insertTaskToList()}
            >
              ADD
            </Button>
            <Button variant="outline-secondary" onClick={() => this.props.saveList()}>
              Save List
            </Button>
          </InputGroup.Append>
        </InputGroup>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    insertTask: (data) => dispatch({ type: "INSERT", data }),
    saveList: () => dispatch({ type: "SAVELIST" }),
  };
}
export default connect(null, mapDispatchToProps)(TaskInsertion);
