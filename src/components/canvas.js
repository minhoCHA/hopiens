import React, { Component } from "react";
import ReactDOM from "react-dom";

class Canvas extends Component {
  render() {
    return (
      <h2>LALALA2</h2>
    );
  }
}

export default Canvas;

const wrapper = document.getElementById("container2");
wrapper ? ReactDOM.render(<Canvas />, wrapper) : false;