import React from 'react';
import UserInfo from './userInfo';
import './nav.scss';

import {NavLink} from "react-router-dom";

class Nav extends React.Component {
    constructor(props){
        super(props);
        
    }

    render(){
        const data = {
            image:"https://res.cloudinary.com/druw4nfh6/image/upload/w_320/v1/teenslang/n2rqx4ll2swnimasvkn8",
            name: 'Алиса'
        }
        return (
            
                <div className="navigation">
                    <UserInfo {...data}/>
                    
                    <ul>
                        <li>
                            <NavLink to="/Schedule">
                                Расписание
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/Tasks">
                                Задания
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/Events">
                                События
                            </NavLink>
                        </li>
                        
                        <li>
                            <NavLink to="/Messages">
                                Сообщения
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/Deadlines">
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

export default Nav;