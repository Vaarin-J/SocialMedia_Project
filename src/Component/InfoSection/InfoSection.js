import { Avatar } from '@mui/material';
import React, { Component } from 'react';
import "./InfoSection.css"
import imageSrc from "../../images/pp1.png"
import firebase, { storage } from "../firebase";
import 'firebase/compat/auth';


class InfoSection extends Component {
    constructor(props) {
        super(props);
        this.state={
        }
     
   }

    render() { 
        return ( 
            <div>
            <div className="info__container">
                <Avatar src={imageSrc} className="info__image"/>
                <div className="info_content">
                    <div className="info_username">{JSON.parse(localStorage.getItem("users")).email}</div>
                    <div className="info_description">My Social Media App</div>
                </div>
                
            </div>
        </div> );

    }
}
 
export default InfoSection ;
