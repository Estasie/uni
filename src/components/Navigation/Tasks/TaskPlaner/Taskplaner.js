import React, {Component} from 'react';

import NewTasks from './NewTasks';
import FinishedTask from './FinishedTasks';
import {Row} from 'react-bootstrap';
import './Taskplaner.scss';



export default class Taskplan extends Component {
    constructor(props){
        super(props);
    }



    render(){
        return(
            <Row>
            <NewTasks/>
            <FinishedTask/>
            <NewTasks/>
            </Row>
        )
    }
}