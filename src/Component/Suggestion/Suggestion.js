import { Avatar } from '@mui/material';
import React, { Component } from 'react';
import "./Suggestion.css"
import imageSrc1 from '../../images/pp1.png'
import imageSrc2 from '../../images/pp2.png'
import imageSrc3 from '../../images/pp3.jpeg'

class Suggestion extends Component {
    constructor(props) {
        super(props);
        this.state= {}
    }
    render() { 
        return (<div>
            <div className="suggestions__container">
                <div className="suggestions__header">
                    <div>Suggestions For You</div>
                </div>
                <div className="suggestions__body">
                    <div className="suggestions__friends">
                        <Avatar src={imageSrc1} className="suggestions__image"/>
                        <div className="suggestions__username">Temporary Text</div>
                    </div>
                    <div className="suggestions__friends">
                        <Avatar src={imageSrc2} className="suggestions__image"/>
                        <div className="suggestions__username">React.js</div>
                    </div>
                    <div className="suggestions__friends">
                        <Avatar src={imageSrc3} className="suggestions__image"/>
                        <div className="suggestions__username">Html/Css/Js</div>
                    </div>
                    <div className="suggestions__friends">
                        <Avatar src={imageSrc2} className="suggestions__image"/>
                        <div className="suggestions__username">MySql</div>
                    </div>
                    <div className="suggestions__friends">
                        <Avatar src={imageSrc3} className="suggestions__image"/>
                        <div className="suggestions__username">Java SpringBoot</div>
                    </div>
                    <div className="suggestions__friends">
                        <Avatar src={imageSrc1} className="suggestions__image"/>
                        <div className="suggestions__username">Firebase Auth</div>
                    </div>
                </div>
            </div>
        </div> );
    }
}
 
export default Suggestion;