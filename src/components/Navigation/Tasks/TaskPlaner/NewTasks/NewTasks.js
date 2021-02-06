import React, {Component, useState} from 'react';
import {Col} from 'react-bootstrap';
import Task from '../Task';


export default class NewTask extends Component{
    constructor(props){
        super(props);
    }




    render(){
        return(
            <Col>
                <h2 className="task_header">Новые</h2>
            <div className="task__container">
                <Task/>
                
            </div>
            </Col>
            
        )
    }
}