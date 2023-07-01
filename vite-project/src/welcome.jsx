import React from "react"

export class Welcome extends React.Component {
    render(){
        return <p> Welcome {this.props.name}, your age is {this.porps.age} </p>
    }
}