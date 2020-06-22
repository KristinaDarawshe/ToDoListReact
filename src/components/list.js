import React from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import { ListGroup } from "react-bootstrap";
import Popup from "./popup";
import Task from "./task";
import {connect} from "react-redux";
import "../App.css";

class List extends React.Component{
   
    render(){
    return(
        <div className="listCont">
        {this.props.showPopup && <Popup />}
       {!this.props.showPopup && <ListGroup as="ul">
          {this.props.tasks.map((task, index) => {
            return (
              <Task key={index} task = {task} index={index}></Task>
            );
          })}
        </ListGroup>}
      </div>
        );
    }
}
function mapStateToProps(state){
    return{
        tasks:state.tasks,
        showPopup:state.showPopup
    }
}
export default connect(mapStateToProps,null)(List) ;