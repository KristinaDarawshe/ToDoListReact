import React from "react";
import "./App.css";
import TaskInsertion from "./components/taskInsertion";
import List from "./components/list"
class App extends React.Component {
  render() {
    return (
      <>
        <TaskInsertion />
        <List/>
      </>
    );
  }
}



export default App;
