import React from "react";
import { Component } from "react";


export class UncontrolledLogin extends React.Component{

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
                    <input type="text" name="username"/>
                    <input type="password" name="password"/>
                    <input type="checkbox" name="remember"/>
                    <button type="submit"> Login </button>
                </form>
            </>
        )
    }

}