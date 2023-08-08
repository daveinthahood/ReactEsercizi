import React from "react";
import { Component } from "react";

export class ClickTracker extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            lastClicked : ""
        }
    }


    handleClick = (event) => {
        const { target } = event;
        const { name } = target

        this.setState({
            lastClicked: name
        })
    }

    render() {
        const {lastClicked} = this.state;

        return (
            <>

               <p> Last Click : {lastClicked} </p>

                <button name="first-button" onClick={this.handleClick}> Button </button>
                <button name="second-button" onClick={this.handleClick}> Button {" "} </button>
                <button name="third-button" onClick={this.handleClick}> Button{" "} </button>
            </>
        )
    }
}