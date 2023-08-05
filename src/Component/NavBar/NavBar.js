/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import "./NavBar.css"
import Grid from '@mui/material/Grid'
import enterjain_log from '../../images/MainEnterL.png'
import home from "../../images/home.svg";
import message from "../../images/message.svg";
import find from "../../images/find.svg";
import react from "../../images/love.svg";
import Avatar from '@mui/material/Avatar';
import pp from "../../images/pp1.png"


class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() { 
        return ( <div>
                    <div className ="navbar__barContent">
                        <Grid container>
                            <Grid item xs ={2}>
                                
                            </Grid>
                            <Grid item xs = {3}>
                                <img className= "navbar_logo" src={enterjain_log} width ="150px" />
                            </Grid>
                            <Grid item xs = {3}>
                                <input className = "navbar__searchBar" text="text" placeholder = "Search" /> 
                            </Grid>
                            <Grid item xs={3} style={{"display":"flex"}}>
                                    <img className="navbar__img" src = {home} width="25px"/>
                                    <img className="navbar__img" src = {message} width="25px"/>
                                    <img className="navbar__img" src = {find} width="25px"/>
                                    <img className="navbar__img" src = {react} width="25px"/>
                                    <Avatar src= {pp} className="navbar__img" style={{"maxWidth":"25px","maxHeight":"25px"}}/>
                            </Grid>
                            <Grid item xs = {1}>

                            </Grid>
                        </Grid>
                        
                    </div>
                </div> );
    }
}
 
export default NavBar ;