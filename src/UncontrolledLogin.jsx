import React, { useEffect, useRef } from "react";
import { Component } from "react";


export class UncontrolledLogin extends React.Component{
        constructor(props) {
            super(props);
            this.usernameRef = React.createRef();
            this.passwordRef = React.createRef()
        }   

           

    handleSubmit = (event) => {
        event.preventDefault()

        //accediamo ai valori 
        const username = event.target.elements.username.value
        const password = event.target.elements.password.value
        const remember = event.target.elements.remember.checked
    
        console.log({
            username, 
            password, 
            remember
        });

    }

    render() {
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="username" ref={this.usernameRef} placeholder="user"/>
                    <input type="password" name="password" ref={this.passwordRef}/>
                    <input type="checkbox" name="remember"/>
                    <button type="submit"> Login </button>
                </form>
            </>
        )
    }

}