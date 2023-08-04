import React, { Component } from 'react';
import "../LoginPage/LoginPage.css"
import firebase from '../firebase';

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            emailId: null,
            password: null
         }
    }

    login = () =>{
        const auth = firebase.auth();
        auth.signInWithEmailAndPassword(this.state.emailId, this.state.password)
            .then((userCredential) => {
            // Signed in
            var user = userCredential.user;
            localStorage.setItem("users",user);
            window.location.reload();
            // ...
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
            });
                }


    render() { 
        return ( <div>
            <input className ="loginpage__text" onChange={(event)=>(this.state.emailId=event.currentTarget.value)} type="text" placeholder='Phone number, username, or email'/>
            <input className ="loginpage__text" onChange={(event)=>(this.state.password=event.currentTarget.value)} type="password" placeholder='Password'/>
            <button className ="login__button" onClick={this.login}>Sign In</button>                                       
                </div>);
    }
}
 
export default SignIn;