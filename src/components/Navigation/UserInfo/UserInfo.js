import React from  'react';
import './UserInfo.scss';
import UserComponent from '../../DbRouter';

const UserInfo =  ({name,image}) =>{

    return(
        <div className="userInfo">
            <UserComponent/>
            
            <button type="button">{name}</button>
        </div> 
    )   
 }



export default UserInfo;