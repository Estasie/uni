import React, {Component} from 'react';
import {Col} from 'react-bootstrap';

export default class FinishedTask extends Component{
    constructor(props){
        super(props);
    }




    render(){
        return(
            <Col>
                <h2 className="task_header">Завершённые</h2>
            <div className="task__container"></div>
            </Col>
            
        )
    }
}