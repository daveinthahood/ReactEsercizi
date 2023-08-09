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

    handleDelete = (i) => {
        this.setState((state) => {
            const newItems = state.items.filter((i) => i != items)
            return {items:newItems}
        })
    }


    render () {
        const {items, newValue} = this.state
        const {render} = this.props

        return (
            <>
                <h1> To Do</h1>

                <div>
                    {render(items, this.handleDelete)}

                    <input type="text" 
                           value={newValue}
                           onChange={this.handleInput} 
                        />

                    <button onClick={this.handleItems}> Add </button>
                    <button onClick={this.handleReset}> Reset </button>
                    <button onClick={this.handleDelete}> Delete </button>
                </div>


            </>
        )
    }

}