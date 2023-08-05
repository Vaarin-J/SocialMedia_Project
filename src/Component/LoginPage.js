/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import "./LoginPage/LoginPage.css"
import Grid from '@mui/material/Grid'
import homepage_logo from '../images/Your_paragraph_text.png'
import name_logo from '../images/MainEnterB.png'
import fb from '../images/fb.png'
import SignIn from './SignIn/SignIn';
import SignUp from './SignUp/SignUp';


class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            isLogin: true 
        }
            
    }
    changeLogin = () => {
            if(this.state.isLogin){
                this.setState({isLogin:false});
            }
            else{
                this.setState({isLogin:true});
            }
    }

    render() { 
        return ( 
            <div>
                <Grid container>
                    <Grid item xs={3}>
                    </Grid>
                    <Grid item xs={6}>
                       <div className="loginpage__main">
                           <div>
                               <img src={homepage_logo} width="454px" />
                           </div>
                           <div>
                               <div className="loginpage_rightcomponent">
                                   <img className="loginpage__logo" src={name_logo} />
                                   <div className="loginPage__signin">

                                     {
                                        this.state.isLogin ? <SignIn/> : <SignUp/>
                                     }


                                        <div className="login__ordiv">
                                            <div className="login__dividor"></div>
                                            <div className="login__or">OR</div>
                                            <div className="login__dividor"></div>
                                        </div>

                                        <div className="login__fb"> 
                                            <img src = {fb} width="15px" style={{"MarginRight":"5px"}} />   Log In With FaceBook
                                        </div>
                                        <div className="login_forgt"> Forgot password?</div>
                                   </div>
                               </div>

                                <div className="loginpage__signupoption">
                                    {
                                        this.state.isLogin ?
                                        <div className= "loginPage__signin">
                                        Dont have an account? <span onClick={this.changeLogin} style={{"fontWeight":"bold","color":"#0395F6"}}>Sign Up </span>
                                        </div> :
                                        <div className= "loginPage__signup">
                                        Have an account? <span onClick={this.changeLogin} style={{"fontWeight":"bold","color":"#0395F6"}}>Sign In </span>
                                        </div>
                                    }
                                </div>

                                <div className="loginPage__downloadSection">
                                    <div>
                                    Get the app.
                                    </div>
                                    <div className="loginPage__option">
                                        
                                    </div>
                                </div>

                           </div>
                       </div>
                    </Grid>
                    <Grid item xs={3}>
                    </Grid>
                </Grid>
            </div>
         );
    }
}
 
export default LoginPage;