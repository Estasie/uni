import React from 'react';
import UserInfo from './UserInfo';
import './Navigation.scss';
import UserComponent from '../DbRouter';
import {NavLink} from "react-router-dom";
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faLayerGroup, faFolder, faCheckCircle, faEnvelope, faExclamation, faExclamationCircle} from '@fortawesome/free-solid-svg-icons';

class Navigation extends React.Component {
    constructor(props){
        super(props);
        
    }

    render(){
        return (
            
                <div className="navigation">
                    <UserInfo/>
                    
                   
                    
                    <ul>
                        <li>
                            <NavLink to="/Schedule">
                                <FontAwesomeIcon icon= {faLayerGroup}/>
                                Расписание
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/Tasks">
                            <FontAwesomeIcon icon= {faFolder}/>
                                Задания
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/Events">
                            <FontAwesomeIcon icon= {faCheckCircle}/>
                                События
                            </NavLink>
                        </li>
                        
                        <li>
                            <NavLink to="/Messages">
                            <FontAwesomeIcon icon= {faEnvelope}/>
                                Сообщения
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/Deadlines">
                            <FontAwesomeIcon icon= {faExclamationCircle}/>
                                Дедлайны
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/Settings">
                                Профиль
                            </NavLink>
                        </li>
                    </ul>

                    <button type="button" className="btnExit">Выход</button>
                </div>
            
            
        )
    }

    
}

export default Navigation;