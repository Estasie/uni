import React, { Component } from "react";
import Taskplan from "./TaskPlaner";


import "./Tasks.scss";

export default class Tasks extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
      
      <div className="container">
          <div className="header__container"><h1>Задания</h1></div>
          
          <Taskplan />
        </div>
        
      </>
    );
  }
}
