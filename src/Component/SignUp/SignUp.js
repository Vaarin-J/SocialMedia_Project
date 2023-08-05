import React, { Component } from 'react';
import "./SignUp.css"
import firebase from "../firebase"


class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            emailId : null,
            name: null,
            userName: null,
            password: null
        }
    }

  newSignUp = () =>{
        const auth = firebase.auth();
        auth.createUserWithEmailAndPassword(this.state.emailId, this.state.password).then((userCredential) => {
            // Signed in 
            var user = userCredential.user;

            let payload = {
                "userId":user.uid,
                "userName":this.state.userName,
                "name":this.state.name,
                "profileImage":""
            }

            const requestOptions ={
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body : JSON.stringify(payload),
            }

            fetch("https://enterjain-b6e10e8b56bc.herokuapp.com/users",requestOptions)
            .then(response => response.json())
            .then(data => {
                const stringifiedUser = JSON.stringify(user)
                localStorage.setItem("users", stringifiedUser);                
                window.location.reload();
            })
            .catch(error =>{

            })

            // ...
        })

        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            // ..
        });
    }

    render() { 
        return (<div>
            <input className ="loginpage__text" onChange= {(event)=>{this.state.emailId=event.currentTarget.value}} type="text" placeholder='Phone number or Email'/>
            <input className ="loginpage__text" onChange= {(event)=>{this.state.name=event.currentTarget.value}} type="text" placeholder='Full Name'/>
            <input className ="loginpage__text" onChange= {(event)=>{this.state.userName=event.currentTarget.value}} type="text" placeholder='Username'/>
            <input className ="loginpage__text" onChange= {(event)=>{this.state.password=event.currentTarget.value}} type="password" placeholder='Password'/>
            <button className ="login__button" onClick={this.newSignUp}>Sign Up</button>       

                </div>  );
    }
}
 
export default SignUp;