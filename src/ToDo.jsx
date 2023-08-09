// Modify the TodoList component so that the input clears every 
// time a Todo is added to the items array.

import React from "react";
import { Component } from "react";

export class TodoList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            items:[],
            newValue :"",
        }
    }

    handleInput = (event) => {
        this.setState({newValue: event.target.value})
    }

    handleItems = () => {
        const {items, newValue}= this.state;
        if(newValue != ""){
            const newTodo = [
                ...items, 
                newValue
            ];
            this.setState({
                items:newTodo, 
                newValue:""})
        }
    }
    handleReset = () => {
        this.setState({items: []})
    }


    render () {
        const {items, newValue} = this.state
        return (
            <>
                <h1> To Do</h1>

                <div>
                    <ul>
                        {
                        items.map(
                            (items, i) => (
                            <li key={i}> {items} </li>
                        ))}
                    </ul>
                    <input type="text" 
                           value={newValue}
                           onChange={this.handleInput} 
                        />

                    <button onClick={this.handleItems}> Add </button>
                    <button onClick={this.handleReset}> Reset </button>
                </div>


            </>
        )
    }

}