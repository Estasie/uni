import React, {Component} from  'react';
import './userInfo.scss';
const UserInfo =  ({name,image}) =>{

    return(
        <div className="userInfo">
            <button type="button" className="ImageButton"><img src={image}></img></button>
            <button type="button">{name}</button>
        </div> 
    )   
 }



export default UserInfo;